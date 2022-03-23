<template>
  <q-page >
    <div class="row">
      <div class="col-md-8">
        <!--<Navbar />-->
        <!-- <Stories
          :userStories="userStories"
        /> -->
        <!-- <div class = "q-mt-lg" :key="post.login.uuid" v-for="post in posts">
          <Post
            :post="post"
          />
        </div> -->
        <div class = "q-mt-lg" :key="post.id" v-for="post in posts">
          <PostLive
            :post="post"
          />
        </div>
      </div>
      <div class="col-md-4" >
        <!-- <Sidebar /> -->
        <SidebarLive />
      </div>
    </div>

  </q-page>
</template>

<script>
import axiosPreloaded from '../helpers/axiosPreload';
import { defineComponent } from 'vue';
import Navbar from '../components/Navbar'
import Stories from '../components/Stories';
import Post from '../components/Post';
import PostLive from '../components/PostLive';
import Sidebar from '../components/Sidebar'
import SidebarLive from '../components/SidebarLive'
import Tooltip from 'src/components/Tooltip.vue';
import axios from 'axios';

export default defineComponent({
  name: 'PageIndex',
  data(){
    return{
      userStories : [],
      posts: []
    }
  },
  components: {
    Stories,
    Post,
    PostLive,
    Navbar,
    Sidebar,
    SidebarLive,
    Tooltip
},
  methods: {
    fetchImages(){
      axios.get('https://greystagram.greysoft.com.ng/public/api')
      .then(({data})=> {
        this.posts = data.posts;
        console.log(data.posts);
      })
      .catch(err => {
        console.log(err);
      })
    },
    fetchStories(){
      axiosPreloaded("/?page=1&results=20", false)
      .then(({data})=> {
        this.userStories = data.results;
        // console.log(this.userStories);
      })
      .catch(({message}) => {
        console.log(message)
      })
    },
    fetchPosts(){
      axiosPreloaded("/?page=1&results=20", false)
      .then(({data})=> {
        this.posts = data.results;
        //console.log(this.posts);
      })
      .catch(({message}) => {
        console.log(message)
      })
    }
  },
  created(){
    this.fetchImages();

    this.fetchStories();

    // this.fetchPosts();
  }
})
</script>


/*
{"message":"success","posts":[{"id":2,"caption":"Chap Chap","location":"Kaduna","photo":null,"created_at":"2022-03-22T11:10:35.000000Z","updated_at":"2022-03-22T11:10:35.000000Z"},{"id":7,"caption":"You","location":"Kd","photo":"o6tXq.png","created_at":"2022-03-22T13:50:51.000000Z","updated_at":"2022-03-22T13:50:51.000000Z"},{"id":8,"caption":"ufghjgjh","location":"fufffgh","photo":"seZSv.png","created_at":"2022-03-22T14:07:07.000000Z","updated_at":"2022-03-22T14:07:07.000000Z"}]}


http://192.168.130.83:8080/storage/o6tXq.png
 *//
