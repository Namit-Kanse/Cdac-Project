package com.project.model;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;


@Entity(name="cart") 
public class Cart {
	
	private Integer cart_id;
	private Integer book_id;
	private int userId;
	private String book_type;
	private String no_of_days;
	private String amount;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	public Integer getCart_id() {
		return cart_id;
	}
	public void setCart_id(Integer cart_id) {
		this.cart_id = cart_id;
	}
	
	//@OneToOne(targetEntity = Book.class,cascade = CascadeType.ALL)
	@JoinColumn(name="book_id",referencedColumnName="book_id")
	public Integer getBook_id() {
		return book_id;
	}
	public void setBook_id(Integer book_id) {
		this.book_id = book_id;
	}
	
	//@OneToOne(targetEntity = User.class,cascade = CascadeType.ALL)
	@JoinColumn(name="userId",referencedColumnName="userId")
	public int getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	
	
	@Column
	public String getBook_type() {
		return book_type;
	}
	
	public void setBook_type(String book_type) {
		this.book_type = book_type;
	}
	
	@Column
	public String getNo_of_days() {
		return no_of_days;
	}
	public void setNo_of_days(String no_of_days) {
		this.no_of_days = no_of_days;
	}
	
	@Column
	public String getAmount() {
		return amount;
	}
	public void setAmount(String amount) {
		this.amount = amount;
	}
	
	
	

}
