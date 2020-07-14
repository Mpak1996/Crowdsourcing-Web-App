package com.example.WebProject;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PageController {
	
	@RequestMapping("/")
	public String login1 () {
	  return "LoginPage";
	}
	
	@RequestMapping("/login")
	public String login () {
	  return "LoginPage";
	}
	
	@RequestMapping("/register")
	public String register () {
	  return "RegisterPage";
 	}
	
	@RequestMapping("/admin")
	public String adminpage () {
		return "adminPage";
	}
	
	@RequestMapping("/home")
	public String homepage () {
		return "homePage";
	}

}
