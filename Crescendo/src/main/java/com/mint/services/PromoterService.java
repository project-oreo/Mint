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

	public Promoter login(Promoter promoter) {
		return this.promoterRepository.login(promoter);
	}

	public Promoter update(Promoter promoter) {
		// TODO Auto-generated method stub
		return this.promoterRepository.update(promoter);
	}

	public Promoter getById(int id) {
		// TODO Auto-generated method stub
		return this.promoterRepository.getById(id);
	}

	public Promoter deleteById(int id) {
		// TODO Auto-generated method stub
		return this.promoterRepository.delete(id);
	}

}
