package com.app.orders.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.orders.VO.ResponseTemplateVO;
import com.app.orders.model.Order;
import com.app.orders.service.OrderService;


@RestController
public class OrderController {
	@Autowired
	OrderService orderService;
	@RequestMapping(value="/Orders", method = RequestMethod.GET)
	public List<Order> getOrders(){
		System.out.println("ORDERS_DATA");
		return orderService.getOrders();
	}
	
	@RequestMapping(value="/Carts", method = RequestMethod.POST)
	public void getOrderdata(@RequestBody Order order)
	{System.out.println();
		orderService.bulkorder(order);
				
	}
	
	@RequestMapping(value="/Orders", method = RequestMethod.POST)
	public Order addOrders(@RequestBody Order Order)
	{
		System.out.println("ADDING_ORDER");
		orderService.addOrder(Order);
		return Order;
	}
	
	@RequestMapping(value="/Order/{id}", method = RequestMethod.DELETE)
	public void deleteOrder(@PathVariable int id)
	{
		 orderService.deleteOrder(id);
	}
	
	
	@RequestMapping(value="/Order/{id}", method = RequestMethod.GET)
	public Order getOrder(@PathVariable int id)
	{
		return orderService.getOrderById(id);
				
	}
	@RequestMapping(value="/UserOrders/{id}", method = RequestMethod.GET)
	public List<Order> getOrderByUserId(@PathVariable int id)
	{
		return orderService.getOrderByUserId(id);
				
	}

}
