<template>
    <div class = "post-container">
        <!-- Post header -->
        <div class="post-header">
            <div class="row">
                <div class="col-1">
                    <q-btn round>
                        <q-avatar size = "40px">
                            <img :src = "this.post.picture.thumbnail" />
                        </q-avatar>
                    </q-btn>
                </div>
                <div class="col-11 side-to-avatar">
                    <div class = ''>
                        <div class="handle text-bold">{{ (this.post.name.first+ this.post.name.last).toLowerCase() }}</div>
                        <div class="under-handle">{{ this.post.location.city+", "+ this.post.location.state }}</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Post Image -->
        <div class="post-image">
            <img @dblclick="likePost" :src = "this.post.picture.large" class = "post-image" />
            <div class="like-big">
                <q-icon v-show="this.showHeart" id="first" color="white" class = "big-boys" name ="favorite" />
            </div>
            <!-- <div class="like-big">
                <q-icon @click = "likePost" v-show="!this.postLiked" id="first" color="black" class = " big-boys" name ="favorite_outline" />
                <q-icon @click = "likePost" v-show="this.postLiked" id="first" color="red" class = " big-boys" name ="favorite" />
            </div>  -->
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
                <div class="handle text-siz view-commentse"><b>{{ (this.post.name.first+ this.post.name.last).toLowerCase() }} </b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, recusandae consectetur voluptate pariatur similique voluptas quasi sit labore quisquam neque!</div>
            </div>
            <div class="row">
                <span @click = "this.showDialog = true" class="text-muted view-comments">View all comments</span>
                <!-- <q-modal
                    v-model = "modalOpened"
                >
                    <h1>Quasar Modal</h1>
                </q-modal> -->
            </div>
        </div>
        <!-- Post Dialog -->
        <q-dialog v-model="showDialog">
            <q-card class = "dialog-card">
                <q-card-section class="card-sec">
                    <div class="row card-sec-child">
                        <div class="col-md-6 image-container">
                            <img @dblclick="likePost" :src = "this.post.picture.large" class = "post-image dialog-image" />
                        </div>
                        <div class="col-md-6 q-pl-md">
                            <div class="dialog-user">
                                <div class="row">
                                    <div class="col-1">
                                        <q-btn round>
                                            <q-avatar size = "40px">
                                                <img :src = "this.post.picture.thumbnail" />
                                            </q-avatar>
                                        </q-btn>
                                    </div>
                                    <div class="col-11 side-to-avatar">
                                        <div class = 'q-ml-lg'>
                                            <div class="handle text-bold">{{ (this.post.name.first+ this.post.name.last).toLowerCase() }}</div>
                                            <div class="under-handle">{{ this.post.location.city+"."}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="dialog-post-details q-mt-lg">
                                <div class="row">
                                    <div class="col-1">
                                        <q-btn round>
                                            <q-avatar size = "40px">
                                                <img :src = "this.post.picture.thumbnail" />
                                            </q-avatar>
                                        </q-btn>
                                    </div>
                                    <div class="col-11 post details">
                                        <div class = 'q-ml-lg'>
                                            <div class="handle text-bold">{{ (this.post.name.first+ this.post.name.last).toLowerCase() }}</div>
                                            <!-- <div class="under-handle">{{ this.post.location.city+"."}}</div> -->
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum officiis distinctio veritatis accusamus inventore possimus quis voluptates molestias repellendus sequi. Architecto, mollitia! Aperiam dolore saepe sapiente.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>
        <!-- <q-dialog v-model="showDialog" transition-show="rotate" transition-hide="rotate" >
            <q-card class = "dialog-card">
                <q-card-section>
                    <div class="row">
                        <div class="col-md-6 flex items-center ">
                            <img @dblclick="likePost" :src = "this.post.picture.large" class = "post-image dialog-image" />
                        </div>
                        <div class="col-md-6 q-pl-md">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut suscipit et, vel totam accusamus saepe, quibusdam expedita animi eos ratione dolor facilis veritatis doloribus nisi, unde hic eaque laudantium id consequatur sapiente? Ipsum doloribus maiores facere debitis optio, fugit illo officiis deserunt ad ducimus! Libero eius delectus id? Dicta, quasi?
                        </div>
                    </div>
                </q-card-section>

            </q-card>
        </q-dialog> -->
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
        margin: 20px 0;
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
        height: 80vh;
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
    @media screen and (max-width:984px){
      .post-container{
        max-width:fit-content;
        width:30%;
      }
    }
</style>
