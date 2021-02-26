package com.app.product.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixProperty;

import com.app.product.model.Product;


import com.app.product.service.ProductService;


@RestController
public class ProductController {
	
	@Autowired
	ProductService productService;
	@Autowired
	RestTemplate restTemplate;
	@RequestMapping(value="/Products", method = RequestMethod.GET)
	@HystrixCommand(fallbackMethod = "getDupeProducts")
	public List<Product> getProducts(){
		System.out.println("PRODUCTS_DATA");
		//restTemplate.getForObject("http://Customer-service/Customers",List.class);
		return productService.getProducts();
	}
	public List<Product> getDupeProducts(){
		System.out.println("PRODUCTS_DATA");
		System.out.println("fallbackmethod");
		List<Product> list=new ArrayList<Product>();
		return list;
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
	@HystrixCommand(fallbackMethod = "getDummyProduct")
	public Product getProduct(@PathVariable int id)
	{
		return productService.getProductById(id);
				
	}
	public Product getDummyProduct(@PathVariable int id)
	{
		Product  product =new Product();
		return product;
				
	}
	@RequestMapping(value="/InventoryProducts/{name}", method = RequestMethod.GET)
	public List<Product> getProducts1(@PathVariable String name)
	{System.out.println("searching inventory");
		return productService.getProductsByName(name);
				
	}

}
