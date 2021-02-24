package com.orders.track.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
@Entity
@Data
public class Tracking {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long trackingId;
	private long orderId;
	private boolean isProcessed;
	private boolean isShipped;
	private boolean isDelivered;
	

}
