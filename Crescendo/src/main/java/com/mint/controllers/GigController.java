package com.mint.controllers;

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
import com.mint.services.GigService;

@RestController // All methods infer @ResponseBody
@RequestMapping("gigs")
public class GigController {
	
	private GigService gigService;
	
	@Inject
	public GigController(GigService gigService) {
		super();
		this.gigService = gigService;
	}

	@GetMapping("/{id}")
	public Gig getById(@PathVariable int id) {
		return Optional.ofNullable(this.gigService.getById(id))
			.orElseThrow(() -> new HttpClientErrorException(HttpStatus.NOT_FOUND));
		
	}
	
	@PostMapping("create") 
	@ResponseStatus(HttpStatus.CREATED)
	public Gig createGig(@RequestBody Gig gig) {
		return this.gigService.create(gig);
	}
	
	@PutMapping("updateGig")
	public Gig updateGig(@RequestBody Gig gig) {
		return this.gigService.update(gig);
	}
	
	@DeleteMapping("/{id}")
	public Gig deleteGig(@PathVariable int id) {
		return this.gigService.deleteById(id);
	}
	
	@GetMapping("bands/{id}")
	public List<Band> getBands(@PathVariable int id)
	{
		return this.gigService.getBands(id);
	}
	
	@GetMapping("allbands/{id}")
	public List<Band> getAllBands(@PathVariable int id)
	{
		return this.gigService.getAllBands(id);
	}
	
	@ExceptionHandler(HttpClientErrorException.class)
	public ResponseEntity<String> handleClientError(HttpClientErrorException e) {
		return ResponseEntity.status(e.getStatusCode()).body(e.getMessage());
	}
	
	@GetMapping("")
	public List<Gig> getAllGigs() {
		return this.gigService.getAllGigs();
	}
}