<template>
  <v-app>
    <v-app-bar
      app
      :color="appBarColor"
      flat
      dark
    >
      <v-btn
        class="mx-2"
        fab
        dark
        small
        depressed
        color="amber"
        @click="drawer = !drawer"
      >
        <v-icon dark>
          mdi-menu
        </v-icon>
      </v-btn>
      <v-toolbar-title>
        {{ appBarTitle }}
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        v-if="this.$route.name !== 'Dashboard'"
        icon
        dark
        to="/"
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-app-bar>
    <v-img
      v-if="this.$route.name !== 'GoodyBoard'"
      :src="waveHeight"
    />
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      :src="require('@/assets/sidebar.jpg')"
    >
      <template
        #img="props"
      >
        <v-img
          :gradient="gradient"
          v-bind="props"
        />
      </template>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Tasty Goody
          </v-list-item-title>
          <v-list-item-subtitle>
            맛있는 건 정말 참을 수 없어
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
          active-class="amber"
          class="py-1"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <p
          class="pl-5 white--text text-caption"
        >
          © 2023 su-jp (Sujin Park)
        </p>
      </template>
    </v-navigation-drawer>
    <v-main :class="mainDivClass">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      gradient: 'rgba(0, 0, 0, .4), rgba(0, 0, 0, 0)',
      items: [
        { title: 'Welcome', icon: 'mdi-human-greeting-variant', to: '/' },
        { title: 'Tasty Goody', icon: 'mdi-food-fork-drink', to: '/goodyBoard' },
        { title: 'Guest Book', icon: 'mdi-book', to: '/guestBook' },
        { title: 'Contact', icon: 'mdi-contacts', to: '/contact' },
      ],
      appBarColor: 'transparent',
      mainDivClass: 'pt-0',
    }
  },
  computed: {
    waveHeight() {
      let src = 'https://capsule-render.vercel.app/api?type=wave&color=ffc107&height=';
      switch(this.$vuetify.breakpoint.name){
      case 'xs':
      case 'sm':
        return src + '300';
      case 'md':
        return src + '200';
      default:
        return src + '150';
      }
    },
    appBarTitle() {
      switch(this.$route.path){
      case '/goodyBoard':
        return 'Tasty Goody';
      case '/guestBook':
        return 'Guest Book';
      case '/contact':
        return 'Contact';
      default:
        return '';
      }
    }
  },
  mounted() {

  },
  created() {
    this.drawer = this.setDrawer();
    this.checkDashboard();
  },
  updated() {
    this.checkDashboard();
  },
  methods: {
    setDrawer() {
      switch(this.$vuetify.breakpoint.name){
      case 'xs':
      case 'sm':
      case 'md':
        return false;
      default:
        return true;
      }
    },
    checkDashboard() {
      if (this.$route.name === 'Dashboard'){
        this.appBarColor = 'transparent';
        this.mainDivClass = 'pt-0';
      } else {
        this.appBarColor = 'amber';
        this.mainDivClass = '';
      }
    }
  }
};
</script>

<style>

</style>
