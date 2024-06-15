 package com.project.service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import com.project.dao.BookRepository;
import com.project.dao.CartRepository;
import com.project.dao.MyShelfRepository;
import com.project.dao.OrderRepository;
import com.project.dao.PaymentRepository;
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

import org.jasypt.util.text.BasicTextEncryptor;



@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	boolean b=false;
	boolean b1=false;
	boolean b2=false;
	
	@Autowired
	private BookRepository bookRepository;
	
	@Autowired
	private CartRepository cartRepository;
	
	@Autowired
	private PaymentRepository paymentRepository;
	
	@Autowired
	private OrderRepository orderRepository;
	
	@PersistenceContext
	private EntityManager entityManager;
	
	@Autowired
	JdbcTemplate template;
	
	
	
	
	private BasicTextEncryptor passwordEncryptor;

	
	@Autowired
	private MyShelfRepository myShelfRepository;
	
	 class CartMapper implements RowMapper<CartDetail> 
		{
		
			@Override
			public CartDetail mapRow(ResultSet rs, int rowNum) throws SQLException {	
				CartDetail vCartDetail=new CartDetail();
				vCartDetail.setCart_id(rs.getInt("cart_id"));
				vCartDetail.setBook_id(rs.getInt("book_id"));
				vCartDetail.setBook_name(rs.getString("book_name"));
				vCartDetail.setBook_type(rs.getString("book_type"));
				vCartDetail.setAmount(rs.getString("amount"));
				vCartDetail.setBook_image(rs.getString("book_image"));
				return vCartDetail;
			}
			
		}
	 
	 public List<CartDetail> showCart(Integer id){
			return template.query("SELECT c.cart_id,c.amount,b.book_name,c.book_type,b.book_image,b.book_id\r\n"
					+ " FROM cart c inner Join book b on c.book_id=b.book_id  where c.user_id=?;",new Object[] { id },new CartMapper());
		}
	 
	 
	 public User updateUser(User user) {
			User vExistingUser=userRepository.findById(user.getUserId()).orElse(null);
			vExistingUser.setUserFirstName(user.getUserFirstName());
			vExistingUser.setUserLastName(user.getUserLastName());
			vExistingUser.setUserEmail(user.getUserEmail());
			vExistingUser.setUserContact(user.getUserContact());
			vExistingUser.setUserAddress(user.getUserAddress());
			vExistingUser.setUserPass(user.getUserPass());
	
			return userRepository.save(vExistingUser);
			
		}	
	
	 
	 public boolean registerUser(User user) {
			if(!isCustomerPresent(user.getUserEmail())) {
				passwordEncryptor = new BasicTextEncryptor();
				passwordEncryptor.setPassword("secret-key");
				user.setUserPass(passwordEncryptor.encrypt(user.getUserPass()));
				userRepository.save(user);
			//b=true;
			return true;
		
			}else {
				return false;
			}
		}

//	public boolean registerUser(User user) {
//		if(!isCustomerPresent(user.getUserEmail())) {
//		userRepository.save(user);
//		//b=true;
//		return true;
//	
//		}else {
//			return false;
//		}
//	}
	
	public boolean isCustomerPresent(String email) {
		return (Long)
				entityManager
				.createQuery("select count(c.userId) from User c where c.userEmail = :email")
				.setParameter("email", email)
				.getSingleResult() == 1 ? true : false;
	}
	
	
