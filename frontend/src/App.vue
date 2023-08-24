<template>
  <div class="app">
    <div v-if="state.account.mid">안녕하세요. {{ state.account.memberName }}님</div>
    <div v-else>
      <label for="loginId">
        <span>아이디</span>
        <input type="text" id="loginId" v-model="state.form.loginId"/>
      </label>
      <label for="loginPw">
        <span>비밀번호</span>
        <input type="password" id="loginPw" v-model="state.form.loginPw"/>
      </label>
      <hr/>
      <button @click="submit()">로그인</button>
    </div>
  </div>
</template>
<script>
import {reactive} from "vue";
import axios from "axios";

export default {
  setup() {
    const state = reactive({
      loginedIn: false,
      account: {
        mid: null,
        memberName: ""
      },
      form:{
        loginId: "",
        loginPw: ""
      }
    });
    const submit = ()=>{
      const args = {
        loginId: state.form.loginId,
        loginPw: state.form.loginPw
      }
      axios.post("/api/account",args).then((res)=>{
        console.log(res);
      })
    }
    // axios.get("/api/account").then((res) => {
    //   console.log(res.data);
    //   state.account = res.data;
    // });
    return {state,submit};
  }
}

</script>