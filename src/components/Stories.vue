<template>
    <div class="story-super-container">
        <div class = "story-container">
            <div class = "story-item" :key = "userStory.login.uuid" v-for = "userStory in this.userStories">
                <Story :userStory="userStory" />
            </div>
        </div>
    </div>
</template>

<script>
import Story from './Story';

export default {
    name: "Stories",
    props: ['userStories'],
    components: {
        Story
    }
}
</script>

<style scoped>
    .story-container{
        /* height: 110px;
        width: 100%;
        margin-top: 40px;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        padding: 10px 0; */

        width: 100%;
        height: 120px;
        white-space: nowrap;
        position: relative;
        overflow-x: scroll;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;

        -ms-overflow-style: none; /* hiding the scrollbar for Internet Explorer, Edge */
        scrollbar-width: none; /* hiding the scrollbar for Firefox */
    }

    .story-container::-webkit-scrollbar {
        display: none; /* hiding the scrollbar for Chrome, Safari, and Opera */
    }

    .story-super-container{
        border-radius: 3px;
        margin-top: 25px;
        border: 1px solid #ccc;
        padding: 15px 0px 0px 10px
    }

    .story-item{
        /* position: relative;
        float: left; */

        /* width: 24.5%;
        background-color: #eee; */
        float: none;
        /* height: 90%; */
        /* margin: 0 0.25%; */
        display: inline-block;
        zoom: 1;
    }
    @media screen and (max-width: 962px ){

    }
</style>
