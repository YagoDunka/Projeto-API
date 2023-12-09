package com.example.API.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.API.entities.Filme;

@Repository
public interface FilmeRepository extends JpaRepository<Filme, Long> {

}