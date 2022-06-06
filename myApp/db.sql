drop database movies_db;
drop database moviesdb;
drop database db_piprog2;
use db ;
create database db;
use db;
create table products(
id int unsigned auto_increment primary key,
titulo varchar(200) not null,
nombre int not null,
descripcion int,
img varchar(200) null
);
create table users(
id int unsigned auto_increment primary key,
email varchar(200) not null,
usuario int not null,
fecha date not null,
img varchar(200) null,
contrasenia numeric);

create table comentarios(
id int unsigned auto_increment primary key,
nombre int not null,
texto varchar(200) not null,
fotoDePerfil varchar(200) null
);

