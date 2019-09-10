package com.shooter.html5_shooter_4000.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

//import javax.annotation.PostConstruct;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.shooter.fx.html5_shooter_4000.business.Joueur;

@Controller
@RequestMapping("/")
public class JoueurController {

	protected List<Joueur> joueurs = new ArrayList<>();
	
	@RequestMapping(value = { "/index", "/" })
	public ModelAndView accueil() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("index");
		mav.addObject("joueurs", joueurs);
		return mav;
	}

}