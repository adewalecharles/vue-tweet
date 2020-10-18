<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile__username">@{{ user.username }}</h1>
      <div class="user-profile__admin-badge" v-if="user.isAdmin">Admin</div>
      <div class="user-pprofile__folloer-count">
        <strong> Followers: </strong>
        {{ followers }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        username: "AdewaleCharles",
        firstName: "Adewale",
        lastName: "Ogundiran",
        email: "shyprince1@gmail.com",
        isAdmin: true,
      },
    };
  },
  components: {},
  watch: {
    followers(newFollowerCount, oldFollowerCount) {
      if (oldFollowerCount < newFollowerCount) {
        console.log(`${this.user.username} has gained a new follower!`);
      }
    },
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
  },

  methods: {
    followUser() {
      this.followers++;
    },
  },

  mounted() {
    this.followUser();
  },
};
</script>

<style scoped>
.user-profile {
    display: flex;
    grid-template-columns: column;
    width: 100%;
    padding: 50px 5%;
}

.user-profile__user-panel{
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
}
h1{
    margin: 0;
}
.user-profile__admin-badge{
    background: rebeccapurple;
    color: white;
    border-radius: 5px;
    margin-right: auto;
    padding: 0 10px;
    font-weight: bold;
}
</style>