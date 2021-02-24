package com.app.cartitems.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.cartitems.model.Cart;
@Transactional
@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
	List<Cart> findAllByUserId(int id);
void deleteByUserId(int id);
}
