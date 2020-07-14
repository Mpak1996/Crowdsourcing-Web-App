package com.example.WebProject;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Location {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "locid", nullable = false)
	@JsonView (LocationView.Locid.class)
	private int locid;
	@ManyToOne
	@JoinColumn(name="user_id")
	@JsonView (LocationView.User.class)
	private User user;
	@Column
	@JsonView (LocationView.Longtitude.class)
	private Long longtitude;
	@Column
	@JsonView (LocationView.Latitude.class)
	private Long latitude;
	@Column
	@JsonView (LocationView.Timestamp.class)
	private Long timestamp;
	@Column
	@JsonView (LocationView.Activity.class)
	public String activity;
	@Column
	@JsonView (LocationView.Hour.class)
	public int hour;
	@Column 
	@JsonView (LocationView.Day.class)
	private String day;
	@Column
	@JsonView (LocationView.Month.class)
	private String month;
	@Column
	@JsonView (LocationView.Year.class)
	private String year;
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public int getLocid() {
		return locid;
	}
	public void setLocid(int locid) {
		this.locid = locid;
	}
	public Long getLongtitude() {
		return longtitude;
	}
	public void setLongtitude(Long longtitude) {
		this.longtitude = longtitude;
	}
	public Long getLatitude() {
		return latitude;
	}
	public void setLatitude(Long latitude) {
		this.latitude = latitude;
	}
	public String getActivity() {
		return activity;
	}
	public void setActivity(String activity) {
		this.activity = activity;
	}
	public Long getTimestamp() {
		return timestamp;
	}
	public void setTimestamp(Long timestamp) {
		this.timestamp = timestamp;
	}
	public int getHour() {
		return hour;
	}
	public void setHour(int hour) {
		this.hour = hour;
	}
	public String getDay() {
		return day;
	}
	public void setDay(String day) {
		this.day = day;
	}
	public String getMonth() {
		return month;
	}
	public void setMonth(String month) {
		this.month = month;
	}
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}









}


