package org.liuy191.vhr.controller;

import org.liuy191.vhr.model.RespBean;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    @RequestMapping("/login")
    public RespBean login(){
        return RespBean.error("尚未登录！");
    }
}
