package com.app.product.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.product.model.Product;
import com.app.product.repository.ProductRepository;

@Service
public class ProductService {
@Autowired
ProductRepository productRepository;
List<Product> prodlist=new ArrayList<Product>();


public List<Product> getProducts()
{
return productRepository.findAll();	
}

public void addProduct(Product prod)
{
	productRepository.save(prod);
}

public void deleteProduct(int id)
{
	productRepository.deleteById(id);
	}
	


public Product  getProductById(int id)
{
	Product prod=null;
	
	Optional<Product> Product= productRepository.findById(id);
	
	if(Product.isPresent())
	{
		prod=Product.get();
	}
	
	return prod;
	
}
}
