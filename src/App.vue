<template>
  <v-app>
    <v-app-bar
      app
      color="amber"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-spacer />
    </v-app-bar>
    <!-- dark 옵션으로 사이드바 텍스트 흰색 적용, :src로 배경 이미지 적용 -->
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
    <v-main>
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
        { title: 'Guest Book', icon: 'mdi-pencil', to: '/guestBook' },
        { title: 'Contacts', icon: 'mdi-contacts', to: '/contacts' },
      ],
    }
  },
  computed: {

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
