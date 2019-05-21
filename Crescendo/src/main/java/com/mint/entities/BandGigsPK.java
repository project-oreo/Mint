package com.mint.entities;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class BandGigsPK {
	
	@Column(name = "band_id")
    private int band_id;

     @Column(name = "gig_id")
    private Long gig_id;

}
