<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile__username">@{{ user.username }}</h1>
      <div class="user-profile__admin-badge" v-if="user.isAdmin">Admin</div>
      <div class="user-profile__follower-count">
        <strong> Followers: </strong>
        {{ followers }}
      </div>
      <form class="user-profile__create-twoot" @submit.prevent="createNewTwoot">
          <label for="newTwoot"><strong>New Chip</strong></label>
            <textarea name="" id="newTwoot" v-model="newTwootContent" rows="4"></textarea>

            <div class="user-profile__create-twoot-type">
               <label for="newTwootType"><strong>Type</strong></label> 
               <select name="" id="newTwootType" v-model="selectedTwootType">
                   <option :value="option.value" v-for="(option, index) in twootTypes" :key="index">{{option.name}}</option>
               </select>
            </div>

            <button>Chip!</button>
      </form>
    </div>
    <div class="user-profile__twoots-wrapper">
        <TwootItem
          v-for="twoot in user.twoots"
          :key="twoot.id"
          :username="user.username"
          :twoot="twoot"
          @favourite="toggleFavourite"
        />
    </div>
  </div>
</template>

<script>
import TwootItem from "./TwootItem";
export default {
  name: "UserProfile",
  components: {
    TwootItem
  },
  data() {
    return {
        newTwootContent: '',
        selectedTwootType: 'instant',
        twootTypes: [
            {value: 'draft', name:'Draft'},
            {value: 'instant', name: 'Instant Chip'}
        ],
      followers: 0,
      user: {
        id: 1,
        username: "AdewaleCharles",
        firstName: "Adewale",
        lastName: "Ogundiran",
        email: "shyprince1@gmail.com",
        isAdmin: true,
        twoots: [
          {
            id: 1,
            content: "chipper is amazing!",
          },
          {
            id: 2,
            content: "Dont forget to subscribe to the earth is square",
          }
        ]
      }
    };
  },

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
    toggleFavourite(id) {
        console.log(`Favourited Chip #${id}`)
    },
    createNewTwoot(){
        if (this.newTwootContent && this.selectedTwootType !== 'draft'){
            this.user.twoots.unshift({
                id: this.user.twoots.length + 1,
                content: this.newTwootContent
            })

            this.newTwootContent = '';
        }
    }
  },

  mounted() {
    this.followUser();
  },
};
</script>

<style>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
  padding: 50px 5%;
}

.user-profile__user-panel {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #DFE3E8;
}
h1 {
  margin: 0;
}
.user-profile__admin-badge {
  background: rebeccapurple;
  color: white;
  border-radius: 5px;
  margin-right: auto;
  padding: 0 10px;
  font-weight: bold;
}

.user-profile__twoots-wrapper{
    display: grid;
    grid-gap: 10px;
}

.user-profile__create-twoot {
    border-top: 1px solid #dfe3e8;
    padding: 20px;
    display: flex;
    flex: column;
}
</style>