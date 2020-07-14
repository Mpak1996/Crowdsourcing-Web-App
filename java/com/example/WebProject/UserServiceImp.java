package com.example.WebProject;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImp implements UserService {
	@Autowired
	UserRepository repository;

	@Override
	public User findById(int userid) {
		User usr = new User();
		usr = repository.findById(userid).orElse(null);
		return usr;
	}

	@Override
	public User saveUser(User user) {
		return repository.save(user);
	}

	@Override
	public void deleteAll() {
		repository.deleteAll();
	}

	@Override
	public List<User> getUsers() {
		return repository.findAll();
	}

	@Override
	public User getForUsername(String username) {
		return repository.findByUsername(username);
	}

	@Override
	public void deleteByUsername(String username) {
		repository.deleteByUsername(username);
	}

}
