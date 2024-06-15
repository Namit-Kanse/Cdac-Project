package com.project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="book") 
public class Book {
	
	private Integer book_id;
	private String book_name;
	private String author_name;
	private String book_price;
	private String book_image;
	private String book_pdf;
	private String book_description;
	private String rent_price;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	public Integer getBook_id() {
		return book_id;
	}
	public void setBook_id(Integer book_id) {
		this.book_id = book_id;
	}
	
	@Column
	public String getBook_name() {
		return book_name;
	}
	public void setBook_name(String book_name) {
		this.book_name = book_name;
	}
	
	@Column
	public String getAuthor_name() {
		return author_name;
	}
	public void setAuthor_name(String author_name) {
		this.author_name = author_name;
	}
	
	@Column
	public String getBook_price() {
		return book_price;
	}
	public void setBook_price(String book_price) {
		this.book_price = book_price;
	}
	
	@Column
	public String getBook_image() {
		return book_image;
	}
	public void setBook_image(String book_image) {
		this.book_image = book_image;
	}
	
	@Column
	public String getBook_pdf() {
		return book_pdf;
	}
	public void setBook_pdf(String book_pdf) {
		this.book_pdf = book_pdf;
	}
	
	@Column
	public String getBook_description() {
		return book_description;
	}
	public void setBook_description(String book_description) {
		this.book_description = book_description;
	}
	
	@Column
	public String getRent_price() {
		return rent_price;
	}
	public void setRent_price(String rent_price) {
		this.rent_price = rent_price;
	}
	
	
	
	
	
	
}
