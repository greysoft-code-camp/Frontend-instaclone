<template>
  <q-layout>
    <q-header elevated>
        <q-toolbar class="bg-white">
          <q-btn flat round dense icon="arrow_back" color="black" to="/login" class="q-mr-sm" />
          <q-space/>
          <q-toolbar-title class="text-primary">Register</q-toolbar-title>
          <q-space/>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page>
          <div class="q-px-xl q-py-md" style="">

            <h4 class="text-center">SignUp</h4>

            <q-form
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-md"
            >
              <q-input
                filled
                v-model="username"
                label="Phone number, Username or Email"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />

              <q-input
                filled
                type="password"
                v-model="password"
                label="Password"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />

              <q-input
                filled
                type="password"
                v-model="password"
                label="Password"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />
              <q-input
                filled
                type="password"
                v-model="password"
                label="Password"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />



              <div style="">
                <q-btn label="Log In" style="width: 100%"  />
              </div>



            </q-form>
            </div>
        </q-page>
      </q-page-container>

      <q-footer class="bg-white">
        <q-toolbar>
          <q-toolbar-title class="text-center text-primary">From GreySoft</q-toolbar-title>
        </q-toolbar>
      </q-footer>

  </q-layout>

</template>

<script>
export default {

}
</script>

<style scoped>


</style>
