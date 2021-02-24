package com.app.cartitems.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.app.cartitems.model.Cart;
import com.app.cartitems.repository.CartRepository;
import com.app.cartitems.vo.Product;
import com.app.cartitems.vo.ResponseTemplateVO;


@Service
public class CartService {
	@Autowired
	CartRepository cartRepository;
	@Autowired
	RestTemplate restTemplate;
	public List<Cart> CartItems() {
		
		return cartRepository.findAll();
	}

	public void addToCart(Cart cart) {
		cartRepository.save(cart);	
	}

	public void deleteFromCart(Long id) {
		cartRepository.deleteById(id);		
	}

	public Cart getCartItemById(Long id) {
	Cart cart=null;
		
		Optional<Cart> c= cartRepository.findById(id);
		
		if(c.isPresent())
		{
			cart=c.get();
		}
		
		return cart;
		
	}	public void updateCartItemById(Long id,Cart q) {
	
		
		Cart cart= cartRepository.findById(id).get();
		cart.setQuantity(q.getQuantity());
		 cartRepository.save(cart);
		
		
	}

	public List<Cart> getCartItemByUserId(int id) {
		// TODO Auto-generated method stub
		return cartRepository.findAllByUserId(id);
	}
	public List<Product> getdata(int id)
	{
		List<Cart> c=cartRepository.findAllByUserId(id);
		List<ResponseTemplateVO> vo;
//		Order order=orderRepository.findByOrderId(id);
		List<Product> product1=null;
		
		for(int k=0;k<c.size();k++)
		{
			Product product=restTemplate.getForObject("http://Product-service/Products/"+c.get(k).getProductId(),Product.class);
		System.out.println(product);
		//product1.add(product);
		
		}
		//.out.println(product);

		return product1;
	}

	public void emptyCart(int id) {
		// TODO Auto-generated method stub
		 cartRepository.deleteByUserId(id);
	}

}
