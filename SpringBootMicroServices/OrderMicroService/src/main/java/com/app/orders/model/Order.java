package com.app.orders.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

@Document
public class Order {
	@Transient
    public static final String SEQUENCE_NAME = "users_sequence";
	
	
	@Id

	private long orderId;
	private int quantity;
	private String saddress;
	private String baddress;
	private String name;
	private String city;
	private int pin;
	private int userId;
	private int productId;



}