//	public User fetchUserByEmailIdAndPassword(String userEmail,String userPass ) {
//		
//		return userRepository.findByUserEmailAndUserPass(userEmail, userPass);
//	}
	
	
	public User fetchUserByEmailIdAndPassword(String userEmail,String userPass ) {
		User user = userRepository.findByUserEmail(userEmail);
		passwordEncryptor = new BasicTextEncryptor();
		passwordEncryptor.setPassword("secret-key");
		String password= passwordEncryptor.decrypt(user.getUserPass());
		if(!password.equals(userPass) ) 
			user =null;
		
		return user;
	}

	
	
	public List<Book> userShowBooks(){
		return bookRepository.findAll();
	}
	
	public Book getBook(Integer id) {
		return bookRepository.findById(id).orElse(null);
	}
	
	public Cart rentBook(Cart cart) {
		return cartRepository.save(cart);
	}
	
	public String deleteBookFromCart(Integer id) {
		try {
			cartRepository.deleteById(id);
			return "success";
		}catch(Exception e) {
			return "fail";
		}
	}
	
	public Cart getCartDetail(Integer id) {
		return cartRepository.findById(id).orElse(null);
	}
	
	public Payment fetchPayment(String cardNumber,String expMonth,String expYear,String cvv) {
		return paymentRepository.findByCardNumberAndExpMonthAndExpYearAndCvv(cardNumber, expMonth, expYear, cvv);
	}
	 
	
	public boolean rentOrderDetails(OrderDetails orderdetails) {
		try{
			orderRepository.save(orderdetails);
			b=true;
			return b;
		}catch(Exception e){
			return b;
		}
	}
	
	public boolean insertMyShelf(MyShelf myShelf) {
		try{
			myShelfRepository.save(myShelf);
			b2=true;
			return b2;
		}catch(Exception e){
			return b2;
		}
	
		}
	

		
	 class MyShelfMapper implements RowMapper<MyShelfDetail> 
	{
	
		@Override
		public MyShelfDetail mapRow(ResultSet rs, int rowNum) throws SQLException {	
			
			MyShelfDetail myShelfDetail=new MyShelfDetail();
			myShelfDetail.setBook_id(rs.getInt("book_id"));
			myShelfDetail.setShelf_id(rs.getInt("shelf_id"));
			myShelfDetail.setBook_image(rs.getString("book_image"));
			myShelfDetail.setBook_name(rs.getString("book_name"));
			myShelfDetail.setBook_pdf(rs.getString("book_pdf"));
			
			return myShelfDetail;
		}
		
	}
 
 public List<MyShelfDetail> userMyShelf(Integer id){
		return template.query("SELECT c.shelf_id,b.book_name,b.book_image,b.book_pdf,b.book_id\r\n"
				+ " FROM myshelf c inner Join book b on c.book_id=b.book_id  where c.user_id=?;",new Object[] { id },new MyShelfMapper());
	}
 
 
 
	public String deleteBookFromMyShelf(Integer id) {
		try {
			myShelfRepository.deleteById(id);
			return "success";
		}catch(Exception e) {
			return "fail";
		}
	}
	
	
	 class MyOrdersMapper implements RowMapper<getUserOrderDetails> 
		{
		
			@Override
			public getUserOrderDetails mapRow(ResultSet rs, int rowNum) throws SQLException {	
				
			getUserOrderDetails getOrderDetails=new getUserOrderDetails();
			getOrderDetails.setOrder_id(rs.getInt("order_id"));
				getOrderDetails.setBook_id(rs.getInt("book_id"));
				
				getOrderDetails.setUserId(rs.getInt("user_id"));
				getOrderDetails.setBook_name(rs.getString("book_name"));
				getOrderDetails.setUserFirstName(rs.getString("user_first_name"));
				getOrderDetails.setBook_type_order(rs.getString("book_type_order"));
				getOrderDetails.setIssue_date(rs.getString("issue_date"));
				getOrderDetails.setDue_date(rs.getString("due_date"));
				getOrderDetails.setOrder_amount(rs.getString("order_amount"));
				
				
				return getOrderDetails;
			}
			
		}
	
	
	 public List<getUserOrderDetails> userGetOrder(Integer id){
		return template.query("SELECT o.order_id,o.book_id,o.user_id,u.user_first_name,b.book_name,o.book_type_order,o.issue_date,o.due_date,o.order_amount\r\n"
				+ "FROM   orderdetails o\r\n"
				+ "       INNER JOIN book b ON o.book_id=b.book_id\r\n"
				+ "       INNER JOIN user u ON o.user_id=u.user_id\r\n"
				+ "WHERE  o.user_id=?;",new Object[] { id },new MyOrdersMapper());
	}
 
}


