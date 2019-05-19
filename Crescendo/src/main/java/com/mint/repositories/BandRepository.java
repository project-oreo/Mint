package com.mint.repositories;

import javax.inject.Inject;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.HttpClientErrorException;

import com.mint.entities.Band;
import com.mint.entities.Promoter;

@Repository
public class BandRepository {
	
	SessionFactory sf;
	
	@Inject
	public BandRepository(SessionFactory sf) {
		this.sf = sf;
	}
	
	@Transactional(propagation = Propagation.REQUIRED)
	public Band getById(int id) {
		Session session = sf.getCurrentSession();
		return session.get(Band.class, id);
	}
	
	@Transactional(propagation = Propagation.REQUIRED)
	public Band create(Band band) {
		Session session = sf.getCurrentSession();
		session.save(band);
		return band;
	}
	
	@Transactional(propagation = Propagation.REQUIRED)
	public Band update(Band band) {
		Session session = sf.getCurrentSession();
		session.merge(band);
		return band;
	}

	@Transactional(propagation = Propagation.REQUIRED)
	public Band deleteById(int id) {
		Session session = sf.getCurrentSession();
		Band band = session.get(Band.class, id );
		if (band == null) throw new HttpClientErrorException(HttpStatus.NOT_FOUND);
		session.delete(band);
		return band;
	}

	public Promoter login(Promoter promoter) {
		// TODO Auto-generated method stub
		return null;
	}

}
