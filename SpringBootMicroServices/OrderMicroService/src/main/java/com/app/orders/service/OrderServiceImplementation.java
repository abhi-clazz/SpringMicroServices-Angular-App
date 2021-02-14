package com.app.orders.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.app.orders.VO.Product;
import com.app.orders.VO.ResponseTemplateVO;
import com.app.orders.model.Order;
import com.app.orders.repository.OrderRepository;
@Service
public class OrderServiceImplementation implements OrderService {

	@Autowired
	OrderRepository orderRepository;
	
@Autowired
private RestTemplate restTemplate;
	public List<Order> getOrders()
	{
	return orderRepository.findAll();	
	}

	public void addOrder(Order order)
	{
		orderRepository.save(order);}

	public  void deleteOrder(long id)
	{
		orderRepository.deleteById(id);
		
	
	}

public ResponseTemplateVO getdata(Long id)
{
	ResponseTemplateVO vo=new ResponseTemplateVO();
	Order order=orderRepository.findByOrderId(id);
	Product product=restTemplate.getForObject("http://Product-service/Products/"+order.getProductId(),Product.class);

			vo.setOrder(order);
	vo.setProduct(product);
	return vo;
}
	public Order  getOrderById(long id)
	{
		Order order=null;
		
		Optional<Order> Order= orderRepository.findById(id);
		
		if(Order.isPresent())
		{
			order=Order.get();
		}
		
		return order;
		
	}

	public List<Order> getOrderByUserId(int id) {
		return orderRepository.findAllByUserId(id);
	}
}
