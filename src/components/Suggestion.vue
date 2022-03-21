<template>
        <div class="second" :key="suggestion.login.uuid" v-for="suggestion in this.suggestionData">
            <div class="pp" >
                    <div class="cane">
                      <img  :src = "suggestion.picture.thumbnail"  class="side-img cursor-pointer"/>

                      <!-- Tooltip section  -->
                      <q-tooltip class="q-pa-none  bg-grey-2" :delay="500" anchor="bottom right" self="top middle" model-value="true">

                          <div class="row level q-px-lg q-py-sm">
                            <img  :src = "suggestion.picture.medium"  class="inner-img cursor-pointer"/>
                            <div class="q-ml-md">
                                <p>{{suggestion.name.first}} {{suggestion.name.last}} </p>
                                <p>{{suggestion.name.first}}</p>
                                <p>Followed by Lorem Babe and 4 others</p>
                            </div>
                          </div>
                          <div class="row second q-px-xl q-pb-sm text-center">
                            <div class="numbers">
                                <p>{{randomNumber}}</p>
                                <p>Posts</p>
                            </div>
                            <div class="numbers">
                                <p>{{randomNumber}}</p>
                                <p>Followers</p>
                            </div>
                            <div class="numbers">
                                <p>{{randomNumber}}</p>
                                <p>Following</p>
                            </div>
                          </div>
                         <div class="tooltip-image">
                           <img  :src = "suggestion.picture.medium"  class="lower-img cursor-pointer"/>
                         </div>
                          <div class="q-my-sm q-px-xl">
                            <q-btn  class="button bg-light-blue-6"  :dense="dense">Follow </q-btn>
                          </div>

                      </q-tooltip>
                    </div>
                    <p>{{suggestion.name.first}} {{suggestion.name.last}} <br> <span>New to Instagram</span></p>
            </div>
            <div>
              <p @click = "follow" v-show="!this.following" class ="blue-text cursor-pointer">Follow</p>
            <p @click = "follow" v-show="this.following" class="black-text cursor-pointer">Following</p>
            </div>

        </div>
        <!-- <Tooltip :toolTip = "toolTip" /> -->







</template>

<script>
import {QBtn, QTooltip} from 'quasar'
// import Tooltip from './Tooltip'

export default {
    name: 'Suggestion',
    props: ['suggestionData'],
    components:{
      // Tooltip,
      QTooltip,
      QBtn
    },
    data(){
        return{
            randomNumber: Math.floor(Math.random() * 1000),
            following: false,
        }
    },
    methods:{

      toggleTooltip(){
        this.toolTip = !this.toolTip;
      },
       follow(){
            // this.likes+=this.postLiked?-1:1;
            this.following = !this.following;
            // this.showHeartFunc();
        }
    }

}
</script>

<style scoped>
  .q-tooltip__content {
  pointer-events: initial;
}
  .tooltip{
    height: 100px;
  }

  .tooltip-image{
    border-top: 2px solid grey;
  }

  .level{
    border-bottom: 2px solid grey;
  }

  p{
    color: black;
  }
  .level p{
    margin: 0;
  }

  .second p{
    margin: 0;
  }

    .second{
        display: flex;
        justify-content: space-between;
        margin: 3% 0;
    }


    .button{
      width: 100%;
    }


  .inner-img{
        border-radius: 50%;
        width: 60px;
        height: 60px;
        /* font-size: 1.5rem; */
        margin: auto 0;
    }

    .lower-img{
        /* border-radius: 50%; */
        width: 85px;
        height: 85px;
        /* margin: auto 0; */
    }

    .side-img{
        border-radius: 50%;
        width: 30px;
        height: 30px;
        font-size: 1.5rem;
        margin: auto 0;
    }
     .side-img:hover .tooltiptext {
    visibility: visible;
  }

    /* .side-img:hover{
      color:green;

    } */

    .pp{
        display: flex;
        align-items: center;

    }

    .pp p{
        margin: auto 0;
        margin-left: 7px;
    }

    span{
      color: grey;
    }
    .blue-text{
        color: rgb(46, 199, 250);
        margin: auto 0;
    }


</style>
