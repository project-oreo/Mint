package com.mint.repositories;

import java.util.List;

import javax.inject.Inject;
import javax.persistence.Query;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.HttpClientErrorException;

import com.mint.entities.Gig;
import com.mint.entities.Promoter;
@Repository
public class GigRepository {
	
	SessionFactory sf;
	
	@Inject
	public GigRepository(SessionFactory sf) {
		this.sf = sf;
	}
	
	@Transactional(propagation = Propagation.REQUIRED)
	public Gig getById(int id) {
		Session session = sf.getCurrentSession();
		return session.get(Gig.class, id);
	}
	
	@Transactional(propagation = Propagation.REQUIRED)
	public Gig create(Gig gig) {
		Session session = sf.getCurrentSession();
//		Promoter promoter = session.get(Promoter.class, gig.getPromoterId());
//		gig.setPromoter(promoter);
		session.save(gig);
		return gig;
	}
	
	@Transactional(propagation = Propagation.REQUIRED)
	public Gig update(Gig gig) {
		Session session = sf.getCurrentSession();
		session.merge(gig);
		return gig;
	}

	@Transactional(propagation = Propagation.REQUIRED)
	public Gig deleteById(int id) {
		Session session = sf.getCurrentSession();
		Gig gig = session.get(Gig.class, id );
		if (gig == null) throw new HttpClientErrorException(HttpStatus.NOT_FOUND);
		session.delete(gig);
		return gig;
	}
	
	
	@Transactional(propagation = Propagation.REQUIRED)
	public List<Gig> getAllGigs() {
		Session session = sf.getCurrentSession();
		List<Gig> gigList = session.createQuery("SELECT g FROM Gig g", Gig.class).getResultList();
		return gigList;
	}

}

