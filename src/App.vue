<template>
  <v-app>
    <v-main>
      <div class="theme">
        <v-spacer></v-spacer>
        <v-btn @click="signOut" class="ma-2" text>Sign Out</v-btn>
      </div>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("User Signed Out");
          this.$router.push("/");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.theme {
  display: flex;
}

body {
  font-family: "Lexend Deca", sans-serif;
  .app {
    font-family: "Lexend Deca", sans-serif;
  }
}
</style>
