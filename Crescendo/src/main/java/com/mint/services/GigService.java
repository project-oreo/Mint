package com.mint.services;
import javax.inject.Inject;

import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;

import com.mint.entities.Band;
import com.mint.entities.Gig;
import com.mint.repositories.GigRepository;

@Service
public class GigService {

	GigRepository gigRepository;
	
	@Inject
	public GigService(GigRepository gigRepository)
	{
		super();
		this.gigRepository = gigRepository;
	}
	
	public Gig getById(int id) {
		return this.gigRepository.getById(id);
	}

	public Gig create(Gig gig) {
		
		
		return this.gigRepository.create(gig);
	}

	public Gig update(Gig gig) {
		return this.gigRepository.update(gig);
	}

	public Gig deleteById(int id) {
		return this.gigRepository.deleteById(id);
	}

	public List	<Gig> getAllGigs() {
		return this.gigRepository.getAllGigs();
	}

	public List<Band> getBands(int id) {
		return this.gigRepository.getBands(id);
	}
	
	public List<Band> getAllBands(int id)
	{
		return this.gigRepository.getAllBands(id);
	}

}
