
	
	
	package com.mint.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.JoinColumn;

@Entity
@Table(name="promoter")
public class Promoter {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String websiteURL;
	
	@Column(unique = true)
	private String email;
	
	@ManyToMany
	@JoinTable(name = "promoter_gig",
		joinColumns = {@JoinColumn(name="promoter_id")},
		inverseJoinColumns = {@JoinColumn(name="gig_id")})
	private List<Gig> gigs;
	
	
	
}