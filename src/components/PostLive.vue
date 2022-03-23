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
                    <div class = ''>
                        <div class="handle text-bold">sanni_emmanuel</div>
                        <div class="under-handle">Kaduna, Nigeria.</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Post Image -->
        <div class="post-image">
            <img :src="this.post.photo" class = "post-image" />
        </div>
        <!-- Post Footer -->
        <div class="post-footer">
            <div class="row">
                <div class="handle text-siz view-commentse"><b>sanni_emmanuel</b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, recusandae consectetur voluptate pariatur similique voluptas quasi sit labore quisquam neque!</div>
            </div>
        </div>
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
