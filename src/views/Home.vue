<template>
  <div class="home">
    <pre>{{user}}</pre>

    <b-button variant="dark" size="lg" block @click="logout">Logout</b-button>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "../plugins/axios";

export default {
  name: "Home",
  data() {
    return {
      user: {}
    };
  },
  created() {
    this.profile();
  },
  methods: {
    profile() {
      axios
        .get(`${process.env.VUE_APP_API_URL}/api/user`)
        .then(response => {
          this.user = response.data;
        })
        .catch(() => {});
    },
    logout() {
      axios.post(`${process.env.VUE_APP_API_URL}/api/auth/logout`).then(() => {
        localStorage.removeItem("isLogged");
        this.$router.push({ name: "Login" });
      });
    }
  }
};
</script>
