package com.example.WebProject;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonView(UserView.Id.class)
	@Column(name = "usrid", nullable = false)
	private int usrid;
	@OneToMany
	@JoinColumn(name="user_id")
	private List<Location> locations;
	@Column(unique=true, length=40)
	@JsonView(UserView.Username.class)
	private String username;
	@Column(unique=true, length=40)
	@JsonView(UserView.Pass.class)
	private String pass;
	@Column (unique=true, length=40)
	@JsonView(UserView.Email.class)
	private String email;
	@Column
	@JsonView(UserView.Role.class)
	private String role;

	public List<Location> getLocations() {
		return locations;
	}
	public void setLocations(List<Location> locations) {
		this.locations = locations;
	}
	
public void setUsername(String usrnm) {
	this.username = usrnm;
}
public void setPassword(String passwd) {
	this.pass = passwd;
}
public void setEmail(String e_mail) {
	this.email = e_mail;
}
public void setRole(String rol) {
	this.role = rol;
}

public String getUsername() {
	return this.username;
}
public String getPassword() {
	return this.pass;
}
public String getEmail() {
	return this.email;
}
public String getRole() {
	return this.role;
}
public int getId() {
	return this.usrid;
}









}

