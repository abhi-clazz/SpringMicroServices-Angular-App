package com.orders.track.rpository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.orders.track.model.Tracking;
@Repository
public interface TrackingRepository extends JpaRepository<Tracking, Long> {
	Tracking findByOrderId(Long id);
}
