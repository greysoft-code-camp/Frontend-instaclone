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
          <q-input v-model="post.caption"  class="col col-sm-6" label="Caption" dense />
        </div>
        <div class="row justify-center q-ma-md">
          <q-input v-model="post.location"  class="col col-sm-6" label="Location" dense >

          <template v-slot:append>
            <q-btn round dense flat icon="push_pin" @click="getLocation" />
          </template>
          </q-input>
        </div>
        <div class="row justify-center q-mt-lg">
          <q-btn
            color="primary"
            label="Post Image" rounded unelevated
            @click="submitImage"
          />
        </div>
    </div>
  </q-page>
</template>

<script>
import { Notify } from 'quasar';
require ('md-gum-polyfill');
import axios from 'axios';

export default {
  name: 'PageCamera',
  data(){
    return{
     post:{
       caption: '',
       location: '',
       photo:null
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
      this.post.photo = canvas.toDataURL();
      // this.post.photo = this.dataURItoBlob(canvas.toDataURL());
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
         console.log(event.target.result)
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
        ab[i] = byteString.charCodeAt(i);
      }
      var blob = new Blob([ia], {type:mineString});

      return blob;
        // return dataURI
    },
    getLocation(){
      navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        axios({
            method: 'GET',
            url: `https://geocode.xyz/${lat},${long}?json=1&auth=618853220857101116114x117594`,
        })
        .then(response => {
          // let loc = response;
          let loc = `${response.data.alt.loc.staddress}, ${response.data.alt.loc.city}. ${response.data.city}`;
          // console.log(loc);
          this.post.location = loc;
        })
        .catch(err => {
          console.log(err);
        })
      }, err=>{
        console.log("Error getting location")
      }, { timeout: 7000 })
    },
    submitImage(){
      this.$q.loading.show()
      console.log(this.post);
      if(this.post.photo !== null && this.post.caption !== "" && this.post.location !== ""){
        let formData = new FormData();

        formData.append('caption', this.post.caption);
        formData.append('photo', this.post.photo);
        formData.append('location', this.post.location);

        axios({
            method: 'POST',
            url: 'https://greystagram.greysoft.com.ng/api/post',
            data: formData
        })
        .then(response => {
          console.log(response);
          Notify.create({
            message: "Post created",
            color: "green"
          })
          this.$router.push('/');
          this.$q.loading.hide()
        })
        .catch(err => {
          console.log(err);
          Notify.create({
            message: "Error creating post",
            color: "red"
          })
          this.$q.loading.hide()
        })
      }else{
        Notify.create({
          message: "Finish filling the form before submitting.",
          color: "red"
        })
        this.$q.loading.hide()
      }
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
