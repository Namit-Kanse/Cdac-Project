package com.project.service;

import java.util.List;
import java.util.Optional;

import org.jasypt.util.text.BasicTextEncryptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.dao.AdminRepository;
import com.project.dao.BookRepository;
import com.project.dao.UserRepository;
import com.project.model.Admin;
import com.project.model.Book;
import com.project.model.User;


@Service
public class AdminService {

	@Autowired
	private AdminRepository adminRepository;
	
	@Autowired
	private BookRepository bookRepository;
	
	@Autowired
	private UserRepository userRepository;
	

	
	
	boolean b=false;
	
	public boolean registerAdmin(Admin admin) {
		adminRepository.save(admin);
		b=true;
		return b;
	}
	

	
		public Admin fetchAdminByEmailIdAndPassword(String adminEmail,String adminPass ) {
		
			return adminRepository.findByAdminEmailAndAdminPass(adminEmail, adminPass);
	}


		public Book addBook(Book book) {
			Book vReturnedBook=bookRepository.save(book);
			return vReturnedBook;
		}
		
		public List<Book> showBooks(){
			return bookRepository.findAll();
		}
		
		public String deleteBook(Integer id) {
			try {
				bookRepository.deleteById(id);
				return "success";
			}catch(Exception e) {
				return "fail";
			}
		}
		
		public List<User> showUsers(){
			return userRepository.findAll();
		}
		
		public Optional<Book> getBook(Integer id) {
				return bookRepository.findById(id);
			}
	
		
		public Book editBook(Book book) {
			Book vExistingBook=bookRepository.findById(book.getBook_id()).orElse(null);
			vExistingBook.setAuthor_name(book.getAuthor_name());
			vExistingBook.setBook_name(book.getBook_name());
			vExistingBook.setBook_description(book.getBook_description());
			vExistingBook.setBook_price(book.getBook_price());
			vExistingBook.setRent_price(book.getRent_price());
			vExistingBook.setBook_image(book.getBook_image());
			vExistingBook.setBook_pdf(book.getBook_pdf());
			return bookRepository.save(vExistingBook);
			
		}

		public String deleteUser(Integer id) {
			try {
				userRepository.deleteById(id);
				return "success";
			}catch(Exception e) {
				return "fail";
			}
			
		}	
		
		
		
		
		
}
