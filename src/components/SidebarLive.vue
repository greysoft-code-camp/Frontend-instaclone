<template>
    <div class="main">
        <div class="side">
            <div class="side-profile">
                <div class="pp">
                    <img :src = "user.picture.thumbnail"  class="side-img cursor-pointer"/>
                    <p class="cursor-pointer">{{user.name.first}} {{user.name.first}} <br> <span>{{user.name.first}}</span></p>
                </div>
                <p class="blue-text cursor-pointer">Switch</p>
            </div>
        </div>
    <!-- Suggestion for you -->
        <div class="suggest">
            <p>Suggestion for You</p>
            <p class="cursor-pointer">See All</p>
        </div>

        <Suggestion :suggestionData = "suggestions" />

    </div>



</template>

<script>
import Suggestion from '../components/Suggestion'
import axios from '../helpers/axiosPreload';


export default {
    name: 'Sidebar',
    components:{
        Suggestion
    },
    data(){
      return{
        user: {
          picture: {
            thumbnail: "https://cdn.quasar.dev/img/boy-avatar.png"
          },
          name: {
            first: "Sanni",
            last: "Emmanuel"
          }
        }
      }
    },
}
</script>

<style scoped>


    .main{
        width: 20%;
        position: fixed;
        top: 110px;
        right: 12%;
        height: 100vh;
        padding: 0.5%;
        z-index: 1000;
    }

    .side-profile{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
    }

    .side-img{
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 2.5rem;
         cursor: pointer !important;
    }

    .pp{
        display: flex;

    }

    .pp p{
        margin: auto 0;
        margin-left: 7px;
    }
    .blue-text{
        color: rgb(46, 199, 250);
        margin: auto 0;

    }
    .suggest{
        display: flex;
        justify-content: space-between;
    }
    .suggest p{
        margin: 15px 0;
    }
    span{
      color: grey;
    }

    @media screen and (max-width:1006px){
      .main{
        display:none;
      }
    }
</style>
