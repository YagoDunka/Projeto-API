package com.example.API.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.API.entities.Genero;
import com.example.API.entities.Filme;
import com.example.API.repositories.GeneroRepository;
 
@RestController
public class GeneroController {
	
	@Autowired
	GeneroRepository repo;
	
	@GetMapping("/genero")
	public ResponseEntity<List<Genero>> buscarGenero() {
		return ResponseEntity.status(HttpStatus.OK).body(repo.findAll());
	}
	
	@GetMapping("/genero/{idGenero}")
	public ResponseEntity<Genero> buscarGenero(@PathVariable("idGenero") long id) {
		Optional<Genero> opt = repo.findById(id);
		try {
			Genero gen = opt.get();
			return ResponseEntity.status(HttpStatus.OK).body(gen);
		}catch(Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}	
	}
	
	@DeleteMapping("/genero/{idGenero}")
	public ResponseEntity<Boolean> ExcluirGenero(@PathVariable("idGenero") long id) {
		Optional<Genero> opt = repo.findById(id);
		try {
			Genero gen = opt.get();
			repo.delete(gen);
			return ResponseEntity.status(HttpStatus.OK).body(true);
		}catch(Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(false);	
		}
	}
	
	@PostMapping("/genero")
	public ResponseEntity<Genero> salverGenero(@RequestBody Genero genero) {
		return ResponseEntity.status(HttpStatus.CREATED).body(repo.save(genero));
	}
	
	@PutMapping("/genero/{idGenero}")
	public ResponseEntity<Genero> editarGenero(@PathVariable("idGenero") long id, @RequestBody Genero gener) {
		Optional<Genero> opt = repo.findById(id);
		try {
			Genero genero = opt.get();
			genero.setNome(gener.getNome());
			genero.setStatus(gener.getStatus());
			return ResponseEntity.status(HttpStatus.OK).body(genero);
		}catch(Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);	
		}
	}
	
	@PatchMapping("/genero/{idGenero}")
	public ResponseEntity<Genero> desativarGenero(@PathVariable("idGenero") long id, @RequestBody Genero gener) {
		Optional<Genero> opt = repo.findById(id);
		try {
			Genero genero = opt.get();
			genero.setStatus(gener.getStatus());
			return ResponseEntity.status(HttpStatus.OK).body(genero);
		}catch(Exception e) {
			return ResponseEntity.status(HttpStatus.CREATED).body(null);
		}
		
		
	}
}