package com.mint.entities;

public class BandGigsPK {
	
    private int band_id;
    private Long gig_id;
    
	public BandGigsPK() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BandGigsPK(int band_id, Long gig_id) {
		super();
		this.band_id = band_id;
		this.gig_id = gig_id;
	}

	public int getBand_id() {
		return band_id;
	}

	public void setBand_id(int band_id) {
		this.band_id = band_id;
	}

	public Long getGig_id() {
		return gig_id;
	}

	public void setGig_id(Long gig_id) {
		this.gig_id = gig_id;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + band_id;
		result = prime * result + ((gig_id == null) ? 0 : gig_id.hashCode());
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
		if (band_id != other.band_id)
			return false;
		if (gig_id == null) {
			if (other.gig_id != null)
				return false;
		} else if (!gig_id.equals(other.gig_id))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "BandGigsPK [band_id=" + band_id + ", gig_id=" + gig_id + "]";
	}
    
	

}
