package com.mint.services;
import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.mint.entities.Band;
import com.mint.entities.Promoter;
import com.mint.repositories.BandRepository;

@Service
public class BandService {

	BandRepository bandRepository;
	
	@Inject
	public BandService(BandRepository bandRepository)
	{
		super();
		this.bandRepository = bandRepository;
	}
	
	public Band getById(int id) {
		return this.bandRepository.getById(id);
	}

	public Band create(Band band) {
		return this.bandRepository.create(band);
	}

	public Band update(Band band) {
		return this.bandRepository.update(band);
	}

	public Band deleteById(int id) {
		return this.bandRepository.deleteById(id);
	}

	public Promoter login(Promoter promoter) {
		// TODO Auto-generated method stub
		return this.bandRepository.login(promoter);
	}

}
