<template>
    <div>
        <!-- 表单 -->
        <!-- rules 校验规则-->
        <!-- model 数据对象 -->
        <!-- ref 查找组件 -->
        <el-form :rules="rules" :model="loginForm" ref="loginForm" class="loginContainer">
            <h3 class="loginTitle">系统登陆</h3>

            <el-form-item prop="username">
                <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="请输入用户名"></el-input>
            </el-form-item>

            <el-form-item prop="password">
                <el-input type="password" v-model="loginForm.password" auto-complete="off"
                    placeholder="请输入密码"></el-input>
            </el-form-item>

            <el-checkbox class="loginRemember" v-model="checked"></el-checkbox>

            <!-- 点击事件 @click -->
            <el-button type="primary" style="width:100%" @click="submitLogin">登录</el-button>
        </el-form>

    </div>
</template>

<script>
//引入自定义方法
// import { postKeyValueRequest } from '../utils/api'
export default {
    name: 'Login',
    data() {
        return {
            loginForm: {
                username: 'admin',
                password: '123'
            },
            // 表单校验规则
            rules: {
                // 必填，不填提示 '请输入用户名' 触犯方式 blur
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            },
            checked: true
        }
    },
    methods: {
        submitLogin() {
            this.$refs.loginForm.validate((valid) => {
                //valid：表单的验证结果 参数是否存在或者说是否填写
                console.log(valid);
                if (valid) {
                    // alert('submit!');
                    this.postKeyValueRequest('/doLogin', this.loginForm).then(resp => {
                        // console.log(resp);
                        // 登录成功，服务端返回resp
                        if (resp) {
                            // 跳转页面
                            // this.$router.push({ path: '/' });
                            //JSON.stringify()将resp序列化转换为字符串，更具可读性
                            // alert(JSON.stringify(resp))
                            //只能存储字符串
                            window.sessionStorage.setItem('user', JSON.stringify(resp.obj));
                            this.$router.replace({ path: '/home' });
                        } else {
                            // 登录失败
                            this.$message.error(resp.data.message);
                        }
                    })
                } else {
                    this.$message.error('请输入所有字段');
                    return false;
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.loginContainer {
    // 圆弧
    border-radius: 15px;
    // 卡片
    background-clip: padding-box;
    // 上下 左右
    margin: 180px auto;
    width: 350px;
    // 内边距 上右下左 (逆时针)
    padding: 15px 35px 15px 35px;
    //背景
    background: #fff;
    //边框
    border: 1px solid #eaeaea;
    //阴影
    box-shadow: 0 0 25px #cac6c6;
}

.loginTitle {
    margin: 15px auto 20px auto;
    //水平居中
    text-align: center;
    color: #000;
}

.loginRemember {
    text-align: left;
    margin: 0px 0px 15px 0px;
}
</style>