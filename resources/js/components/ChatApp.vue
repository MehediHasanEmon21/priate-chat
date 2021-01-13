<template>
  <div class="container-chat clearfix">
    <div class="people-list" id="people-list">
      <div class="search">
        <input type="text" placeholder="search" />
        <i class="fa fa-search"></i>
      </div>
      <ul class="list">
        <li
          @click.prevent="selectUser(user.id)"
          class="clearfix"
          v-for="user in userList"
          :key="user.id"
        >
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg"
            alt="avatar"
          />
          <div class="about">
            <div class="name">{{ user.name }}</div>
            <div class="status"><i class="fa fa-circle online"></i> online</div>
          </div>
        </li>
      </ul>
    </div>

    <div class="chat">
      <div class="chat-header clearfix">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg"
          alt="avatar"
        />

        <div class="chat-about">
          <div class="chat-with" v-if="userMessage.user">
            Chat with {{ userMessage.user.name }}
          </div>
        </div>
        <i class="fa fa-star"></i>
      </div>
      <!-- end chat-header -->

      <div class="chat-history">
        <ul>
          <li
            :class="`${
              message.user.id == userMessage.user.id ? 'clearfix' : ''
            }`"
            v-for="message in userMessage.messages"
            :key="message.id"
          >
            <div
              :class="`message-data ${
                message.user.id == userMessage.user.id ? 'align-right' : ''
              }`"
            >
              <span class="message-data-time">10:10 AM, Today</span> &nbsp;
              &nbsp;
              <span class="message-data-name"
                ><b>{{ message.user.name }}</b></span
              >
              <i class="fa fa-circle me"></i>
            </div>
            <div
              :class="`message float-right ${
                message.user.id == userMessage.user.id
                  ? 'other-message'
                  : 'my-message'
              }`"
            >
              {{ message.message }}
            </div>
          </li>
        </ul>
      </div>
      <!-- end chat-history -->

      <div class="chat-message clearfix">
        <textarea
          name="message-to-send"
          id="message-to-send"
          placeholder="Type your message"
          rows="3"
          v-model="message"
          @keydown.enter="sendMessage"
        ></textarea>

        <i class="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
        <i class="fa fa-file-image-o"></i>

        <button>Send</button>
      </div>
      <!-- end chat-message -->
    </div>
    <!-- end chat -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    selectUser(userId) {
      this.$store.dispatch("userMessage", userId);
    },
    sendMessage(e) {
      e.preventDefault();
      console.log(this.message);
    },
  },
  mounted() {
    this.$store.dispatch("userList");
  },
  computed: {
    userList() {
      return this.$store.getters.userList;
    },
    userMessage() {
      return this.$store.getters.userMessage;
    },
  },
};
</script>

<style lang="scss" scoped>
.people-list ul {
  overflow-y: scroll !important;
}
</style>
