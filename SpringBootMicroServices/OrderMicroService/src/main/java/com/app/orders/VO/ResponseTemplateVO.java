package com.app.orders.VO;

import com.app.orders.model.Order;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseTemplateVO {
	
	private Order order;
	private Cart cart;

}
