<template>
    <div class = "story text-center">
        <div>
            <q-btn @click = "this.showDialog=true" round class = "avatar-container ">
                <q-avatar size = "60px">
                    <img :src = "this.userStory.picture.thumbnail" />
                </q-avatar>
            </q-btn>
        </div>
        {{this.userStory.name.first.toLowerCase()}}
        <q-dialog v-model="showDialog">
            <q-card class = "dialog-card">
                <q-card-section class="card-sec">
                    <img :src="this.userStory.picture.large" class="dialog-image" />
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
export default {
    name: "Story",
    props: ['userStory'],
    data(){
        return {
            showDialog: false
        }
    }
}
</script>

<style scoped>
    .avatar-container{
        margin: 5px 10px;
        background: linear-gradient(to right, rgb(206, 64, 64), rgb(128, 1, 60));
        padding: 2px
    }
    .dialog-card{
        height: 100vh;
        width: 100vw;
        background: none;
    }
    .card-sec{
        height: 100%
    }
    .dialog-image{
        height: 100%;
        width: 100%
    }
    @media screen and (max-width:982px){
      .story{
        width:30%;
      }
    }
</style>
