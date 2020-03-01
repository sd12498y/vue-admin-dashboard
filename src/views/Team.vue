<template>
  <div class="container">
    <h2>Team</h2>
    <div class="cards">
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-1" :class="{'light-card':!isDarkMode,'dark-card':isDarkMode}">
          <img
            src="@/assets/contentful.png"
            :class="{'light-header' : !isDarkMode, 'dark-header' : isDarkMode}"
          />
          <h3>Contentful</h3>
          <p
            :class="{'light-text':isDarkMode, 'dark-text':!isDarkMode}"
          >Contentful is a very powerful CMS</p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-2" :class="{'light-card':!isDarkMode,'dark-card':isDarkMode}">
          <img
            src="@/assets/dropbox.png"
            :class="{'light-header' : !isDarkMode, 'dark-header' : isDarkMode}"
          />
          <h3>Dropbox</h3>
          <p :class="{'light-text':isDarkMode, 'dark-text':!isDarkMode}">Cloud Storage</p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-3" :class="{'light-card':!isDarkMode,'dark-card':isDarkMode}">
          <img
            src="@/assets/slack.png"
            :class="{'light-header' : !isDarkMode, 'dark-header' : isDarkMode}"
          />
          <h3>Slack</h3>
          <p :class="{'light-text':isDarkMode, 'dark-text':!isDarkMode}">Team communication</p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-4" :class="{'light-card':!isDarkMode,'dark-card':isDarkMode}">
          <img
            src="@/assets/figma.png"
            :class="{'light-header' : !isDarkMode, 'dark-header' : isDarkMode}"
          />
          <h3>Figma</h3>
          <p :class="{'light-text':isDarkMode, 'dark-text':!isDarkMode}">UI/UX tools</p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-5" :class="{'light-card':!isDarkMode,'dark-card':isDarkMode}">
          <img
            src="@/assets/notion.png"
            :class="{'light-header' : !isDarkMode, 'dark-header' : isDarkMode}"
          />
          <h3>Notion</h3>
          <p :class="{'light-text':isDarkMode, 'dark-text':!isDarkMode}">Team colabation space</p>
        </a>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  justify-content: center;
}
h2 {
  @include heading-2;
}
h3 {
  @include heading-3;
}
p {
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  margin-top: 0;
  padding: 10px;
}
.light-header {
  background: $light-gray;
}

.dark-header {
  background: #283049;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: space-evenly;
}

.card {
  width: 100%;
  max-width: 200px;
  height: 400px;
  border-radius: 10px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  img {
    width: 100%;
  }
}
.card-1 {
  animation-delay: 0s;
}
.card-2 {
  animation-delay: 0.5s;
}
.card-3 {
  animation-delay: 1s;
}
.card-4 {
  animation-delay: 1.5s;
}
.card-5 {
  animation-delay: 2s;
}

.light-card {
  background: $white;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.35);
  }
}
.dark-card {
  background: $super-dark-blue;
  box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.15);

  &:hover {
    box-shadow: 0px 30px 60px rgba(255, 255, 255, 0.35);
  }
}
</style>
