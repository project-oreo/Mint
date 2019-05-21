package com.mint.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

@Entity
@Table(name="band_gigs")
public class BandGigs {
	
	@EmbeddedId
	private BandGigsPK id;
	
	@ManyToOne
	@MapsId("band_id")
	@JoinColumn(name ="band_id")
	private Band band;
	
	@ManyToOne
	@MapsId("gig_id")
	@JoinColumn(name ="gig_id")
	private Gig gig;
	
	private String status;
	
	

}
