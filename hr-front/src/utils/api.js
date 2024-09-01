// 封装网络请求响应
// 导入axios
import axios from "axios";
// 从elementUI导入Message消息提示
import { Message } from "element-ui";
//响应拦截 
//success成功的回调，这里的成功是指响应码为200的情况，因此，其中包含的业务领域的失败
//success中的data是服务端实际返回的数据，内部的字段，例如status，msg由服务端定义
//error失败的回调 
axios.interceptors.response.use(success => {
    // success.status状态码存在且等于200（表示网络响应正常）
    //success.data.status业务状态码异常
    if (success.status && success.status == 200 && success.data.status == 500) {
        //key->message
        //value->展示的错误文本success.data.msg
        Message.error({ message: success.data.msg })
        //返回为空
        return;
    }
    if (success.data.msg) {
        Message.success({ message: success.data.msg })
    }
    //返回请求调用的地方
    return success.data;

}, error => {
    if (error.response.status == 504 || error.response.status == 404) {
        Message.error({ message: "服务器被吃了" })
    } else if (error.response.status == 403) {
        Message.error({ message: "权限不足，请联系管理员" })
    } else if (error.response.status == 401) {
        Message.error({ message: "尚未登录！" })
    } else {
        if (error.response.data.msg) {
            Message.error({ message: error.response.data.msg })
        } else {
            Message.error({ message: "未知错误" })
        }
    }
    return;
})

//请求拦截
//定义全局变量
let base = ''
//spring security 使用key-value传参
//登录请求
export const postKeyValueRequest = (url, param) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: param,
        transformRequest: [function (data) {
            console.log(data);
            let ret = '';
            for (let key in data) {
                //encodeURIComponent 用于将不安全不合法的Url字符转换为合法的Url字符表示
                console.log(encodeURIComponent(key));
                console.log(encodeURIComponent(data[key]));
                ret += encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&'
                // ret += key + '=' + data[key] + '&'
            }
            console.log(ret);
            return ret;
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

export const postRequest = (url, param) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: param,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const putRequest = (url, param) => {
    return axios({
        method: 'put',
        url: `${base}${url}`,
        data: param,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

// 没有请求体，参数放在地址栏
export const deleteRequest = (url) => {
    return axios({
        method: 'delete',
        url: `${base}${url}`,
    })
}

// 没有请求体，参数放在地址栏
export const getRequest = (url) => {
    return axios({
        method: 'get',
        url: `${base}${url}`,
    })
}