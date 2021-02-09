package com.app.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
//import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
//import com.netflix.hystrix.contrib.javanica.annotation.HystrixProperty;

import com.app.product.model.Product;


import com.app.product.service.ProductService;

@RestController
public class ProductController {
	
	@Autowired
	ProductService productService;

	@RequestMapping(value="/Products", method = RequestMethod.GET)
//	@HystrixCommand(fallbackMethod = "getDummyOrders", commandProperties = {
//			@HystrixProperty(name="execution.isolation.thread.timeoutMilliseconds",value="2000"),
//			@HystrixProperty(name="circuitBreaker.requestVolumeThershold",value="5"),
//			@HystrixProperty(name="circuitBreaker.errorThersholdPercentage",value="60"),
//			@HystrixProperty(name="circuitBreaker.sleeWindowInMilliseconds",value="50000")
//	},
//	threadPoolKey = "ordersKey",
//	
//			threadPoolProperties = {
//					@HystrixProperty(name="coreSize",value="10"),
//					@HystrixProperty(name="maxQueueSize",value="5"),
//			})
	public List<Product> getProducts(){
		System.out.println("PRODUCTS_DATA");
		return productService.getProducts();
	}
	
	
	
	@RequestMapping(value="/Products", method = RequestMethod.POST)
	public String addProducts(@RequestBody Product Product)
	{
		System.out.println("ADDING_PRODUCT");
		productService.addProduct(Product);
		return "Success";
	}
	
	@RequestMapping(value="/Products/{id}", method = RequestMethod.DELETE)
	public void deleteProduct(@PathVariable int id)
	{
		productService.deleteProduct(id);
	}
	
	
	@RequestMapping(value="/Products/{id}", method = RequestMethod.GET)
	public Product getProduct(@PathVariable int id)
	{
		return productService.getProductById(id);
				
	}

}