package com.project.model;

public class getUserOrderDetails {

	private Integer order_id;
	private Integer book_id;
	private int userId;
	private String book_name;
	private String book_type_order;
	private String userFirstName;
	private String issue_date;
	private String due_date;
	private String order_amount;
	public Integer getOrder_id() {
		return order_id;
	}
	public void setOrder_id(Integer order_id) {
		this.order_id = order_id;
	}
	public Integer getBook_id() {
		return book_id;
	}
	public void setBook_id(Integer book_id) {
		this.book_id = book_id;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getBook_name() {
		return book_name;
	}
	public void setBook_name(String book_name) {
		this.book_name = book_name;
	}
	public String getBook_type_order() {
		return book_type_order;
	}
	public void setBook_type_order(String book_type_order) {
		this.book_type_order = book_type_order;
	}
	public String getUserFirstName() {
		return userFirstName;
	}
	public void setUserFirstName(String userFirstName) {
		this.userFirstName = userFirstName;
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
	public getUserOrderDetails(Integer order_id, Integer book_id, int userId, String book_name, String book_type_order,
			String userFirstName, String issue_date, String due_date, String order_amount) {
		super();
		this.order_id = order_id;
		this.book_id = book_id;
		this.userId = userId;
		this.book_name = book_name;
		this.book_type_order = book_type_order;
		this.userFirstName = userFirstName;
		this.issue_date = issue_date;
		this.due_date = due_date;
		this.order_amount = order_amount;
	}
	public getUserOrderDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
}
