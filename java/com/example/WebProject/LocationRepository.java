package com.example.WebProject;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface LocationRepository extends JpaRepository<Location,Integer> {
//JpaRepository takes <table,identifier> type
	public List<Location> findByUserUsrid(int userId);
	
	@Query("select l from Location l where l.user.id = ?1 and l.timestamp>= ?2")
	public List<Location> findForUsernameWithStartDate(int userId, Long startDate);
	
	@Query("select l from Location l where l.user.id = ?1 and l.timestamp>= ?2 and l.timestamp <= ?3 ")
	public List<Location> findForUsernameWithInterval(int userId, Long startDate,Long endDate );
	

}
