package com.mint.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="gigs")
public class Gig {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String gigName;
	private Date   startTime;
	private String location;
	
	@ManyToOne
	@JoinColumn(name = "promoter_id")
	private Promoter promoter;	
	
	
	private boolean Security;
	private boolean closed;
	private int maxCapacity;
	
	@OneToMany(
	        mappedBy = "gigs",
	        cascade = CascadeType.ALL,
	        orphanRemoval = true
	    )
	private List<BandGigs> gigBands;

	public Gig() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Gig(int id, String gigName, Date startTime, String location, Promoter promoter, boolean security,
			boolean closed, int maxCapacity, List<BandGigs> gigBands) {
		super();
		this.id = id;
		this.gigName = gigName;
		this.startTime = startTime;
		this.location = location;
		this.promoter = promoter;
		Security = security;
		this.closed = closed;
		this.maxCapacity = maxCapacity;
		this.gigBands = gigBands;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getGigName() {
		return gigName;
	}

	public void setGigName(String gigName) {
		this.gigName = gigName;
	}

	public Date getStartTime() {
		return startTime;
	}

	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Promoter getPromoter() {
		return promoter;
	}

	public void setPromoter(Promoter promoter) {
		this.promoter = promoter;
	}

	public boolean isSecurity() {
		return Security;
	}

	public void setSecurity(boolean security) {
		Security = security;
	}

	public boolean isClosed() {
		return closed;
	}

	public void setClosed(boolean closed) {
		this.closed = closed;
	}

	public int getMaxCapacity() {
		return maxCapacity;
	}

	public void setMaxCapacity(int maxCapacity) {
		this.maxCapacity = maxCapacity;
	}

	public List<BandGigs> getGigBands() {
		return gigBands;
	}

	public void setGigBands(List<BandGigs> gigBands) {
		this.gigBands = gigBands;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (Security ? 1231 : 1237);
		result = prime * result + (closed ? 1231 : 1237);
		result = prime * result + ((gigBands == null) ? 0 : gigBands.hashCode());
		result = prime * result + ((gigName == null) ? 0 : gigName.hashCode());
		result = prime * result + id;
		result = prime * result + ((location == null) ? 0 : location.hashCode());
		result = prime * result + maxCapacity;
		result = prime * result + ((promoter == null) ? 0 : promoter.hashCode());
		result = prime * result + ((startTime == null) ? 0 : startTime.hashCode());
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
		Gig other = (Gig) obj;
		if (Security != other.Security)
			return false;
		if (closed != other.closed)
			return false;
		if (gigBands == null) {
			if (other.gigBands != null)
				return false;
		} else if (!gigBands.equals(other.gigBands))
			return false;
		if (gigName == null) {
			if (other.gigName != null)
				return false;
		} else if (!gigName.equals(other.gigName))
			return false;
		if (id != other.id)
			return false;
		if (location == null) {
			if (other.location != null)
				return false;
		} else if (!location.equals(other.location))
			return false;
		if (maxCapacity != other.maxCapacity)
			return false;
		if (promoter == null) {
			if (other.promoter != null)
				return false;
		} else if (!promoter.equals(other.promoter))
			return false;
		if (startTime == null) {
			if (other.startTime != null)
				return false;
		} else if (!startTime.equals(other.startTime))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Gig [id=" + id + ", gigName=" + gigName + ", startTime=" + startTime + ", location=" + location
				+ ", promoter=" + promoter + ", Security=" + Security + ", closed=" + closed + ", maxCapacity="
				+ maxCapacity + ", gigBands=" + gigBands + "]";
	}

	
	
}