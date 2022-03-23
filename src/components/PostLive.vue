<template>
    <div class = "post-container">
        <!-- Post header -->
        <div class="post-header">
            <div class="row">
                <div class="col-1">
                    <q-btn round>
                        <q-avatar size = "40px">
                            <img src = "https://cdn.quasar.dev/img/boy-avatar.png" />
                        </q-avatar>
                    </q-btn>
                </div>
                <div class="col-11 side-to-avatar">
                    <div class = 'sanni'>
                        <div class="handle text-bold">sanni_emmanuel</div>
                        <div class="under-handle">{{this.post.location}}</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Post Image -->
        <div class="post-image">
            <img @dblclick="likePost" :src="`http://greystagram.greysoft.com.ng/storage/${this.post.photo}`" class = "post-image" />

            <div class="like-big">
              <q-icon v-show="this.showHeart" id="first" color="white" class = "big-boys" name ="favorite" />
            </div>
        </div>
        <!-- Post Footer -->
        <div class="post-footer">
            <div class="bad">
                <div class="bad">
                    <div class="badguy">
                        <q-icon @click = "likePost" v-show="!this.postLiked" id="first" color="black" class = "post-icons " name ="favorite_outline" />
                        <q-icon @click = "likePost" v-show="this.postLiked" id="second" color="red" class = "post-icons  red-like" name ="favorite" />
                    </div>
                    <q-icon color = "black" class = "post-icons q-ml-sm" name="chat_bubble_outline" @click = "this.showDialog = true"/>
                </div>
                <div class="col-4 text-end move-end">
                    <q-icon color = "black" class = "post-icons" name="bookmark_outline" />
                </div>
            </div>
            <div class="row stupid">
                <b> {{likes}} likes </b>
            </div>
            <div class="row">
                <div class="handle text-siz view-commentse"><b>sanni_emmanuel</b> {{ this.post.caption }}</div>
            </div>
        </div>
        <!-- Post Dialog -->
        <q-dialog v-model="showDialog">
            <q-card class = "dialog-card">
                <q-card-section class="card-sec">
                    <div class="row card-sec-child">
                        <div class="dialog-user">
                            <div class="row">
                                <div class="col-1">
                                    <q-btn round>
                                        <q-avatar size = "40px">
                                            <img src = "https://cdn.quasar.dev/img/boy-avatar.png" />
                                        </q-avatar>
                                    </q-btn>
                                </div>
                                <div class="col-11 side-to-avatar">
                                    <div class = 'q-ml-lg'>
                                        <div class="handle text-bold">sanni_emmanuel</div>
                                        <div class="under-handle">{{ this.post.location }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 image-container">
                            <img @dblclick="likePost" :src="`http://greystagram.greysoft.com.ng/storage/${this.post.photo}`" class = "post-image dialog-image" />
                        </div>
                        <div class="col-md-6 q-pl-md">

                            <div class="dialog-post-details q-mt-lg">
                                <div class="row">
                                    <div class="col-1">
                                        <q-btn round>
                                            <q-avatar size = "40px">
                                                <img src = "https://cdn.quasar.dev/img/boy-avatar.png" />
                                            </q-avatar>
                                        </q-btn>
                                    </div>
                                    <div class="col-11 post details">
                                        <div class = 'q-ml-lg'>
                                            <div class="handle text-bold">sanni_emmanuel</div>
                                            {{this.post.caption}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
export default {
    props:[ 'post' ],
    data(){
        return{
            postLiked: false,
            likes: Math.floor(Math.random() * 1000),
            showDialog: false,
            showHeart: false
        }
    },
    methods: {
        showHeartFunc(){
            console.log("Show heart function")
            if(this.postLiked){
                this.showHeart = true;
                setTimeout(()=>{
                    this.showHeart = false;
                }, 300)
            }
        },
        likePost(){
            this.likes+=this.postLiked?-1:1;
            this.postLiked = !this.postLiked;
            this.showHeartFunc();
        },
        toggleModal(){
            this.modalOpened = !this.modalOpened;
        }
    }
}
</script>

<style scoped>
    .border{
        border: 1px solid black
    }
    .post-container{
        margin: 20px 10%;
        border: 1px solid #ccc;
    }
    .post-header{
        margin: 20px
    }
    .text-bold{
        font-weight: bold
    }
    .side-to-avatar{
        padding-left: 10px
    }
    .post-image{
        width: 100%;
        height: auto;
        position: relative;
    }
    .post-footer{
        margin: 20px
    }




    .bad{
        display: flex;
        width: 100%;
    }
    .badguy{
        position: relative;
    }
    .red-like{
        position: relative;
        left: 0;
    }
    .move-end{
        justify-content: flex-end;
    }
    .big-boys{
        font-size: 7.5rem;
        transition: display 300ms ease 300ms;
    }
    .like-big{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .post-icons{
        font-size: 190%;
    }
    .text-muted{
        color: #777;
        font-size: 80%
    }
    .text-size{
        font-size: 90%
    }
    .view-comments{
        cursor: pointer;
    }
    .card-sec{

        height: 100%;
    }
    .card-sec-child{
        height: 100%;
    }
    .dialog-card{
        /* height: 90vh; */
        width: 100vw
    }

    .row{
        height: 100% !important;
    }

    .image-container{
        padding: 20% 0;
        /* transform: translate(-50%, -50%); */
        background-color: #000
    }

    .dialog-image{
        /* height: 100%; */
        display: block !important;
        margin: auto 0 !important;
    }
    .dialog-user{
        border-bottom: 1px solid #ccc;
        padding-bottom: 15px
    }
    @media screen and (max-width:670px){
      .sanni{
        margin-left:1.5rem;
      }
    }
</style>
