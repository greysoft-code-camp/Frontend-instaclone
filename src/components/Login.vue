<template>

  <div class="row ">
    <div class="hide_image col-6" style=" margin:auto 0">
      <q-img src="../assets/login.svg" alt="" />
    </div>

  <div class="login">

    <div class="q-mb-xl">
      <h3 class="text-center toolbar-title">Instagram</h3>
    </div>


    <div class="q-px-xl" style="">

      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="username"
          label="Phone number, Username or Email"
        />

        <q-input
          filled
          type="password"
          v-model="password"
          label="Password"
        />

        <div class="row">
          <q-space/>
          <p>Forgot password?</p>
        </div>

        <div style="">
          <q-btn label="Log In" color="primary" style="width: 100%"  />
        </div>

        <p class="text-center">Don't have an account? <a class="text-primary"  > Sign Up</a></p>


      </q-form>

    </div>

  </div>

  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  data () {
    const $q = useQuasar()

    const username = ref(null)
    const password = ref(null)
    const accept = ref(false)

    return {
      username,
      password,
      accept,

      onSubmit () {

      },

      onReset () {

      }
    }
  }
}
</script>

<style scoped>


</style>
