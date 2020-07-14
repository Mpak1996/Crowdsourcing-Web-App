package com.example.WebProject;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.TimeZone;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;



public class JsonParser {
	public static List<Location> parseJson(String filePath, User user) {
		Long patrasLatitudelimits[] = { 38140241L, 38229678L, 38316200L, 38233187L };
		Long patrasLongitudelimits[] = { 21752528L, 21867562L, 21756591L, 21637801L };
		Object obj;
		List<Location> locationsList = new ArrayList<>();
		try {
			obj = new JSONParser().parse(new FileReader(filePath));
			JSONObject jo = (JSONObject) obj;
			JSONArray locationArray = (JSONArray) jo.get("locations");
			Iterator<JSONObject> iterator = locationArray.iterator();
			while (iterator.hasNext()) {
				JSONObject jsonObj = iterator.next();
				Location location = new Location();
				location.setTimestamp(Long.parseLong((String) jsonObj.get("timestampMs")));
				Long test_timestamp = Long.parseLong((String) jsonObj.get("timestampMs"));
				LocalDateTime triggerTime = LocalDateTime.ofInstant(Instant.ofEpochMilli(test_timestamp),TimeZone.getDefault().toZoneId());
				location.setDay(triggerTime.getDayOfWeek().name());
				location.setMonth(triggerTime.getMonth().name());
				location.setYear("" +triggerTime.getYear());
				
				Long lat = (Long) jsonObj.get("latitudeE7");
				Long lon = (Long) jsonObj.get("longitudeE7");
				if(lat/Math.pow(10, 8) > 0) { //max plithos 9 decimal digits
					lat = lat/10;
					lon =  lon/10;
				}
				location.setLatitude(lat);
				location.setLongtitude(lon);
				location.setUser(user);
				JSONArray activityArray = (JSONArray) jsonObj.get("activity");
				if (activityArray != null) {
					Iterator<JSONObject> activityIterator = activityArray.iterator();
					if (activityIterator.hasNext()) {
						JSONArray activityArray1 = (JSONArray) activityIterator.next().get("activity");
						Iterator<JSONObject> activityIterator1 = activityArray1.iterator();
						if (activityIterator1.hasNext()) {
							String type = (String) activityIterator1.next().get("type");
							if (type.equals("UNKNOWN")) {
								if (activityIterator1.hasNext()) {
									location.setActivity((String) activityIterator1.next().get("type"));
								}
							} else {
								location.setActivity(type);
							}
						}

					}
					if (location.getActivity() != null) {
						if (location.getActivity().equals("ON_FOOT")
								|| location.getActivity().equals("ON_BICYCLE")) {
							System.out.println("checking coordinates for: " + location);
							if (validateCoordinate(patrasLatitudelimits, location.getLatitude())
									&& validateCoordinate(patrasLongitudelimits, location.getLongtitude())) {
								locationsList.add(location);
							}
						}
					}
				}
			}
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return locationsList;
	}

	private static boolean validateCoordinate(Long patrasCoordinates[], Long coordinate) { // TODO fix this shit
		Long min = patrasCoordinates[0];
		Long max = patrasCoordinates[0];
		for (int i = 0; i < patrasCoordinates.length; i++) {
			if (patrasCoordinates[i] < min) {
				min = patrasCoordinates[i];
			}
			if (patrasCoordinates[i] > max) {
				max = patrasCoordinates[i];
			}
		}
		if (coordinate < min || coordinate > max) {
			return false;
		}
		return true;

	}
}

