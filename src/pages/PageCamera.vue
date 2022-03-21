<template>
  <q-page class="constrain-more q-pa-md">
    <div class="camera-frame q-pa-md">
      <video ref="video" v-show="!imageCaptured"  class="full-width" autoplay playsinline/>
      <canvas ref="canvas" v-show="imageCaptured" class="full-width" height="240"/>
    </div>
    <div class="text-center q-pa-md">
      <q-btn @click="captureImage"  v-if ="hasCameraSupport" color="grey-10" icon="camera"  size="lg" round/>
      <q-file v-else outlined @input="captureImageFallback" v-model="imageUpload" label="choose an image" accept="image/>">
         <template v-slot:prepend>
           <q-icon name="add"/>
         </template>
      </q-file>
        <div class="row justify-center q-ma-md">
          <q-input v-model="post.caption"  class="col col-sm-6" label="standard" dense />
        </div>
        <div class="row justify-center q-ma-md">
          <q-input v-model="post.location"  class="col col-sm-6" label="standard" dense >

          <template v-slot:append>
            <q-btn round dense flat icon="add"/>
          </template>
          </q-input>
        </div>
        <div class="row justify-center q-mt-lg">
          <q-btn color="primary"
          label="Post Image" rounded unelevated
          @click="submitImage"
          />
        </div>
    </div>



  </q-page>
</template>

<script>
import { uid } from 'quasar';
require ('md-gum-polyfill');
import axios from 'axios';

export default {
  name: 'PageCamera',
  data(){
    return{
     post:{
       id:uid(),
       caption: '',
       location: '',
       photo:null,
       date: Date.now()
     },
       imageCaptured:false,
       imageUpload: [],
       hasCameraSupport:true
    }
  },
  methods:{
    initCamera(){
      navigator.mediaDevices.getUserMedia({
        video:true
      }).then(stream => {
        this.$refs.video.srcObject = stream
      }).catch(error => {
        this.hasCameraSupport = false
      })
    },
    captureImage(){
      let video = this.$refs.video
      let canvas = this.$refs.canvas
      canvas.width = video.getBoundingClientRect().width
      canvas.height = video.getBoundingClientRect().height
      let context  = canvas.getContext('2d')
      context.drawImage(video, 0, 0, canvas.width, canvas.height)
      this.imageCaptured = true
      // this.post.photo = canvas.toDataURL();
      this.post.photo = this.dataURItoBlob(canvas.toDataURL());
      this.disableCamera();
    },
    captureImageFallback(file){
       this.post.photo = file
       var reader =new FileReader()
       reader.onload = event => {
         var img = new Image()
         img.onload = () =>{
           canvas.width = img.width
           canvas.height = img.height
           context.drawImage(img, 0, 0)
         }
         img.src = event.target.result
       }
       render.readAsDataURL (e.target.files[0])
    },
    disableCamera(){
      this.$refs.video.srcObject.getVideoTracks().forEach(track => {
        track.stop();
      })
    },
    dataURItoBlob(dataURI){  
     var byteString= atob(dataURI.split(',')[1]);

     var mineString = dataURI.split(',')[0].split(':')[1].split(';')[0]

     var ab = new ArrayBuffer(byteString.length);

     var ia = new Uint8Array(ab);

     for (var i= 0; i < byteString.length; i++){
       ia[i] = byteString.charCodeAt(i);
     }
     var blob = new Blob([ab], {type:mineString});
    //  localStorage.setItem('capturedImage', blob)
     return blob;
    },
    submitImage(){
      // console.log(this.post);
      let formData = new FormData();
      formData.append('id', this.post.id);
      formData.append('caption', this.post.caption);
      formData.append('location', this.post.location);
      formData.append('photo', this.post.photo, `${Math.floor(Math.random() * 100000)}_${Math.floor(Math.random() * 100000)}_${Math.floor(Math.random() * 100000)}.${this.post.photo.type.split('/')[1]}`);
      formData.append('date', this.post.date);
      console.log(formData.get('photo'));
      axios({
          url: 'http://192.168.1.168:8080/api/post',
          method: 'POST',
          data: formData
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  mounted(){
    this.initCamera()
  }

  }
</script>

<style scoped>
.camera-frame{
  border:2px solid grey;
  border-radius:10px;
}
</style>
,
