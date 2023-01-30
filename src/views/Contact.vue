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
          />

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="📧이메일"
            required
          />

          <v-text-field
            v-model="phone"
            :counter="11"
            :rules="phoneRules"
            label="📞연락처"
            required
          />
          <v-btn
            color="amber"
            dark
            depressed
            @click="onClickBtn"
          >
            전송
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
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
      v => (v && v.length <= 10) || '연락처는 11자리까지 입력할 수 있습니다',
      v => /^[0-9]*$/.test(v) || '연락처는 숫자만 입력할 수 있습니다'
    ],
  }),

  methods: {
    onClickBtn() {
      if(this.$refs.form.validate()) {
        alert('전송');
      } else {
        alert('전송실패');
      }
    },
  },
}
</script>

<style>

</style>
