<template>
    <div>
        <el-container>
            <el-header class="homeHeader">
                <div class="title">微人事</div>
                <el-dropdown class="userInfo" @command="handleCommand">
                    <span class="el-dropdown-link">
                        <!-- {{ user.name }}<i class="el-icon-arrow-down el-icon--right"></i> -->
                        {{ user.name }}<i><img :src="user.userface"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="userInfo">个人中心</el-dropdown-item>
                        <el-dropdown-item command="setting">设置</el-dropdown-item>
                        <!-- disabled 禁用 -->
                        <!-- <el-dropdown-item disabled>双皮奶</el-dropdown-item> -->
                        <!-- divider 分割线 -->
                        <el-dropdown-item command="logout" divided>注销登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu @select="menuClick">
                        <el-submenu index="1" v-for="(item,index) in this.$router.options.routes" v-if="!item.hidden" :key="index" >
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>{{ item.name }}</span>
                            </template>
                            <el-menu-item :index="child.path" v-for="(child,index) in item.children" :key="index">{{ child.name }}</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import router from '@/router';

export default {
    name: 'Home',
    data() {
        return {
            user: JSON.parse(window.sessionStorage.getItem('user'))
        }
    },
    methods: {
        menuClick(index) {
            this.$router.push(index);
        },
        handleCommand(command) {
            if (command == 'logout') {
                this.$confirm('此操作将注销登录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.getRequest("/logout")
                    // 登录数据清空
                    window.sessionStorage.removeItem('user');
                    // 返回登录页
                    this.$router.replace({ path: '/' });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消操作'
                    });
                });
            }

        }
    }

}
</script>

<style scoped>
.homeHeader {
    background-color: #B3C0D1;
    color: #333;
    display: flex;
    /** 垂直居中,要与【display: flex;】配合使用 */
    align-items: center;
    /**
    要与【display: flex;】配合使用
    justify-content: space-between; 
    用于 Flex 布局，将多个子元素沿主轴均匀分布。
    首尾元素紧贴容器边缘，其余元素间距相等 */
    justify-content: space-between;
    padding: 0px 15px;
    /**box-sizing: border-box; 是一个 CSS 属性，
    用于改变元素的盒模型计算方式。
    在默认的 content-box 盒模型中，元素的宽度和高度仅包括内容区域，而不包括边框和内边距。
    但当设置为 border-box 时，元素的宽度和高度将包括内容区域、边框和内边距，使得总宽度和高度不会超过设定的值。
    这在布局时非常有用，可以避免因为边框和内边距导致的元素尺寸增加问题 */
    box-sizing: border-box;
}

.homeHeader .title {
    font-size: 20px;
    font-family: '微软雅黑';
    color: #ffffff
}

.homeHeader .userInfo {
    /**
    光标变成手指
     */
    cursor: pointer;
}

.el-dropdown-link img {
    width: 48px;
    height: 48px;
    border-radius: 24px;
    margin-left: 10px;
    /**
     内边距会压缩改变图片的形状
     */
    /* padding-left: 10px; */
}

.el-dropdown-link {
    display: flex;
    align-items: center;
}
</style>