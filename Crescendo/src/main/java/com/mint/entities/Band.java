package com.mint.entities;

import java.security.NoSuchAlgorithmException;
import java.util.Date;
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
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mint.hasher.PasswordHasher;

@Entity 
@Table(name="bands")
public class Band {

		@Id 
	    @GeneratedValue(strategy = GenerationType.IDENTITY)                              
	    private int id;
		
		@NotNull
	    private String bandName;    
	    private String genre;
	    private Date   debutDate;
	    private String bio;
	    private String socialMedia;
	    private double hourlyRate;
	    private String imageURL;
	    
	    @Email
		@Column(unique = true)
	    private String email;
	    
	    @Transient
	    private String password;
	    private String hashedPassword;

	    @JsonIgnore
	    @OneToMany(
	            mappedBy = "bands",
	            cascade = CascadeType.ALL,
	            orphanRemoval = true
	        )
	    List<BandGigs> bandGigs;

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

		public String getSocialMedia() {
			return socialMedia;
		}

		public void setSocialMedia(String socialMedia) {
			this.socialMedia = socialMedia;
		}

		public double getHourlyRate() {
			return hourlyRate;
		}

		public void setHourlyRate(double hourlyRate) {
			this.hourlyRate = hourlyRate;
		}

		public String getImageURL() {
			return imageURL;
		}

		public void setImageURL(String imageURL) {
			this.imageURL = imageURL;
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

		public String getHashedPassword() {
			return hashedPassword;
		}

		public void setHashedPassword(String hashedPassword) throws NoSuchAlgorithmException {
			this.hashedPassword = PasswordHasher.passwordHasher(password);
		}

		public List<BandGigs> getBandGigs() {
			return bandGigs;
		}

		public void setBandGigs(List<BandGigs> bandGigs) {
			this.bandGigs = bandGigs;
		}

		@Override
		public int hashCode() {
			final int prime = 31;
			int result = 1;
			result = prime * result + ((bandGigs == null) ? 0 : bandGigs.hashCode());
			result = prime * result + ((bandName == null) ? 0 : bandName.hashCode());
			result = prime * result + ((bio == null) ? 0 : bio.hashCode());
			result = prime * result + ((debutDate == null) ? 0 : debutDate.hashCode());
			result = prime * result + ((email == null) ? 0 : email.hashCode());
			result = prime * result + ((genre == null) ? 0 : genre.hashCode());
			result = prime * result + ((hashedPassword == null) ? 0 : hashedPassword.hashCode());
			long temp;
			temp = Double.doubleToLongBits(hourlyRate);
			result = prime * result + (int) (temp ^ (temp >>> 32));
			result = prime * result + id;
			result = prime * result + ((imageURL == null) ? 0 : imageURL.hashCode());
			result = prime * result + ((password == null) ? 0 : password.hashCode());
			result = prime * result + ((socialMedia == null) ? 0 : socialMedia.hashCode());
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
			if (bandGigs == null) {
				if (other.bandGigs != null)
					return false;
			} else if (!bandGigs.equals(other.bandGigs))
				return false;
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
			if (hashedPassword == null) {
				if (other.hashedPassword != null)
					return false;
			} else if (!hashedPassword.equals(other.hashedPassword))
				return false;
			if (Double.doubleToLongBits(hourlyRate) != Double.doubleToLongBits(other.hourlyRate))
				return false;
			if (id != other.id)
				return false;
			if (imageURL == null) {
				if (other.imageURL != null)
					return false;
			} else if (!imageURL.equals(other.imageURL))
				return false;
			if (password == null) {
				if (other.password != null)
					return false;
			} else if (!password.equals(other.password))
				return false;
			if (socialMedia == null) {
				if (other.socialMedia != null)
					return false;
			} else if (!socialMedia.equals(other.socialMedia))
				return false;
			return true;
		}

		@Override
		public String toString() {
			return "Band [id=" + id + ", bandName=" + bandName + ", genre=" + genre + ", debutDate=" + debutDate
					+ ", bio=" + bio + ", socialMedia=" + socialMedia + ", hourlyRate=" + hourlyRate + ", imageURL="
					+ imageURL + ", email=" + email + ", password=" + password + ", hashedPassword=" + hashedPassword
					+ ", bandGigs=" + bandGigs + "]";
		}

		public Band(int id, @NotNull String bandName, String genre, Date debutDate, String bio, String socialMedia,
				double hourlyRate, String imageURL, @Email String email, String password, String hashedPassword,
				List<BandGigs> bandGigs) {
			super();
			this.id = id;
			this.bandName = bandName;
			this.genre = genre;
			this.debutDate = debutDate;
			this.bio = bio;
			this.socialMedia = socialMedia;
			this.hourlyRate = hourlyRate;
			this.imageURL = imageURL;
			this.email = email;
			this.password = password;
			this.hashedPassword = hashedPassword;
			this.bandGigs = bandGigs;
		}

		public Band() {
			super();
			// TODO Auto-generated constructor stub
		}


		
			
}
