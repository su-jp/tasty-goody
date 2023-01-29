<template>
  <v-container fluid>
    <v-row
      class="pt-5"
    >
      <v-spacer />
      <v-col
        cols="auto"
      >
        <v-switch
          v-model="sortByDesc"
          color="orange"
          :label="`${sortByDesc ? '최신순' : '오래된순'}`"
          @click="sortBy(sortByDesc)"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="board in boardList"
        :key="board.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-dialog
          max-width="600"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-card
              class="mx-auto text-center"
              color="amber lighten-1"
              dark
              max-width="600"
            >
              <v-card-text>
                <v-img :src="require(`@/assets/photos/${board.id}/1.jpg`)" />
              </v-card-text>

              <v-card-text>
                <v-row>
                  <v-col cols="auto">
                    <div class="text-subtitle3 font-weight-thin text-right">
                      {{ board.region }}
                    </div>
                  </v-col>
                  <v-spacer />
                  <v-col cols="auto">
                    <div class="text-subtitle3 font-weight-thin text-right">
                      {{ board.date }}
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <div class="text-h5 font-bold white--text">
                      {{ board.storeName }}
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    {{ board.goodies }}
                  </v-col>
                </v-row>
              </v-card-text>

              <v-divider />

              <v-card-actions class="justify-center">
                <v-btn
                  block
                  text
                  v-bind="attrs"
                  v-on="on"
                >
                  자세히 보기
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar
                color="amber"
                dark
              >
                <v-row align="center">
                  <v-col cols="auto">
                    [{{ board.region }}] {{ board.storeName }}
                  </v-col>
                  <v-spacer />
                  <v-col cols="auto">
                    <v-btn
                      icon
                      @click="dialog.value = false"
                    >
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-toolbar>
              <v-carousel
                cycle
                height="400"
                hide-delimiter-background
                show-arrows-on-hover
                delimiter-icon="mdi-minus"
              >
                <v-carousel-item
                  v-for="i in board.numPhotos"
                  :key="i"
                >
                  <v-img :src="require(`@/assets/photos/${board.id}/${i}.jpg`)" />
                </v-carousel-item>
              </v-carousel>
              <v-card-title>
                🥄 내가 먹은 메뉴
              </v-card-title>
              <v-card-text>
                {{ board.goodies }}
              </v-card-text>
              <v-divider />
              <v-card-title>
                💬 후기
              </v-card-title>
              <v-card-text>
                {{ board.contents }}
              </v-card-text>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      sortByDesc: true,
      boardList: [],
    };
  },
  created() {
    this.$axios.get('https://su-jp.github.io/tasty-goody/boardData/boardList.json')
      .then((response) => (this.boardList = response.data.boardList))
      .catch((error) => console.log('fetch error: '+error))
      .finally(() => {
        this.sortBy(this.sortByDesc);
      });
  },
  methods: {
    sortBy(sortByDesc) {
      this.boardList.sort(function(a,b){
        return sortByDesc ? (b.id - a.id) : (a.id - b.id);
      });
    },
  }
}
</script>

<style>

</style>
