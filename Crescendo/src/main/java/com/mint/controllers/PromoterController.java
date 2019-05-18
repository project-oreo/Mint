package com.mint.controllers;

import javax.inject.Inject;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

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
	public Promoter createPromoter(@RequestBody Promoter promoter) {
		return this.promoterService.create(promoter);
	}
	
	
}
