package com.app.orders.service;

import java.util.List;

import com.app.orders.VO.ResponseTemplateVO;
import com.app.orders.model.Order;


public interface OrderService {

	void addOrder(Order order);

	Order getOrderById(long id);

	void deleteOrder(long id);

	List<Order> getOrders();
	 ResponseTemplateVO getdata(Long id);

}
