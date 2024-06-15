package com.project.controller;

import java.util.List;
import java.util.Optional;

import org.jasypt.util.text.BasicTextEncryptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.model.Admin;
import com.project.model.Book;
import com.project.model.User;
import com.project.service.AdminService;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/booklib-project")
public class AdminController {

	@Autowired
	private AdminService adminService;
	
	private BasicTextEncryptor passwordEncryptor;
	
	@PostMapping("/adminregister")
	public boolean registerAdminService(@RequestBody Admin admin) {
		 return adminService.registerAdmin(admin);
	 }
	
	@PostMapping("/adminlogin")
	public Admin loginAdmin(@RequestBody Admin admin) throws Exception {
		String tempEmailId = admin.getAdminEmail();
		String tempPass = admin.getAdminPass();
		
		Admin adminObj=null;
		if(tempEmailId !=null && tempPass !=null) {
			adminObj=adminService.fetchAdminByEmailIdAndPassword(tempEmailId, tempPass);
		}
		if(adminObj==null) {
			throw new Exception("bad credentials");
		}
		
		return adminObj;
	}
	
	
	@PostMapping(value="/addBook",headers = "Accept=application/json")
	public Book addBook(@RequestBody Book book){
		return adminService.addBook(book);
	}
	
	@GetMapping(value="/showBook",headers = "Accept=application/json")
	public List<Book> showBook(){
		return adminService.showBooks();
	}
	
	@DeleteMapping(value="deleteBook/{id}",headers = "Accept=application/json")
	public String deleteBook(@PathVariable Integer id){
		return adminService.deleteBook(id);
	}
	
	@GetMapping(value="/showUser",headers = "Accept=application/json")
	public List<User> showUser(){
		return adminService.showUsers();
	}
	
	
	@GetMapping(value="getBookById/{id}",headers = "Accept=application/json")
	public Optional<Book> getBook(@PathVariable Integer id){
		return adminService.getBook(id);
	}
	
	@PutMapping(value="/editBook",headers = "Accept=application/json")
	public Book editBooks(@RequestBody Book book){
		return adminService.editBook(book);
	}
	
	@DeleteMapping(value="deleteUser/{id}",headers = "Accept=application/json")
	public String deleteUsers(@PathVariable Integer id){
		return adminService.deleteUser(id);
	}
	
	
	
}
