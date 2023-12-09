package com.example.API.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.API.entities.Filme;
import com.example.API.repositories.FilmeRepository;
 
@RestController
@CrossOrigin
public class FilmeController {
	@Autowired
	FilmeRepository repo;
	
	
	@GetMapping("/filmes")
	public ResponseEntity<List<Filme>> getFilmes() {
		return ResponseEntity.status(HttpStatus.OK).body(repo.findAll());
	}
	
	
	@GetMapping("/filmes/{idFilme}")
	public ResponseEntity<Filme> getFilme(@PathVariable("idFilme") Long id) {
		Optional<Filme> opt = repo.findById(id);
		try {
			Filme filme = opt.get();
			return ResponseEntity.status(HttpStatus.OK).body(filme);
		}catch(Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
	}
	
	
	
	@DeleteMapping("/filmes/{idFilme}")
	public ResponseEntity<Boolean> excluirFilme(@PathVariable("idFilme") Long id) {
		Optional<Filme> opt = repo.findById(id);
		try {
			Filme filme = opt.get();
		    repo.delete(filme);
			return ResponseEntity.status(HttpStatus.OK).body(true);
		}catch(Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(false);
		}
	}
	
	
	@PostMapping("/filmes")
	public ResponseEntity<Filme> salvarProduto(@RequestBody Filme filme) {
		return ResponseEntity.status(HttpStatus.CREATED).body(repo.save(filme));
	}
	
	
	@PutMapping("/filmes/{idFilme}")
	public ResponseEntity<Filme> editarFilme(@PathVariable("idFilme") Long id, @RequestBody Filme filme) {
			Optional<Filme> opt = repo.findById(id);
		try {
			Filme fil = opt.get();
			fil.setDescricao(filme.getDescricao());
			fil.setTitulo(filme.getTitulo());
			fil.setNota(filme.getNota());
			repo.save(fil);
			return ResponseEntity.status(HttpStatus.OK).body(fil);
		} catch(Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
	}
}