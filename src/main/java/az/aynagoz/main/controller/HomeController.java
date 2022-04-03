package az.aynagoz.main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping(value = {"/", "/index"})
    public String gotoHomePage(){
        return "index";
    }

    @GetMapping("/oklpls")
    public String goOculoplasticPage(){
        return "okuloplastika";
    }

    @GetMapping("/form")
    public String gotoFormsPage(){
        return "forms";
    }
}
