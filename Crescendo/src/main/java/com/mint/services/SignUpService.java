package com.mint.services;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.mint.entities.Promoter;
import com.mint.repositories.SignUpRepository;

@Service
public class SignUpService {
	
	SignUpRepository signUpRepository;
	
	@Inject
	public SignUpService(SignUpRepository signUpRepository) {
		super();
		this.signUpRepository = signUpRepository;
	}

	public Promoter create(Promoter promoter) {
		return this.signUpRepository.create(promoter);
	}
	
	

}
