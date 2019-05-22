package com.mint.entities;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

@Entity
@Table(name="band_gigs")
public class BandGigs {
	
	@EmbeddedId
    private BandGigsPK bandGigId;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @MapsId("bandId")
	private Band bands;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @MapsId("gigId")
	private Gig gigs;
	
	private String status;

	public BandGigs() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BandGigs(BandGigsPK bandGigId, Band bands, Gig gigs, String status) {
		super();
		this.bandGigId = bandGigId;
		this.bands = bands;
		this.gigs = gigs;
		this.status = status;
	}

	public BandGigsPK getBandGigId() {
		return bandGigId;
	}

	public void setBandGigId(BandGigsPK bandGigId) {
		this.bandGigId = bandGigId;
	}

	public Band getBands() {
		return bands;
	}

	public void setBands(Band bands) {
		this.bands = bands;
	}

	public Gig getGigs() {
		return gigs;
	}

	public void setGigs(Gig gigs) {
		this.gigs = gigs;
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
		result = prime * result + ((bandGigId == null) ? 0 : bandGigId.hashCode());
		result = prime * result + ((bands == null) ? 0 : bands.hashCode());
		result = prime * result + ((gigs == null) ? 0 : gigs.hashCode());
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
		if (bandGigId == null) {
			if (other.bandGigId != null)
				return false;
		} else if (!bandGigId.equals(other.bandGigId))
			return false;
		if (bands == null) {
			if (other.bands != null)
				return false;
		} else if (!bands.equals(other.bands))
			return false;
		if (gigs == null) {
			if (other.gigs != null)
				return false;
		} else if (!gigs.equals(other.gigs))
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
		return "BandGigs [bandGigId=" + bandGigId + ", bands=" + bands + ", gigs=" + gigs + ", status=" + status + "]";
	}
	
	
}
