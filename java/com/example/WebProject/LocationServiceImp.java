package com.example.WebProject;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;




@Service
public class LocationServiceImp implements LocationService{
    @Autowired 
	LocationRepository repository;
    
    @Autowired
    UserRepository userRepo;
	
	@Override
	public Location findbyid(int locid) {
		Location loc = new Location();
		loc = repository.findById(locid).orElse(null);
		return loc;
	}
	@Override
	public Location saveLocation(Location loc) {
		return repository.save(loc);
	}

	@Override
	public void deleteLocation(Location loc) {
		repository.delete(loc);
	}

	@Override
	public void deleteAll() {
		repository.deleteAll(); 
	}
	
	@Override
	public List<Location> findForUsername(String username) {
		User user = userRepo.findByUsername(username);
		List<Location> locations = repository.findByUserUsrid(user.getId());
		return locations;
	}

	@Override
	public List<Location> findForUsernameWithStartDate(String username, Long startDate) {
		User user = userRepo.findByUsername(username);
		return repository.findForUsernameWithStartDate(user.getId(), startDate);
	}

	@Override
	public List<Location> findForUsernameWithInterval(String username, Long startDate, Long endDate) {
		User user = userRepo.findByUsername(username);
		return repository.findForUsernameWithInterval(user.getId(), startDate, endDate);
	}
	@Override
	public List<Location> saveForUser(String filePath, String username) {
		User user = userRepo.findByUsername(username);
		List<Location> locations = JsonParser.parseJson(filePath, user);
		return (List<Location>) repository.saveAll(locations);
	}


}
