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
	public Tracking updateTrackingDetails(Long id,Tracking z)
	{
System.out.println(id);
		Tracking t=	repository.findByOrderId(id);
		t.setProcessed(z.isProcessed());
		t.setShipped(z.isShipped());
		t.setDelivered(z.isDelivered());
		
		return repository.save(t);
	}

}
