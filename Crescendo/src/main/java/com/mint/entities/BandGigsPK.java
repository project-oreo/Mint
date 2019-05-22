package com.mint.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class BandGigsPK implements Serializable{
	
	@Column(name="band_id")
    private int bandId;
	@Column(name="gig_id")
    private int gigId;
    
	public BandGigsPK() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BandGigsPK(int bandId, int gigId) {
		super();
		this.bandId = bandId;
		this.gigId = gigId;
	}

	public int getBandId() {
		return bandId;
	}

	public void setBandId(int bandId) {
		this.bandId = bandId;
	}

	public int getGigId() {
		return gigId;
	}

	public void setGigId(int gigId) {
		this.gigId = gigId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + bandId;
		result = prime * result + gigId;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		BandGigsPK other = (BandGigsPK) obj;
		if (bandId != other.bandId)
			return false;
		if (gigId != other.gigId)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "BandGigsPK [bandId=" + bandId + ", gigId=" + gigId + "]";
	}
	
	
}
