package com.project.model;

public class MyShelfDetail {

	
	private Integer shelf_id;
	private Integer book_id;
	private String book_image;
	private String book_name;
	private String book_pdf;
	public Integer getShelf_id() {
		return shelf_id;
	}
	public void setShelf_id(Integer shelf_id) {
		this.shelf_id = shelf_id;
	}
	public Integer getBook_id() {
		return book_id;
	}
	public void setBook_id(Integer book_id) {
		this.book_id = book_id;
	}
	public String getBook_image() {
		return book_image;
	}
	public void setBook_image(String book_image) {
		this.book_image = book_image;
	}
	public String getBook_name() {
		return book_name;
	}
	public void setBook_name(String book_name) {
		this.book_name = book_name;
	}
	public String getBook_pdf() {
		return book_pdf;
	}
	public void setBook_pdf(String book_pdf) {
		this.book_pdf = book_pdf;
	}
	public MyShelfDetail() {
		super();
		// TODO Auto-generated constructor stub
	}
	public MyShelfDetail(Integer shelf_id, Integer book_id, String book_image, String book_name, String book_pdf) {
		super();
		this.shelf_id = shelf_id;
		this.book_id = book_id;
		this.book_image = book_image;
		this.book_name = book_name;
		this.book_pdf = book_pdf;
	}

	
	
}
