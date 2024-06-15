package com.project.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity(name="orderdetails")
public class OrderDetails {

	
	private Integer order_id;
	private Integer book_id;
	private int userId;
	private String issue_date;
	private String due_date;
	private String book_type_order;
	private String order_amount;
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	public Integer getOrder_id() {
		return order_id;
	}
	
	public void setOrder_id(Integer order_id) {
		this.order_id = order_id;
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
	public void setUserId(int userId) {
		this.userId = userId;
	}
	
	
	
	public String getBook_type_order() {
		return book_type_order;
	}

	public void setBook_type_order(String book_type_order) {
		this.book_type_order = book_type_order;
	}

	public String getIssue_date() {
		return issue_date;
	}
	public void setIssue_date(String issue_date) {
		this.issue_date = issue_date;
	}
	public String getDue_date() {
		return due_date;
	}
	public void setDue_date(String due_date) {
		this.due_date = due_date;
	}
	public String getOrder_amount() {
		return order_amount;
	}
	public void setOrder_amount(String order_amount) {
		this.order_amount = order_amount;
	}

	public OrderDetails(Integer order_id, Integer book_id, int userId, String issue_date, String due_date,
			String book_type_order, String order_amount) {
		super();
		this.order_id = order_id;
		this.book_id = book_id;
		this.userId = userId;
		this.issue_date = issue_date;
		this.due_date = due_date;
		this.book_type_order = book_type_order;
		this.order_amount = order_amount;
	}

	public OrderDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
	
}
