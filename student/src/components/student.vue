<template>
    <!-- <el-card>
        <h1 slot="header">学生信息</h1>
        <span>学生姓名：{{ user.name?user.name:'XX' }}</span>
        <span>登录状态：{{ user.isLogin?'在线':'离线'}}</span>
    </el-card> -->
    <div>
        <span>学生姓名：{{ user.name?user.name:'XX' }}</span>
        <span>登录状态：{{ user.isLogin?'在线':'离线'}}</span>
    </div>
</template>

<script>
import store from "@store/index";
export default {
    name: "student",
    data() {
        return {
            user: {
                name: "",
                isLogin:false
            },
        };
    },
    created() {
        console.log(store)
    //   let userInfo  = this.$store.getters.getUser
    //   console.log(userInfo)
    }
};
</script>

<style scoped>
</style>
