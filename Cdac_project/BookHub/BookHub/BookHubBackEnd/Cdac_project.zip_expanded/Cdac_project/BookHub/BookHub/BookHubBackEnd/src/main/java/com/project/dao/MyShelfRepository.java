package com.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.model.MyShelf;

public interface MyShelfRepository extends JpaRepository<MyShelf, Integer>{

}
