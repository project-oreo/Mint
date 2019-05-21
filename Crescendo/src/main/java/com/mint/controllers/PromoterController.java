package com.mint.controllers;

import java.security.NoSuchAlgorithmException;
import java.util.Optional;

import javax.inject.Inject;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;

import com.mint.entities.Band;
import com.mint.entities.Credentials;
import com.mint.entities.Promoter;
import com.mint.services.PromoterService;

@RestController
@RequestMapping("promoters")
public class PromoterController {

	private PromoterService promoterService;
	
	@Inject
	public PromoterController(PromoterService promoterService) {
		super();
		this.promoterService = promoterService;
	}
	
	@PostMapping("signup")
	@ResponseStatus(HttpStatus.CREATED)
	public Promoter createPromoter(@RequestBody Promoter promoter) throws NoSuchAlgorithmException {
		return this.promoterService.create(promoter);
	}
	
	@PostMapping("login")
	public ResponseEntity<Promoter> login(@RequestBody Promoter promoter) throws NoSuchAlgorithmException {
		promoter = this.promoterService.login(promoter);
		
		if( promoter == null){
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}else {
			return ResponseEntity.ok(promoter);
		}
		
	}
	
	@GetMapping("/{id}")
	public Promoter getById(@PathVariable int id) {
		return Optional.ofNullable(this.promoterService.getById(id))
			.orElseThrow(() -> new HttpClientErrorException(HttpStatus.NOT_FOUND));
	}
	
	@PutMapping("update")
	public Promoter updatePromoter(@RequestBody Promoter promoter) {
		return this.promoterService.update(promoter);
	}
	
	@DeleteMapping("/{id}")
	public Promoter deletePromoter(@PathVariable int id) {
		return this.promoterService.deleteById(id);
	}
	
	@ExceptionHandler(HttpClientErrorException.class)
	public ResponseEntity<String> handleClientError(HttpClientErrorException e) {
		return ResponseEntity.status(e.getStatusCode()).body(e.getMessage());
	}
	
	
}
