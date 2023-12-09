insert into genero(id,nome,status) values (1, 'aventura, épico, fantasia', true);
insert into genero(id,nome,status) values (2, 'comédia dramática', true);
insert into genero(id,nome,status) values (3, 'ação, aventura,suspense', true);

insert into filme(id,genero_id,titulo,nota,descricao) values(1, 1,'O Senhor dos Anéis: A Sociedade do Anel', 10, ' Filme de fantasia dirigido por Peter Jackson e baseado no primeiro volume da série O Senhor dos Anéis, de J. R. R. Tolkien.');
insert into filme(id,genero_id,titulo,nota,descricao) values(2, 2,'Forrest Gump', 10, ' Filme norte-americano de 1994, dirigido por Robert Zemeckis, com roteiro de Eric Roth, baseado no romance homônimo de Winston Groom.');
insert into filme(id,genero_id,titulo,nota,descricao) values(3, 3, 'Batman Begins', 10, 'filme de super-herói de 2005, dirigido por Christopher Nolan. O roteiro foi baseado no personagem Batman, da DC Comics, principalmente em duas histórias em quadrinhos clássicas da sua série, como Batman: Year One e Batman: The Long Halloween.')