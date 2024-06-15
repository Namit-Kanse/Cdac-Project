package com.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;


import com.project.model.Payment;



public interface PaymentRepository extends JpaRepository<Payment, Integer>{

	
	public Payment findByCardNumberAndExpMonthAndExpYearAndCvv(String cardNumber,String expMonth,String expYear,String cvv);
}
