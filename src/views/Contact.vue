<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="4"
      >
        <p
          class="text-lg-h1 text-sm-h2 text-h3 text-center font-weight-black font-italic amber--text"
        >
          Tasty<br>Goody
        </p>
      </v-col>
      <v-spacer />
      <v-col cols="7">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="🙋‍♀️이름"
            required
            @keyup="onFormChange"
          />

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="📧이메일"
            required
            @keyup="onFormChange"
          />

          <v-text-field
            v-model="phone"
            :counter="11"
            :rules="phoneRules"
            label="📞연락처"
            required
            @keyup="onFormChange"
          />
          <v-row>
            <v-spacer />
            <v-col cols="auto">
              <v-btn
                color="amber"
                depressed
                :disabled="!validAll"
                class="mt-5"
                @click="onClickBtn"
              >
                전송하기
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
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
    valid: true,
    validAll: false,
    overlay: false,
    name: '',
    nameRules: [
      v => !!v || '이름을 입력해주세요',
    ],
    email: '',
    emailRules: [
      v => !!v || '이메일을 입력해주세요',
      v => /.+@.+\..+/.test(v) || '이메일 형식이 올바르지 않습니다',
    ],
    phone: '',
    phoneRules: [
      v => !!v || '연락처를 입력해주세요',
      v => (v && v.length <= 11) || '연락처는 11자리까지 입력할 수 있습니다',
      v => /^[0-9]*$/.test(v) || '연락처는 숫자만 입력할 수 있습니다'
    ],
  }),

  methods: {
    onClickBtn() {
      this.overlay = true;
      let strContents = `이름: ${this.name}\n이메일: ${this.email}\n연락처: ${this.phone}`;
      const token = 'Z2hwX3FmVm9HcWZWeHhRc1hOU05rVlFzT2FsR2s3Z3VXNzNVeTVCTg=='; //GitHub Personal access token
      this.$axios({
        url: 'https://api.github.com/repos/su-jp/tasty-goody/issues/2/comments',
        method: 'post',
        headers: {
          Authorization: "Basic " + token
        },
        data: {
          body: strContents
        }
      }).then((response) => {
        alert('전송 되었습니다. 감사합니다!');
      }).catch((error) => {
        console.log('error: ' + error);
        alert('전송에 실패하였습니다. 관리자에게 문의해주세요.')
      }).finally(() => {
        this.overlay = false;
        this.$refs.form.reset();
      });
    },
    onFormChange() {
      if(this.$refs.form.validate()) {
        this.validAll = true;
      }else{
        this.validAll = false;
      }
    }
  },
}
</script>

<style>

</style>
