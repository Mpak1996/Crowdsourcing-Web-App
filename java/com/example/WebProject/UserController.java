package com.example.WebProject;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.annotation.JsonView;

@RestController
@RequestMapping("/user")               //path with /user leading here
public class UserController {
	@Autowired
	UserService uservice;
	

	//localhost/user/id/get leads to here
	@GetMapping("/{id}/get")   //{id} makes it user/300e.g on the url 
	@JsonView(UserDetailedView.class)              
    public User findById(@PathVariable("id") int userid) {
    	User usr= new User();
    	usr = uservice.findById(userid);
    	return usr;
    }
	
	@PostMapping("/save")
	@JsonView(UserDetailedView.class)
	public User saveUser(@RequestBody User user) {
		user.setRole("USER");
		return uservice.saveUser(user);
	}
	
	@DeleteMapping("/{username}/deleteuser")
	public void deleteByUsername(@PathVariable("username") String username){
		uservice.deleteByUsername(username);
	}
	
	@DeleteMapping("/deletedata")
	public void deleteAll() {
		uservice.deleteAll();
	}
	@GetMapping("/get")
	@JsonView(UserDetailedView.class)
	public List<User> getUsers() {
		return uservice.getUsers();
	}

	@GetMapping("/get-by-username")
	@JsonView(UserDetailedView.class)
	public User getForUsername(String username) {
		return uservice.getForUsername(username);
	}
	
	@GetMapping("/validate-credentials")
	public ResponseEntity<String> logIn(@RequestParam(name = "username") String username, @RequestParam(name = "password") String password) {
		User user = uservice.getForUsername(username);
		if (user != null) {
			if(user.getUsername().equals(username) && user.getPassword().equals(password)) {
				return new ResponseEntity<>(user.getUsername() , HttpStatus.OK);
			}
			
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
