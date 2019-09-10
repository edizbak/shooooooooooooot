package com.shooter.fx.html5_shooter_4000.business;

public class Joueur implements Comparable<Joueur>{

	private Long id;
	private String pseudo;
	private int meilleurScore;
	private static Long compteur = 0L;

	public Joueur() {
		id = ++compteur;
	}

	public Joueur(String pseudo) {
		this();
		this.pseudo = pseudo;
	}

	public Joueur(String pseudo, int meilleurScore) {
		this(pseudo);
		this.meilleurScore=meilleurScore;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPseudo() {
		return pseudo;
	}

	public void setPseudo(String pseudo) {
		this.pseudo = pseudo;
	}

	public int getMeilleurScore() {
		return meilleurScore;
	}

	public void setMeilleurScore(int meilleurScore) {
		this.meilleurScore = meilleurScore;
	}

	@Override
	public int compareTo(Joueur autreJoueur) {
		return ((Integer) getMeilleurScore()).compareTo(autreJoueur.getMeilleurScore());
	}

	@Override
	public String toString() {
		return "Joueur [id=" + id + ", pseudo=" + pseudo + ", meilleurScore=" + meilleurScore + "]";
	}
}
