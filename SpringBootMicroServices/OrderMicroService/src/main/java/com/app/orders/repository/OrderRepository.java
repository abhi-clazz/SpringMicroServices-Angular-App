package com.app.orders.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.app.orders.model.Order;

@Repository
public interface OrderRepository extends MongoRepository<Order, Long> {
	Order findByOrderId(Long orderId);	
	List<Order> findAllByUserId(int userId);


}
