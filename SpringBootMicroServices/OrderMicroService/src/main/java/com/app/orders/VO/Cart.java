package com.app.orders.VO;




public class Cart {
	@Override
	public String toString() {
		return cartId;
	}
	public Cart()
	{
		
	}
	public Cart(String cartId, int quantity, int productId, int userId, String productName, double price,
			String productImageFile, String brand) {
		super();
		this.cartId = cartId;
		this.quantity = quantity;
		this.productId = productId;
		this.userId = userId;
		this.productName = productName;
		this.price = price;
		this.productImageFile = productImageFile;
		this.brand = brand;
	}
	private String cartId;
	private int quantity;
	private int productId;
	private int userId;
	
	public String getCartId() {
		return cartId;
	}
	public void setCartId(String cartId) {
		this.cartId = cartId;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getProductImageFile() {
		return productImageFile;
	}
	public void setProductImageFile(String productImageFile) {
		this.productImageFile = productImageFile;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	private String productName;
	private double price;
	private String productImageFile;
	private String brand;

}
