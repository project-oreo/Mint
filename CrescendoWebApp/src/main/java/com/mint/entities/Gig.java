package com.mint.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "gig")
public class Gig {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String gigName;
	private Date   startTime;
	private String location;
	
	private boolean Security;
	private boolean closed;
	private int maxCapacity;
	private String websiteURL;
	
	
	@ManyToMany
	@JoinTable(name = "band_gig",
		joinColumns = {@JoinColumn(name="band_id")},
		inverseJoinColumns = {@JoinColumn(name="gig_id")})
	private List<Band> bands;
	
	@ManyToMany
	@JoinTable(name = "promoter_gig",
		joinColumns = {@JoinColumn(name="promoter_id")},
		inverseJoinColumns = {@JoinColumn(name="gig_id")})
	private List<Promoter> promoter;	
	
}