package com.app.orders.events;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
import org.springframework.stereotype.Component;

import com.app.orders.model.Order;
import com.app.orders.service.SequenceGeneratorService;


@Component
public class UserModelListener extends AbstractMongoEventListener<Order> {

    private SequenceGeneratorService sequenceGenerator;

    @Autowired
    public UserModelListener(SequenceGeneratorService sequenceGenerator) {
        this.sequenceGenerator = sequenceGenerator;
    }

    @Override
    public void onBeforeConvert(BeforeConvertEvent<Order> event) {
        if (event.getSource().getOrderId() < 1) {
            event.getSource().setOrderId(sequenceGenerator.generateSequence(Order.SEQUENCE_NAME));
        }
    }


}