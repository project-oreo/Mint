package com.mint.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="promoters")
public class Promoter {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String website;
	
	private String businessName;
	
	@Column(unique = true)
	private String email;
	
	private String password;
	
	@OneToMany
	@JoinTable(name = "promoter_gig",
		joinColumns = {@JoinColumn(name="promoter_id")},
		inverseJoinColumns = {@JoinColumn(name="gig_id")})
	private List<Gig> gigs;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public String getBusinessName() {
		return businessName;
	}

	public void setBusinessName(String businessName) {
		this.businessName = businessName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Gig> getGigs() {
		return gigs;
	}

	public void setGigs(List<Gig> gigs) {
		this.gigs = gigs;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((businessName == null) ? 0 : businessName.hashCode());
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + ((gigs == null) ? 0 : gigs.hashCode());
		result = prime * result + id;
		result = prime * result + ((password == null) ? 0 : password.hashCode());
		result = prime * result + ((website == null) ? 0 : website.hashCode());
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
		Promoter other = (Promoter) obj;
		if (businessName == null) {
			if (other.businessName != null)
				return false;
		} else if (!businessName.equals(other.businessName))
			return false;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (gigs == null) {
			if (other.gigs != null)
				return false;
		} else if (!gigs.equals(other.gigs))
			return false;
		if (id != other.id)
			return false;
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		if (website == null) {
			if (other.website != null)
				return false;
		} else if (!website.equals(other.website))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Promoter [id=" + id + ", website=" + website + ", businessName=" + businessName + ", email=" + email
				+ ", password=" + password + ", gigs=" + gigs + "]";
	}

	public Promoter(int id, String website, String businessName, String email, String password, List<Gig> gigs) {
		super();
		this.id = id;
		this.website = website;
		this.businessName = businessName;
		this.email = email;
		this.password = password;
		this.gigs = gigs;
	}

	public Promoter() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}