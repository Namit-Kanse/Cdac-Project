package com.project.controller;


import java.util.List;

import org.jasypt.util.text.BasicTextEncryptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.dao.UserRepository;
import com.project.model.Book;
import com.project.model.Cart;
import com.project.model.CartDetail;
import com.project.model.MyShelf;
import com.project.model.MyShelfDetail;
import com.project.model.OrderDetails;
import com.project.model.Payment;
import com.project.model.User;
import com.project.model.getUserOrderDetails;

import com.project.service.UserService;


@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/booklib-project")
public class UserController {

	@Autowired
	private UserService userService;
	
//	@Autowired
	
	
	
//	private JavaMailSender javaMailSender;
	
	@Autowired
	private UserRepository userRepository;

	private BasicTextEncryptor passwordEncryptor;

	
	@PostMapping("/userregister")
	public boolean registerUserService(@RequestBody User user) {
		 return userService.registerUser(user);
	 }
	
	@PostMapping("/userForget")
	public User updateUsers(@RequestBody User user) {
		 return userService.updateUser(user);
	 }
	
	@PostMapping("/userlogin")
	public User loginUser(@RequestBody User user) throws Exception {
		String tempEmailId = user.getUserEmail();
		String tempPass = user.getUserPass();
		
		User userObj=null;
		if(tempEmailId !=null && tempPass !=null) {
			userObj=userService.fetchUserByEmailIdAndPassword(tempEmailId, tempPass);
		}
		if(userObj==null) {
			throw new Exception("bad credentials");
		}
		
		return userObj;
	}
	
	
	@GetMapping(value="/userShowBook",headers = "Accept=application/json")
	public List<Book> showBook(){
		return userService.userShowBooks();
	}
	
	@GetMapping(value="getUserBookById/{id}",headers = "Accept=application/json")
	public Book getBook(@PathVariable Integer id){
		return userService.getBook(id);
	}
	
	@PostMapping(value="/rentBook",headers = "Accept=application/json")
	public Cart rentBooks(@RequestBody Cart vCart){
		return userService.rentBook(vCart);
	}
	
	@GetMapping(value="showCart/{id}",headers = "Accept=application/json")
	public List<CartDetail> showCarts(@PathVariable Integer id){
		return userService.showCart(id);
	}
	
	@DeleteMapping(value="deleteBookFromCart/{id}",headers = "Accept=application/json")
	public String deleteBookFromCarts(@PathVariable Integer id){
		return userService.deleteBookFromCart(id);
	}
	
	
	@GetMapping(value="getCartDetailById/{id}",headers = "Accept=application/json")
	public Cart getCart(@PathVariable Integer id){
		return userService.getCartDetail(id);
	}
	
	@PostMapping("/verifyPayment")
	public String verifyPaymnts(@RequestBody Payment payment) throws Exception {
		String tempCardNumber = payment.getCardNumber();
		String tempExpMonth = payment.getExpMonth();
		String tempExpYear = payment.getExpYear();
		String tempCvv = payment.getCvv();
		
		Payment paymentObj=null;
		String msg="";
		if(tempCardNumber  !=null && tempExpMonth !=null && tempExpYear !=null && tempCvv !=null ) {
			paymentObj=userService.fetchPayment(tempCardNumber,tempExpMonth,tempExpYear,tempCvv);
		}
		if(paymentObj==null) {
			msg="unsuccess";
		}
		if(paymentObj != null) {
			msg="success";
		}
		
		return msg;
	}
	
//	@PostMapping("/sendKeyByEmail")
//	public User sendEmail(@RequestBody String userEmail) throws Exception {
//		
//		passwordEncryptor = new BasicTextEncryptor();
//		passwordEncryptor.setPassword("secret-key");
//		
//		SimpleMailMessage msg = new SimpleMailMessage();
//			
//			User user=userRepository.findByUserEmail(userEmail);
//			if(user==null) {
//				throw new Exception("Invalid Emailid");
//			}
//			//System.out.println("After find"+user);
//			String mail = user.getUserEmail();
//			msg.setTo(mail);
//			msg.setSubject("BookLib Bookstore Password");
//			msg.setText("Hello, "+user.getUserEmail()+" Your Password for login = "+passwordEncryptor.decrypt(user.getUserPass())+"\n \n Your Regards - BookLib");
//			javaMailSender.send(msg);
//			
//			return user;
//	}

	
	
	@PostMapping("/rentOrderDetails")
	public boolean insertRentOrderDetails(@RequestBody OrderDetails orderdetails) {
		 return userService.rentOrderDetails(orderdetails);
	 }
	
	@PostMapping("/myShelf")
	public boolean insertIntoMyShelf(@RequestBody MyShelf myshelf) {
		 return userService.insertMyShelf(myshelf);
	 }
	
	@GetMapping(value="/userMyShelf/{id}",headers = "Accept=application/json")
	public List<MyShelfDetail> showShelf(@PathVariable Integer id){
		return userService.userMyShelf(id);
	}
	
	
	@DeleteMapping(value="deleteBookFromShelf/{id}",headers = "Accept=application/json")
	public String deleteBookFromShelfs(@PathVariable Integer id){
		return userService.deleteBookFromMyShelf(id);
	}
	
	@GetMapping(value="/userGetOrder/{id}",headers = "Accept=application/json")
	public List<getUserOrderDetails> showOrders(@PathVariable Integer id){
		return userService.userGetOrder(id);
	}
	
	
}
