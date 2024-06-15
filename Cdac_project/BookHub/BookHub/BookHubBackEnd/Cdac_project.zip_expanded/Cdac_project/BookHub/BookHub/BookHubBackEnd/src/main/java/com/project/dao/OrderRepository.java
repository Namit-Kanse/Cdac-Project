package com.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.model.OrderDetails;

public interface OrderRepository extends JpaRepository<OrderDetails, Integer>{

}
