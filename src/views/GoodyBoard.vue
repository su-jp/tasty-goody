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
        <v-card
          class="mx-auto text-center"
          color="amber lighten-1"
          dark
          max-width="600"
        >
          <v-card-text>
            <v-img :src="require(`@/assets/${board.id}.jpg`)" />
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
            >
              자세히 보기
            </v-btn>
          </v-card-actions>
        </v-card>
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
