<template>
  <v-app>
    <v-app-bar
      app
      color="transparent"
      flat
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
    </v-app-bar>
    <v-img
      v-if="this.$route.name === 'Dashboard'"
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
    </v-navigation-drawer>
    <v-main class="pt-0">
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
        { title: 'Welcome', icon: 'mdi-human-greeting-variant', to: '/tasty-goody' },
        { title: 'Tasty Goody', icon: 'mdi-food-fork-drink', to: '/goodyBoard' },
        { title: 'Guest Book', icon: 'mdi-pencil', to: '/guestBook' },
        { title: 'Contacts', icon: 'mdi-contacts', to: '/contacts' },
      ],
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
  },
  mounted() {
    console.log(this.$route);
  },
  created() {
    this.drawer = this.setDrawer();
  },
  methods: {
    setDrawer() {
      switch(this.$vuetify.breakpoint.name){
      case 'xs':
      case 'sm':
        return false;
      default:
        return true;
      }
    },
  }
};
</script>

<style>

</style>
