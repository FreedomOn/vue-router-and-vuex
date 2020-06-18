<template>
  <div class="bg">
    <div class="login-box">
      <!-- 通过:rules="loginFormRules"来绑定输入内容的校验规则 -->
      <el-form
        :rules="loginFormRules"
        ref="loginForm"
        :model="loginForm"
        label-position="right"
        label-width="auto"
        v-if="show"
      >
        <span class="login-title">欢迎登录</span>
        <div style="margin-top: 5px"></div>
        <el-form-item label="用户名" prop="loginName">
          <el-col :span="22">
            <el-input
              type="text"
              v-model="loginForm.loginName"
              autocomplete="off"
              placeholder="请输入用户"
              style="width:300px"
            ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="密码" prop="loginPassword">
          <el-col :span="22">
            <el-input
              :type="pwdType"
              v-model="loginForm.loginPassword"
              @keyup.enter.native="loginSubmit"
              autocomplete="off"
              placeholder="密码"
              style="width:300px"
            ></el-input>
            <span class="show-pwd" @click="showPwd">
              <svg-icon :icon-class="eye" />
            </span>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.native.prevent="loginSubmit('loginForm')">登录</el-button>
          <el-button type="primary" @click="onRegit('loginForm')">注册</el-button>
        </el-form-item>
      </el-form>

      <el-form label-position="right" label-width="auto" v-if="!show">
        注册
        <el-button type="info" @click="reserLogin">返回登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/login.js";
export default {
  name: "login",
  data() {
    return {
      show: true,
      eye: 'eyeq',
      pwdType:'password',
      loginForm: {
        loginName: "",
        loginPassword: ""
      },
      loginFormRules: {
        loginName: [
          { required: true, message: "账号不可为空", trigger: "blur" }
        ],
        loginPassword: [
          { required: true, message: "密码不可为空", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    //   眼睛
    showPwd() {
      if (this.pwdType === 'password') {
        console.log(111)
        this.pwdType = ''
        this.eye = 'eyeopenq'
      } else {
        console.log(2222)
        this.pwdType = 'password'
        this.eye = 'eyeq'
      }
    },
    loginSubmit(formName) {
      // 为表单绑定验证功能
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
          console.log("loginSuccess");
          console.log(this.loginForm.loginName, this.loginForm.loginPassword);
          this.login();
          // this.$router.push({ path: '/' })
          // http://admintest.happymmall.com/manage/user/login.do
        } else {
          return false;
        }
      });
    },
    onRegit: function() {
      console.log("注册");
      this.show = false;
    },
    reserLogin() {
      this.show = true;
    },
    async login() {
      let that = this;
      let postdata = {
        username: this.loginForm.loginName,
        password: this.loginForm.loginPassword
      };
      let res = await login(postdata);
      console.log(res);
      if (res.status === 0) {
        // sessionStorage.setItem("islogin", res.status);
        //假 token  仅供测试使用  将name设置为token 存储在 store，仅为测试效果，实际存储token以后台返回为准
        that.$store.dispatch('setToken', this.loginForm.loginName)

        localStorage.setItem("key", "1-1");
        this.$message.success("恭喜你，登录成功"); //登录成功的提示

        sessionStorage.setItem('role', 'ok');

        this.$router.push({ path: "/index" });
      } else {
        this.$message.error("账号或者密码错误"); //账号密码错误时的提示
      }
    }
  }
};
</script>
<style scoped>
.bg{
    background: url(../../../static/img/login_bg.png) no-repeat ;
    width: 100%;
    height: 578px;
    position: relative;
    /* login_bg.png  timg.jpg*/
}
.login-box {
    position: absolute;
    top:150px;
    left: 370px;
  /* border: 1px solid #dcdfe6; */
  width: 460px;
  margin: 0 auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  background: lavender;
  /* -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px palegreen; */
}
.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #66cd00;
  font-size: 30px;
  font-weight: bold;
}
.show-pwd {
    position: absolute;
    right: 38px;
    top: 0px;
    /* background: red; */
    font-size: 16px;
    cursor: pointer;
  }
</style>
