<template>
  <q-layout view="lHh Lpr lFf">


    <q-page-container class = "row justify-center">
      <div class = " inner-container" >
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent } from 'vue'


export default defineComponent({
  name: 'MainLayout',
  components:{

  }
})
</script>


<style >



p{
  font-size: 0.75rem;
}
.container{
  width: 80%;
  display: flex;
  justify-content: center;
}
.inner-container{
  width: 70%
}
/* @media only screen and ( max-width: 991px ){
  .container{
    width: 90%;
  }
}

@media only screen and ( min-width:  ) */
</style>
