<template>
  <v-container fluid>
    <v-row class="pt-2">
      <v-col
        cols="12"
        :elevation="25"
      >
        <p
          class="text-lg-h1 text-sm-h2 text-h3 font-weight-black text-center font-italic amber--text"
        >
          Tasty Goody
        </p>
      </v-col>
    </v-row>
    <v-row
      class="py-5"
      justify="center"
    >
      <v-col
        cols="12"
        sm="9"
        md="6"
        xl="4"
      >
        <v-img
          class="rounded-circle mx-auto"
          :src="require('@/assets/sidebar.jpg')"
        />
      </v-col>
    </v-row>
    <v-row class="py-5">
      <v-col>
        <p class="text-lg-h4 text-sm-h5 text-h6 text-center">
          맛있는 건 정말 참을 수 없어 🎵
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {

  }
}
</script>

<style>

</style>
