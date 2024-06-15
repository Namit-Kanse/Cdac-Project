package com.project.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;


@Entity(name="myshelf")
public class MyShelf {


	private Integer shelf_id;
	private Integer book_id;
	private int userId;

	
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		@Column
		public Integer getShelf_id() {
			return shelf_id;
		}

		public void setShelf_id(Integer shelf_id) {
			this.shelf_id = shelf_id;
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

		public MyShelf() {
			super();
			// TODO Auto-generated constructor stub
		}

		public MyShelf(Integer shelf_id, Integer book_id, int userId) {
			super();
			this.shelf_id = shelf_id;
			this.book_id = book_id;
			this.userId = userId;
		}

		
		
	
	
}
