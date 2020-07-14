package com.example.WebProject;

import java.util.List;

public interface UserService {
	public User findById(int userid);
	public void deleteByUsername(String username);
	public User saveUser(User user);
	public void deleteAll();
	public List<User> getUsers();
	public User getForUsername(String username);
	
}
