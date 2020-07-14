package com.example.WebProject;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
	public User findByUsername (String username);
	public void deleteByUsername (String username);

}
