package com.shooter.html5_shooter_4000.controller;

import java.util.Collections;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.shooter.fx.html5_shooter_4000.business.Joueur;

@RestController
@RequestMapping("/")
public class JoueurRestController {

	private static final Logger logger = LogManager.getLogger(Logger.class.getName());
	
	@Autowired
	private JoueurController joueurController;

	@GetMapping(value="/joueurs/{id}", produces="application/json")
	public Joueur recupererJoueur(@PathVariable Long id)
	{
		return recupererJoueurParId(id);
	}

	@CrossOrigin(origins="*")
	@PostMapping(value="/joueurs/{pseudo}", produces="application/json")
	public Joueur ajouterJoueur(@PathVariable String pseudo)
	{
		Joueur Joueur = new Joueur(pseudo);
		joueurController.joueurs.add(Joueur);
		return Joueur;
	}

	@CrossOrigin(origins="*")
	@PostMapping(value="/joueurs/{pseudo}/{meilleurScore}", produces="application/json")
	public Joueur ajouterJoueurAvecMeilleurScore(@PathVariable String pseudo,
			@PathVariable Integer meilleurScore
			)
	{
		Joueur Joueur = new Joueur(pseudo, meilleurScore);
		joueurController.joueurs.add(Joueur);
		return Joueur;
	}

	@CrossOrigin(origins="*")
	@GetMapping(value = "/joueurs", produces = "application/json")
	public List<Joueur> recupererjoueurs()
	{
	    return joueurController.joueurs;
	}

	@CrossOrigin(origins="*")
	@GetMapping(value = "/joueursTries", produces = "application/json")
	public List<Joueur> recupererjoueursTries()
	{
		List<Joueur> joueursATrier = joueurController.joueurs;
		Collections.sort(joueursATrier);
	    return joueurController.joueurs;
	}

	private Joueur recupererJoueurParId(Long id) {
		for (Joueur Joueur : joueurController.joueurs) {
			if (Joueur.getId()==id) {
				return Joueur;
			}
		}
		return null;
	}

}