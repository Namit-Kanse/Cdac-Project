package com.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.model.Admin;
import com.project.model.User;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer>{

	public Admin findByAdminEmailAndAdminPass(String adminEmail,String adminPass);
}
