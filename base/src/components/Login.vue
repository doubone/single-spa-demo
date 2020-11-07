<template>
    <div style="display: flex; justify-content: center">
        <h2>登录</h2>
        <el-form
            ref="loginForm"
            :model="loginForm"
            :rules="rules"
            style="width: 400px"
        >
            <el-form-item prop="userName" label="账号">
                <el-input
                    style="150px"
                    v-model="loginForm.userName"
                    type="text"
                    placeholder="请输入账号"
                    @keyup.enter.native="login"
                />
            </el-form-item>
            <el-form-item prop="password" label="密码">
                <el-input
                    v-model="loginForm.password"
                    type="password"
                    placeholder="请输入密码"
                    @keyup.enter.native="login"
                    onpaste="return false"
                    oncopy="return false"
                    oncut="return false"
                />
            </el-form-item>
            <el-form-item>
                <el-button
                    type="primary"
                    class="login-btn"
                    size="primary"
                    @click="login"
                    >登录</el-button
                >
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Login",
    data() {
        var validateAccount = (rule, value, callback) => {
            var regex = /^[\w\d]{6,10}$/;
            if (regex.test(value)) {
                callback();
            } else {
                callback(new Error("请输入字母或数字(6~10位)."));
            }
        };
        return {
            loginForm: {
                userName: "",
                password: "",
            },
            rules: {
                userName: [
                    {
                        required: true,
                        message: "请输入账号",
                        trigger: "blur",
                    },
                    {
                        validator: validateAccount,
                        trigger: "blur",
                    },
                ],
                password: [
                    {
                        required: true,
                        message: "请输入密码",
                        trigger: "blur",
                    },
                ],
            },
        };
    },
    mounted() {
        
    },
    methods: {
        login() {
            let _this = this;
            _this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    axios
                        .get("http://localhost:3000/login", {
                            params: this.loginForm,
                        })
                        .then((res) => {
                            if (res.status == 200 && res.data.code == 200) {
                                // 保存用户信息
                                _this.$store.commit(
                                    "set_session_data",
                                    res.data.data
                                );
                                _this.$router.push("student");
                            }
                        })
                        .catch((e) => {
                            console.log(e)
                        });
                } else return false;
            });
        },
    },
};
</script>

<style  scoped>
</style>


