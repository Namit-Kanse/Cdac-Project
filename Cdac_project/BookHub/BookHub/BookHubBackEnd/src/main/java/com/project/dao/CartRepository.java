package com.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.model.Cart;

public interface CartRepository extends JpaRepository<Cart, Integer> {

}
