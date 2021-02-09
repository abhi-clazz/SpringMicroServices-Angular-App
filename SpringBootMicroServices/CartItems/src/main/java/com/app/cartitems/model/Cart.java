package com.app.cartitems.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long cartId;
	private int quantity;
	private int productId;
	private int userId;
	
	private String productName;
	private double price;
	private String productImageFile;
	private String brand;
}
