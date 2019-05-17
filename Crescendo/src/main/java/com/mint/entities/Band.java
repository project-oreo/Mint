package com.mint.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

@Entity 
public class Band {
<<<<<<< HEAD

	 @Id // Indicates a primary key field
	    @GeneratedValue(strategy = GenerationType.IDENTITY) // Creates fields as SERIAL in pg                                       // and allows the table to provide values itself
	    private int id;
	    
	    private String bandName;    
	    private String genre;
	    private Date   debutDate;
	    private String bio;
	    private String promotion;
	    private double hourlyRate;
	 
	    
	    @ManyToMany
	    @JoinTable  (name="band_gigs",
	                joinColumns       = {@JoinColumn(name="band_id")},
	                inverseJoinColumns= {@JoinColumn(name="gig_id")})
	    List<Gig> gigs;
	 
	
=======
 
>>>>>>> 89ea008944581e34799dfc82a1ef55a08d580269
}
