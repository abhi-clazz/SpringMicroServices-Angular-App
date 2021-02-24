package com.app.orders.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.app.orders.VO.ResponseTemplateVO;
import com.app.orders.model.Order;


public interface OrderService {

	void addOrder(Order order);

	Order getOrderById(long id);

	void deleteOrder(long id);

	List<Order> getOrders();
	 void bulkorder(Order order);

	List<Order> getOrderByUserId(int id);

}
