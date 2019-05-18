package com.mint.services;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.mint.entities.Promoter;
import com.mint.repositories.PromoterRepository;

@Service
public class PromoterService {
	
	PromoterRepository promoterRepository;
	
	@Inject	
	public PromoterService(PromoterRepository promoterRepository) {
		super();
		this.promoterRepository = promoterRepository;
	}

	public Promoter create(Promoter promoter) {
		return this.promoterRepository.create(promoter);
	}

}
