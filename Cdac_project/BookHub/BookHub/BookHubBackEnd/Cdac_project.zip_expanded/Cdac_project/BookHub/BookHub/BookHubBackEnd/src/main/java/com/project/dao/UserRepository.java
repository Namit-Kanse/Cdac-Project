package com.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

	
	//public User findByUserEmailAndUserPass(String userEmail,String userPass);
	public User findByUserEmail(String userEmail);

	
}
