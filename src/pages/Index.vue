<template>
  <q-page >
    <div class="row">
      <div class="col-md-8">
        <Navbar />
        <Stories
          :userStories="userStories"
        />
        <div class = "q-mt-lg" :key = "post.login.uuid" v-for="post in posts">
          <Post
            :post="post"
          />
        </div>
      </div>
      <div class>
        <Sidebar />
      </div>
    </div>

  </q-page>
</template>

<script>
import axios from '../helpers/axiosPreload';
import { defineComponent } from 'vue';
import Navbar from '../components/Navbar'
import Stories from '../components/Stories';
import Post from '../components/Post';
import Sidebar from '../components/Sidebar'
import Tooltip from 'src/components/Tooltip.vue';

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
    Navbar,
    Sidebar,
    Tooltip
},
  created(){
    axios("/?page=1&results=20")
    .then(({data})=> {
      this.userStories = data.results;
      // console.log(this.userStories);
    })
    .catch(({message}) => {
      console.log(message)
    })

    axios("/?page=1&results=20")
    .then(({data})=> {
      this.posts = data.results;
      //console.log(this.posts);
    })
    .catch(({message}) => {
      console.log(message)
    })
  }
})
</script>
