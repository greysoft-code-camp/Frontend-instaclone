<template>
    <q-header  class="bg-white text-black header" >
      <q-toolbar class="roll" >
        <div class="moving">
          <q-toolbar-title class = "toolbar-title">
            Instagram
          </q-toolbar-title>

          <div class="input">
            <input type="text" placeholder="Search" class="q-mr-xl search" >
            <q-icon  name="search" class="search-icon" />
          </div>
        </div>
        <div class="driven">
          <q-icon clickable class="cursor-pointer" @click="this.$router.push('/page')" name="camera" style="font-size: 2em"/>
           <q-icon name="person" class="profile profile-pic cursor-pointer" />
        </div>


      </q-toolbar>
    </q-header>

</template>


<script>
export default {
    name:  "Navbar",

}
</script>

<style scoped>
  .roll{
    display: flex;
    justify-content: space-between;
  }
  .input{
    position:relative;
    border: 0px;
  }

  input{
    padding: 10px 35px;
    border: 1px solid rgb(241, 240, 240) ;
    background: rgb(241, 240, 240);
  }

  input:focus{
    border: 1px solid rgb(241, 240, 240);
  }
  .search-icon{
    font-size: 1.5rem;
    color: grey;
    position: absolute;
    left: 7px;
    top: 9px;
  }
  .moving{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 67%;
  }

  .driven{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 33%;
  }

    .search{
        width:100%;
        border-radius: 22px;
        height: 40px;
    }


    .profile-pic{
        width: 100%;
        font-size: 1.2rem;
        display: flex;
        align-content: center;
    }

    .profile{
        height: 25px;
        width: 25px;
        border-radius: 50%;
        border: 2px solid;
        margin-left: 0;
    }


    .toolbar-title {
        /* font-family: 'Billabong, cursive' */
    }

    .header{
        padding: 1% 15%;
        height: 70px;
        border: 0.3px solid rgb(128, 128, 128, 0.2);
        border-right: 0px;
    }
    @media screen and (max-width:862px){
      .input{
        display:none;
      }
    }
</style>














