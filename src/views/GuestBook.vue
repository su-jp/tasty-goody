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
      <v-col>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              방명록 작성하기
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-form ref="form">
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
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      />
    </v-overlay>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    validAll: false,
    overlay: false,
    name: '',
    contents: '',
  }),
  methods: {
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
        this.overlay = false;
        this.$refs.form.reset();
      });
    },
    onFormChange() {
      if(this.name === '' || this.contents === '') {
        if(this.contents.length > 100){
          this.validAll = false;
        }
      }else{
        if(this.contents.length > 100){
          this.validAll = false;
        } else {
          this.validAll = true;
        }
      }
    }
  },
}
</script>

<style>

</style>
