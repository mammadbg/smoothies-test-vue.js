<template>
  <div class="test">
    <div class="container">
      <div class="card" v-for="(address,index) in addresses" :key="index">
        <h2 class="card-title">{{address}}</h2>
      </div>
    </div>
    <div class="container">
      <form @submit.prevent="addMail">
        <label for="mail">add mail address</label>
        <input type="text" name="mail" v-model="mail" />
        <button type="submit">Submit</button>
      </form>
    </div>
    <button @click="sortTest">sortTest</button>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "Test",
  data() {
    
    return {
      addresses: ["a3@a1.com", "hebot@mailnet.top", "tanager@resetsecure.org"],
      mail: null,
      feedback: null
    };
  },
  methods: {
    addMail() {
      db.collection("test").add({
        mail: this.mail
      });
      addresses.sort();
      this.$routter.push({ name: "Test" });
    },
    sortTest() {
      let test = ["efef3", "werwer", "reg"];
      console.log(test.sort());
    }
  },
  created() {
    db.collection("test")
      .get()
      .then(snapshot => {
        snapshot.forEach(mail => {
          let mailAddress = mail.data();
          mailAddress.id = mail.mail;
          // mailname = testCollectionFirebase.mail
          this.addresses.push(mailAddress.mail);
        });
      });
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
}
.card {
  background: #000;
  color: #fff;
  margin: 0.5rem;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: row;
}
</style>