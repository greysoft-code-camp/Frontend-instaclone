<template>
<div>
  <div class="tooltiptext" v-show="toolTip">
          <div class="flexbox first">
            <img src="" alt="">
            <div class="text">
                <p>Lorem Dude</p>
                <p>Lorem DUde</p>
                <p>Followed by Lorem Babe and 4 others</p>
            </div>
          </div>
          <div class="flexbox second">
            <div class="numbers">
                <p></p>
                <p>Posts</p>
            </div>
            <div class="numbers">
                <p></p>
                <p>Followers</p>
            </div>
            <div class="numbers">
                <p></p>
                <p>Following</p>
            </div>
          </div>
          <div class="third">
            <img src="" alt="">
          </div>
          <button>Follow</button>
        </div>
</div>




<!-- <q-btn label="Hover me" color="primary">
        <q-tooltip>
          Some text as content of Tooltip
        </q-tooltip>
      </q-btn> -->

</template>

<script>
export default {
  name: 'Tooltip',
  props: ['toolTip']
}

</script>

<style scoped>
  .tooltiptext {
    /* visibility: hidden; */
    width: 400px;
    height: 300px;
    background-color: lightblue;
    color: black;
    border-radius: 6px;
    padding: 5px 0;

    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 50%;
    margin-left: -60px;
  }



  /* New Css */
  .flexbox{
    display: flex;
      align-items: center;
  }
  .first{
      font-size: 0.7rem;
      text-align: left;
  }
  .second{
      justify-content: space-evenly;
  }

  button{
    width: 80%;
    border-radius: 4px;
    border: 0px ;
    background-color: rgb(46, 199, 250);
    color: white;
  }
</style>
