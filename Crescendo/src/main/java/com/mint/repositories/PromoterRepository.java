package com.mint.repositories;

import javax.inject.Inject;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.mint.entities.Band;
import com.mint.entities.Promoter;

@Repository
public class PromoterRepository {
	
	
	SessionFactory sf;
	
	
	@Inject
	public PromoterRepository(SessionFactory sf) {
		this.sf = sf;
	}



	@Transactional
	public Promoter create(Promoter promoter) {
		Session session = sf.getCurrentSession();
		session.save(promoter);
		return promoter;
	}



	public Promoter login(Promoter promoter) {

		return null;
	}



	public Promoter update(Promoter promoter) {
		return null;
	}


	@Transactional(propagation = Propagation.REQUIRED)
	public Promoter getById(int id) {
		Session session = sf.getCurrentSession();
		return session.get(Promoter.class, id);
	}



	public Promoter delete(int id) {
		return null;
	}

}
