<template>
  <form class="ui form">
    <h3 class="ui dividing header">Contact</h3>
    <div class="required field">
      <label>Contact ID</label>
      <input type="text" name="contact-id" placeholder="Contact ID" v-model="User.id" />
    </div>
    <div class="required field">
      <label>First Name</label>
      <input type="text" name="first-name" placeholder="First Name" v-model="User.firstName" />
    </div>
    <div class="field">
      <label>Last Name</label>
      <input type="text" name="last-name" placeholder="Last Name" v-model="User.lastName" />
    </div>
    <div class="required field">
      <label>Mobile No.</label>
      <input type="text" name="mobile-num" placeholder="Mobile Number" v-model="User.mobileNum" />
    </div>
    <div class="field">
      <label>Email</label>
      <input type="text" name="email" placeholder="Email" v-model="User.email" />
    </div>
    <div class="field">
      <label>Facebook</label>
      <input type="text" name="facebook" placeholder="Facebook" v-model="User.facebook" />
    </div>
    <div class="field">
      <label>Image Url</label>
      <input type="text" name="img-url" placeholder="Image Url" v-model="User.imgUrl" />
    </div>

    <div class="ui centered buttons">
      <div class="ui primary basic button" type="submit" @click="addToAPI">Save</div>
      <button class="ui primary basic button" type="submit" @click="$router.push('/contact')">
        Close
      </button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "AddContact",
  props: {},
  data() {
    return {
      User: {
        id: "",
        firstName: "",
        lastName: "",
        mobileNum: "",
        email: "",
        facebook: "",
        imgUrl: "",
      },
    };
  },
  methods: {
    addToAPI() {
      let newUser = {
        id: this.User.id,
        firstName: this.User.firstName,
        lastName: this.User.lastName,
        mobileNum: this.User.mobileNum,
        email: this.User.email,
        facebook: this.User.facebook,
        imgUrl: this.User.imgUrl,
      };
      console.log(newUser);
      axios
        .post("https://egci427a1.herokuapp.com/users", newUser)
        .then((response) => {
          console.log(response);
          window.location.href = "/contact";
        })
        .catch((error) => {
          console.log(error);s
        });
    },
  },
};
</script>
<style lang=""></style>
