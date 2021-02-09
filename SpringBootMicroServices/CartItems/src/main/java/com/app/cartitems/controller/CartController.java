package com.app.cartitems.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.cartitems.model.Cart;
import com.app.cartitems.service.CartService;
import com.app.cartitems.vo.Product;
import com.app.cartitems.vo.ResponseTemplateVO;


	@RestController
	public class CartController {
		@Autowired
		CartService cartService;
		@RequestMapping(value="/Carts", method = RequestMethod.GET)
		public List<Cart> getCarts(){
			System.out.println("CartS_DATA");
			return cartService.CartItems();
		}
		
//		@RequestMapping(value="/Cartss/{id}", method = RequestMethod.GET)
//		public ResponseTemplateVO getCartdata(@PathVariable Long id)
//		{
//			return CartService.getdata(id);
//					
//		}
		
		@RequestMapping(value="/Carts", method = RequestMethod.POST)
		public String addCarts(@RequestBody Cart cart)
		{
			System.out.println("ADDING_Cart");
			cartService.addToCart(cart);
			return "Success";
		}
		
		@RequestMapping(value="/Cart/{id}", method = RequestMethod.DELETE)
		public void deleteCart(@PathVariable Long id)
		{
			 cartService.deleteFromCart(id);
		}
		@RequestMapping(value="/Cart/{id}", method = RequestMethod.PATCH)

		public void updateCartItemById(@PathVariable Long id,@RequestBody Cart quantity) {
			System.out.println(quantity.getQuantity());
			
			cartService.updateCartItemById(id,quantity);
			
		}
		@RequestMapping(value="/Usercart/{id}", method = RequestMethod.GET)
		public List<Product> getOrderdata(@PathVariable int id)
		{
			return cartService.getdata(id);
					
		}
		
		@RequestMapping(value="/Cart/{id}", method = RequestMethod.GET)
		public Cart getCart(@PathVariable Long id)
		{
			return cartService.getCartItemById(id);
					
		}
		@RequestMapping(value="/UserCart/{id}", method = RequestMethod.GET)
		public List<Cart> getCartByUser(@PathVariable int id)
		{
			
			return cartService.getCartItemByUserId(id);
					
		}
}
