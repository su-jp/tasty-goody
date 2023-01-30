<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
      >
        <p
          class="text-lg-h1 text-sm-h2 text-h3 font-weight-black text-center font-italic amber--text"
        >
          Hi, there!
        </p>
        <p class="text-body-1 text-center amber--text">
          Tasty Board에 전하고 싶은 말을 남겨주세요!
        </p>
      </v-col>
    </v-row>
    <v-card
      v-for="data in guestBookList"
      :key="data.id"
      class="mt-5"
    >
      <v-card-title>
        <v-icon
          left
          color="amber"
        >
          mdi-account-edit
        </v-icon>
        <span class="text-subtitle-1 font-weight-light">{{ data.name }}</span>
      </v-card-title>
      <v-card-text>
        <p class="text-body-1">
          {{ data.contents }}
        </p>
        <v-row>
          <v-spacer />
          <v-col cols="auto">
            {{ data.createdAt }}
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-dialog
      v-model="dialog"
      show-overlay
      max-width="600"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-fab-transition>
          <v-btn
            color="amber"
            bottom
            right
            fixed
            fab
            dark
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </v-fab-transition>
      </template>
      <template>
        <v-card>
          <v-toolbar
            color="amber"
            dark
          >
            <v-row align="center">
              <v-col
                cols="8"
                class="ml-3"
              >
                방명록 작성하기
              </v-col>
              <v-spacer />
              <v-col cols="auto">
                <v-btn
                  icon
                  @click="onCloseDialog"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-toolbar>
          <v-card-text>
            <v-form
              ref="form"
              class="pt-5"
            >
              <v-text-field
                v-model="name"
                label="🙋‍♀️이름"
                required
                @keyup="onFormChange"
              />
              <v-text-field
                v-model="contents"
                counter="100"
                label="📝내용"
                required
                @keyup="onFormChange"
              />
              <v-row>
                <v-spacer />
                <v-col cols="auto">
                  <v-btn
                    color="amber"
                    depressed
                    :dark="validAll"
                    :disabled="!validAll"
                    class="mt-5"
                    @click="onClickBtn"
                  >
                    등록하기
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
        <v-overlay :value="overlay">
          <v-progress-circular
            indeterminate
            size="64"
          />
        </v-overlay>
      </template>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    validAll: false,
    overlay: false,
    name: '',
    contents: '',
    guestBookList: [],
  }),
  created() {
    this.getGuestBookList();
  },
  methods: {
    async getGuestBookList() {
      this.guestBookList = [];
      await this.$axios.get('https://api.github.com/repos/su-jp/tasty-goody/issues/3/comments?per_page=100')
        .then((response) => {
          for(let i=0; i<response.data.length; i++) {
            let guestBook = JSON.parse(response.data[i].body);
            let regDate = new Date(response.data[i].created_at);
            let parsedDate = regDate.getFullYear()+'/'+(regDate.getMonth()+1)+'/'+regDate.getDate()+' '+regDate.getHours()+':'+regDate.getMinutes();
            let guestBookData = {
              id: i,
              name: guestBook.name,
              contents: guestBook.contents,
              createdAt: parsedDate,
              likes: response.data[i].reactions.heart
            }
            this.guestBookList.push(guestBookData);
          }
        })
        .catch((error) => console.log('error: '+error))
        .finally(() => {
          this.guestBookList.sort(function(a,b){
            return b.id - a.id;
          });
        });
    },
    onCloseDialog() {
      this.dialog = false;
      this.$refs.form.reset();
    },
    onClickBtn() {
      this.overlay = true;
      let strContents = `{ "name": "${this.name}", "contents": "${this.contents}" }`;
      const token = ''; //GitHub Personal access token
      this.$axios({
        url: 'https://api.github.com/repos/su-jp/tasty-goody/issues/3/comments',
        method: 'post',
        headers: {
          Authorization: "Basic " + token
        },
        data: {
          body: strContents
        }
      }).then((response) => {
        alert('방명록이 등록되었습니다. 감사합니다!');
      }).catch((error) => {
        console.log('error: ' + error);
        alert('등록에 실패하였습니다. 관리자에게 문의해주세요.')
      }).finally(() => {
        setTimeout(() => {
          this.getGuestBookList();
          this.overlay = false;
          this.onCloseDialog();
        }, 1000);
      });
    },
    onFormChange() {
      if(this.name === '' || this.contents === '') {
        this.validAll = false;
        return;
      }else if(this.contents.length){
        if(this.contents.length > 100){
          this.validAll = false;
          return;
        }
      }
      this.validAll = true;
    },
  },
}
</script>

<style>

</style>
