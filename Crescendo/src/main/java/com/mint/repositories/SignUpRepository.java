package com.mint.repositories;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.mint.entities.Band;
import com.mint.entities.Promoter;

@Repository
public class SignUpRepository {
	
	@Transactional
	public Promoter create(Promoter promoter) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Transactional
	public Band create(Band band) {
		// TODO Auto-generated method stub
		return null;
	}

 
	
}
