package com.app.orders.service;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.app.orders.VO.Cart;
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

public void bulkorder(Order order)
{
	ResponseTemplateVO vo=new ResponseTemplateVO();
	System.out.println(order.getUserId());
	ResponseEntity<Cart[]> list=restTemplate.getForEntity("http://CartService/UserCart/"+order.getUserId(),Cart[].class);
	//Cart c=new Cart();
	ResponseEntity<Order> e;

	List<Cart> c=Arrays.asList(list.getBody());
	for(int i=0;i<c.size();i++)
{
		Order nOrder=new Order();
		System.out.println(order);
		System.out.println(c.size());
	System.out.println(c.get(i).getProductId());
	nOrder.setProductId(c.get(i).getProductId());
nOrder.setUserId(order.getUserId());
	nOrder.setName(order.getName());
	orderRepository.save(nOrder);
System.out.println(nOrder.getOrderId());
}
	restTemplate.delete("http://CartService/UserCart/"+order.getUserId());
 

//	for(int i=0;i<cartList.size();i++)
//	{
//		System.out.println(cartList.indexOf("productId"));
//	}
//for(int i=0;i<cartList.size();i++)
//{
////{order.setUserId(cartList.get(i).getUserId());
////order.setProductId(cartList.get(i).getProductId());
////order.setSaddress("ok");
//System.out.println(cartList);
//System.out.println(cartList.size());
//
////orderRepository.save(order);
//}
//cartList.values().stream().forEach(System.out::println);
//	System.out.println("okkk");
//for(Cart key:cartList.values())
//{
//	System.out.println(key);
//}
			
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
