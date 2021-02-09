package com.app.cartitems.vo;



import java.util.List;

import com.app.cartitems.model.Cart;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseTemplateVO {
	
	private Cart cart;
	private Product product;

}
