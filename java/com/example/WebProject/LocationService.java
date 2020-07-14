package com.example.WebProject;

import java.util.List;


public interface LocationService {
	public Location findbyid(int locid);
	public Location saveLocation (Location loc);
	public void deleteLocation (Location loc);
	public void deleteAll ();
	public List<Location> saveForUser(String filePath, String username);
	public List<Location> findForUsername(String username);
	public List<Location> findForUsernameWithStartDate(String username, Long startDate);
	public List<Location> findForUsernameWithInterval(String username, Long startDate, Long endDate);

}
