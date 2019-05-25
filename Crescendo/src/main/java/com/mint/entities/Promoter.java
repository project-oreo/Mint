package com.mint.entities;

import java.security.NoSuchAlgorithmException;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Email;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mint.hasher.PasswordHasher;

@Entity
@Table(name="promoters")
public class Promoter {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Email
	@Column(unique = true)
	private String email;
	
	@Transient
	private String password;
	
	private String businessName;
	private String website;
	private String hashedPassword;
	
	@JsonIgnore
	@OneToMany(mappedBy="promoter",
			cascade = CascadeType.ALL,
            orphanRemoval = true)
	private List<Gig> gigs;



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
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



	public String getBusinessName() {
		return businessName;
	}



	public void setBusinessName(String businessName) {
		this.businessName = businessName;
	}



	public String getWebsite() {
		return website;
	}



	public void setWebsite(String website) {
		this.website = website;
	}


	public String getHashedPassword() throws NoSuchAlgorithmException {
		return hashedPassword;	
	}



	public void setHashedPassword(String password) throws NoSuchAlgorithmException {
		this.hashedPassword = PasswordHasher.passwordHasher(password);
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
		result = prime * result + ((hashedPassword == null) ? 0 : hashedPassword.hashCode());
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
		if (hashedPassword == null) {
			if (other.hashedPassword != null)
				return false;
		} else if (!hashedPassword.equals(other.hashedPassword))
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
		return "Promoter [id=" + id + ", email=" + email + ", password=" + password + ", businessName=" + businessName
				+ ", website=" + website + ", hashedPassword=" + hashedPassword + ", gigs=" + gigs + "]";
	}



	public Promoter(int id, @Email String email, String password, String businessName, String website,
			String hashedPassword, List<Gig> gigs) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		this.businessName = businessName;
		this.website = website;
		this.hashedPassword = hashedPassword;
		this.gigs = gigs;
	}



	public Promoter() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	
}