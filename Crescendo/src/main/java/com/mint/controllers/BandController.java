package com.mint.controllers;

import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Optional;

import javax.inject.Inject;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
import com.mint.entities.Gig;
import com.mint.services.BandService;

@RestController // All methods infer @ResponseBody
@RequestMapping("bands")
public class BandController {
	
	private BandService bandService;
	
	@Inject
	public BandController(BandService bandService) {
		super();
		this.bandService = bandService;
	}

	@GetMapping("/{id}")
	public Band getById(@PathVariable int id) {
		return Optional.ofNullable(this.bandService.getById(id))
			.orElseThrow(() -> new HttpClientErrorException(HttpStatus.NOT_FOUND));
	}
	
	@PostMapping("signup")
	@ResponseStatus(HttpStatus.CREATED)
	public Band createBand(@RequestBody Band band) throws NoSuchAlgorithmException {
		return this.bandService.create(band);
	}
	
	@PostMapping("login")
	public ResponseEntity<Band> login(@RequestBody Band band) throws NoSuchAlgorithmException {
		band = this.bandService.login(band);
		
		if( band == null){
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}else {
			return ResponseEntity.ok(band);
		}
		
	}
	
	
	@PutMapping("update")
	public Band updateBand(@RequestBody Band band) {
		System.out.println(band);
		return this.bandService.update(band);
	}
	
	@DeleteMapping("/{id}")
	public Band deleteBand(@PathVariable int id) {
		return this.bandService.deleteById(id);
	}
	
	@GetMapping("invites/{id}")
	public List<Gig> getInvites(@PathVariable int id)
	{
		
		return this.bandService.getInvites(id);
	}
	
	@GetMapping("gigs/{id}")
	public List<Gig> getGigs(@PathVariable int id)
	{
		return this.bandService.getGigs(id);
	}
	
	@PutMapping("resolve/{bandId}/{gigId}/{status}")
	public void resolveInvite(@PathVariable int bandId, @PathVariable int gigId, @PathVariable String status)
	{
		this.bandService.resolveInvite(bandId, gigId, status);
	}
	
	@ExceptionHandler(HttpClientErrorException.class)
	public ResponseEntity<String> handleClientError(HttpClientErrorException e) {
		return ResponseEntity.status(e.getStatusCode()).body(e.getMessage());
	}
}