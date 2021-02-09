package com.app.orders.VO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {
	private int productId;
	private String productName;
	private int quantity;
	private double price;
	private String productImageFile;
	private String brand;


}
