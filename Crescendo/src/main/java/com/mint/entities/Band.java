package com.mint.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity 
@Table(name="bands")
public class Band {

		@Id 
	    @GeneratedValue(strategy = GenerationType.IDENTITY)                              
	    private int id;
	    private String bandName;    
	    private String genre;
	    private Date   debutDate;
	    private String bio;
	    private String promotion;
	    private double hourlyRate;
	    private String email;
	    private String password;
	 
	    
	    @ManyToMany
	    @JoinTable  (name="band_gigs",
	                joinColumns       = {@JoinColumn(name="band_id")},
	                inverseJoinColumns= {@JoinColumn(name="gig_id")})
	    List<Gig> gigs;


		public int getId() {
			return id;
		}


		public void setId(int id) {
			this.id = id;
		}


		public String getBandName() {
			return bandName;
		}


		public void setBandName(String bandName) {
			this.bandName = bandName;
		}


		public String getGenre() {
			return genre;
		}


		public void setGenre(String genre) {
			this.genre = genre;
		}


		public Date getDebutDate() {
			return debutDate;
		}


		public void setDebutDate(Date debutDate) {
			this.debutDate = debutDate;
		}


		public String getBio() {
			return bio;
		}


		public void setBio(String bio) {
			this.bio = bio;
		}


		public String getPromotion() {
			return promotion;
		}


		public void setPromotion(String promotion) {
			this.promotion = promotion;
		}


		public double getHourlyRate() {
			return hourlyRate;
		}


		public void setHourlyRate(double hourlyRate) {
			this.hourlyRate = hourlyRate;
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
			result = prime * result + ((bandName == null) ? 0 : bandName.hashCode());
			result = prime * result + ((bio == null) ? 0 : bio.hashCode());
			result = prime * result + ((debutDate == null) ? 0 : debutDate.hashCode());
			result = prime * result + ((email == null) ? 0 : email.hashCode());
			result = prime * result + ((genre == null) ? 0 : genre.hashCode());
			result = prime * result + ((gigs == null) ? 0 : gigs.hashCode());
			long temp;
			temp = Double.doubleToLongBits(hourlyRate);
			result = prime * result + (int) (temp ^ (temp >>> 32));
			result = prime * result + id;
			result = prime * result + ((password == null) ? 0 : password.hashCode());
			result = prime * result + ((promotion == null) ? 0 : promotion.hashCode());
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
			Band other = (Band) obj;
			if (bandName == null) {
				if (other.bandName != null)
					return false;
			} else if (!bandName.equals(other.bandName))
				return false;
			if (bio == null) {
				if (other.bio != null)
					return false;
			} else if (!bio.equals(other.bio))
				return false;
			if (debutDate == null) {
				if (other.debutDate != null)
					return false;
			} else if (!debutDate.equals(other.debutDate))
				return false;
			if (email == null) {
				if (other.email != null)
					return false;
			} else if (!email.equals(other.email))
				return false;
			if (genre == null) {
				if (other.genre != null)
					return false;
			} else if (!genre.equals(other.genre))
				return false;
			if (gigs == null) {
				if (other.gigs != null)
					return false;
			} else if (!gigs.equals(other.gigs))
				return false;
			if (Double.doubleToLongBits(hourlyRate) != Double.doubleToLongBits(other.hourlyRate))
				return false;
			if (id != other.id)
				return false;
			if (password == null) {
				if (other.password != null)
					return false;
			} else if (!password.equals(other.password))
				return false;
			if (promotion == null) {
				if (other.promotion != null)
					return false;
			} else if (!promotion.equals(other.promotion))
				return false;
			return true;
		}


		@Override
		public String toString() {
			return "Band [id=" + id + ", bandName=" + bandName + ", genre=" + genre + ", debutDate=" + debutDate
					+ ", bio=" + bio + ", promotion=" + promotion + ", hourlyRate=" + hourlyRate + ", email=" + email
					+ ", password=" + password + ", gigs=" + gigs + "]";
		}


		public Band(int id, String bandName, String genre, Date debutDate, String bio, String promotion,
				double hourlyRate, String email, String password, List<Gig> gigs) {
			super();
			this.id = id;
			this.bandName = bandName;
			this.genre = genre;
			this.debutDate = debutDate;
			this.bio = bio;
			this.promotion = promotion;
			this.hourlyRate = hourlyRate;
			this.email = email;
			this.password = password;
			this.gigs = gigs;
		}


		public Band() {
			super();
			// TODO Auto-generated constructor stub
		}
	 
	
}
