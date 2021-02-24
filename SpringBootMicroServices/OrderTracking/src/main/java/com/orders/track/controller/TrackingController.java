package com.orders.track.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.orders.track.model.Tracking;
import com.orders.track.service.Trackingservice;



@RestController
public class TrackingController {
	@Autowired
	Trackingservice trackingservice;
	@RequestMapping(value="/OrderStatus/{id}", method = RequestMethod.GET)

	public Tracking getTracking(@PathVariable Long id){
		return trackingservice.getTracking(id);
	}
	@RequestMapping(value="/OrderStatus", method = RequestMethod.POST)

	public Tracking addTracking(@RequestBody  Tracking tracking){
		return trackingservice.addTrackingDetails(tracking);
	}

}
