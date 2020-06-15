<template>
    <div class="login-box">
        <!-- 通过:rules="loginFormRules"来绑定输入内容的校验规则 -->
        <el-form :rules="loginFormRules" ref="loginForm" :model="loginForm" label-position="right" label-width="auto" v-if="show">
            <span class="login-title">欢迎登录</span>
            <div style="margin-top: 5px"></div>
            <el-form-item label="用户名" prop="loginName">
                <el-col :span="22">
                    <el-input type="text" v-model="loginForm.loginName" autoComplete="off" placeholder="mingzi"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="密码" prop="loginPassword">
                <el-col :span="22">
                    <el-input type="password" v-model="loginForm.loginPassword"   @keyup.enter.native="loginSubmit"  autoComplete="off"
                     placeholder="密码"></el-input>
                      <!-- <span class="show-pwd" @click="showPwd">
                    <svg-icon :icon-class="eye" /> -->
                <!-- </span> -->
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click.native.prevent="loginSubmit('loginForm')" >登录</el-button>
                <el-button type="primary" @click="onRegit('loginForm')">注册</el-button>
            </el-form-item>
        </el-form>

         <el-form label-position="right" label-width="auto" v-if="!show">
             注册
            <el-button type="info" @click="reserLogin">返回登录</el-button>
        </el-form>
    </div>
</template>

<script>
import { login } from '@/views/api/login.js'
    export default {
        name: "login",
        data() {
            return {
                show:true,
                loginForm: {
                    loginName: '',
                    loginPassword: ''
                },
                loginFormRules: {
                    loginName: [
                        {required: true, message: '账号不可为空', trigger: 'blur'}
                    ],
                    loginPassword: [
                        {required: true, message: '密码不可为空', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            loginSubmit(formName) {
                // 为表单绑定验证功能
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
                        console.log("loginSuccess")
                        console.log(this.loginForm.loginName,this.loginForm.loginPassword)
                       this.login()
                        // this.$router.push({ path: '/' })
                        // http://admintest.happymmall.com/manage/user/login.do
                    } else {
                        return false;
                    }
                });
            },
            onRegit:function(){
                console.log('注册')
                this.show = false  
            },
            reserLogin(){
                this.show = true
            },
            async login() {
               let postdata = {
                   username:this.loginForm.loginName,
                   password:this.loginForm.loginPassword
               }
               let res = await login(postdata)
               console.log(res)
               if(res.status ===0){
                   sessionStorage.setItem('islogin',res.status)
                   localStorage.setItem('key','1-1')
                   this.$message.success('恭喜你，登录成功')//登录成功的提示
                   this.$router.push({ path: '/' })
               }else{
                  this.$message.error('账号或者密码错误')//账号密码错误时的提示
               }
           }
        }
    }
</script>
<style scoped>
    .login-box {
        border: 1px solid #DCDFE6;
        width: 350px;
        margin: 100px auto;
        padding: 35px 35px 15px 35px;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        box-shadow: 0 0 25px palegreen;
    }
    .login-title {
        text-align: center;
        margin: 0 auto 40px auto;
        color: #66CD00;
        font-size: 30px;
        font-weight: bold;
    }
</style>
