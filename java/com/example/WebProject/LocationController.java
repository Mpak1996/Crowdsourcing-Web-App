package com.example.WebProject;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping("/location")
public class LocationController {
	@Autowired
	LocationService locservice;
	
	@PostMapping("/save/filepath")
	@JsonView(LocationDetailedView.class)
	public List<Location> parseAndSaveForUser(@RequestParam(name = "filepath") String filePath,
			@RequestParam(name = "username") String username) {
		return locservice.saveForUser(filePath, username);

	}
	
	@GetMapping("/get-for-user")
	@JsonView(LocationDetailedView.class)
	public List<Location> getForInterval(@RequestParam(name = "username") String username,
			@RequestParam(name = "start", required = false) Long startDate,
			@RequestParam(name = "end", required = false) Long endDate) {
		if (endDate == null) {
			if (startDate == null) {
				return locservice.findForUsername(username);
			} else {
				return locservice.findForUsernameWithStartDate(username, startDate);
			}
		} else {
			return locservice.findForUsernameWithInterval(username, startDate, endDate);
		}
	}
	
	@GetMapping("/{locid}/get")
	@JsonView (LocationDetailedView.class)
	 public Location findbyid(@PathVariable("locid")int locid) {
		 Location loc = new Location();
		 loc = locservice.findbyid(locid);
		 return loc;
	 }
	@PostMapping("/save")
	@JsonView (LocationDetailedView.class)
	public Location saveLocation(@RequestBody Location loc) {
		return locservice.saveLocation(loc);
	}
	@DeleteMapping("/{locid}/delete")
	public void deleteLocation(@PathVariable("locid")Location loc) {
		locservice.deleteLocation(loc);
	}
	@DeleteMapping("/deletedata")
	public void deleteAll() {
		locservice.deleteAll();
	}
	

}
