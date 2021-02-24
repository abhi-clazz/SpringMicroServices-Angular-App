package com.app.product.model;
import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.Data;

@Entity

@Data
public class Product {
	
	@Id
	private int productId;
	private String productName;
	private int quantity;
	private double price;
	private String productImageFile;
	private String brand;
	private String category;
	private String description;
	private String seller;
	private String model;
	private String feature;
	
}
