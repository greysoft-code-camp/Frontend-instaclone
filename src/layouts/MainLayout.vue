<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
     class="bg-white text-grey-10"
     bordered >
      <q-toolbar class="" style="width: 95%; margin: 0 auto">
        <q-btn
          to="/page"
          class="large-screen-only"
          icon="camera"
          size="18px"
          flat
          round
          dense />
               <q-separator
               class="large-screen-only"
               vertical
               spaced  />
        <q-toolbar-title
        class="text-grand-hotel text-center text-bold">
          Quasargram
        </q-toolbar-title>
        <q-separator
               class="large-screen-only"
               vertical
               spaced  />
         <q-btn
          to="/"
          class="large-screen-only"
          icon="home"
          size="18px"
          flat
          round
          dense />
      </q-toolbar>
    </q-header>

     <q-footer class="bg-white small-screen-only "
      bordered
      >
          <q-tabs class="text-grey-10"
            active-color="primary"
            indicator-color="transparent"
      >
        <q-route-tab
        to="/"
        icon="home" />
        <q-route-tab
        to="/page"
        icon="camera"/>

      </q-tabs>
      </q-footer>

    <q-page-container class="bg-grey-1">
      <router-view />

    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {

  }
})
</script>

<style lang="scss">
.q-toolbar {
   @media (min-width: $breakpoint-sm-min){
      height:77px
   }

}
  .q-toolbar__title{
     font-size: 30px{

     }
      @media (max-width: $breakpoint-xs-max ){
          text-align: center
      }
  }

    .q-footer
    .q-tab__icon {
      font-size:30px
    }


</style>
