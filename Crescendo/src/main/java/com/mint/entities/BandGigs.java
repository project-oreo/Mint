package com.mint.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

@Entity
@Table(name="band_gigs")
@IdClass(BandGigsPK.class)
public class BandGigs {
	
	@Id
    @ManyToOne
    @JoinColumn(name = "band_id", referencedColumnName = "id")
	private Band band;
	
	@Id
    @ManyToOne
    @JoinColumn(name = "gig_id", referencedColumnName = "id")
	private Gig gig;
	
	private String status;

	public BandGigs() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BandGigs(Band band, Gig gig, String status) {
		super();
		this.band = band;
		this.gig = gig;
		this.status = status;
	}

	public Band getBand() {
		return band;
	}

	public void setBand(Band band) {
		this.band = band;
	}

	public Gig getGig() {
		return gig;
	}

	public void setGig(Gig gig) {
		this.gig = gig;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((band == null) ? 0 : band.hashCode());
		result = prime * result + ((gig == null) ? 0 : gig.hashCode());
		result = prime * result + ((status == null) ? 0 : status.hashCode());
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
		BandGigs other = (BandGigs) obj;
		if (band == null) {
			if (other.band != null)
				return false;
		} else if (!band.equals(other.band))
			return false;
		if (gig == null) {
			if (other.gig != null)
				return false;
		} else if (!gig.equals(other.gig))
			return false;
		if (status == null) {
			if (other.status != null)
				return false;
		} else if (!status.equals(other.status))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "BandGigs [band=" + band + ", gig=" + gig + ", status=" + status + "]";
	}
	
	

}
