package com.orders.track.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.orders.track.model.Tracking;
import com.orders.track.rpository.TrackingRepository;

@Service

public class Trackingservice {
@Autowired
TrackingRepository repository;

	public Tracking getTracking(Long id) {
		// TODO Auto-generated method stub
		return repository.findByOrderId(id);
	}
	
	public Tracking addTrackingDetails(Tracking tracking)
	{
		return repository.save(tracking);
	}

}
