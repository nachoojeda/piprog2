CREATE SCHEMA esquema;

USE esquema;

/*Creando Tablas*/

CREATE TABLE `esquema`.`product` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(50) NOT NULL,
  `descripcion` VARCHAR(500) NOT NULL,
  `foto` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `esquema`.`product` 
RENAME TO  `esquema`.`products` ;


CREATE TABLE users (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(50) NOT NULL,
apellido VARCHAR(50) NOT NULL,
email VARCHAR(100) NOT NULL,
usuario VARCHAR(50) NOT NULL,
fecha DATE NOT NULL,
foto VARCHAR(300) NULL,
contrasenia VARCHAR(100) NOT NULL,
dni INT NOT NULL
);

CREATE TABLE `esquema`.`comments` (
  `id` INT NOT NULL UNSIGNED AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `texto` VARCHAR(500) NOT NULL,
  `foto` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`id`)
  );

  /*Creando Tablas Pivot*/

  CREATE TABLE `esquema`.`users_comments` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_users` INT NOT NULL,
  `id_comments` INT NOT NULL,
  PRIMARY KEY (`id`));

  CREATE TABLE `esquema`.`users_products` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_user` INT NOT NULL,
  `id_product` INT NOT NULL,
  PRIMARY KEY (`id`));



/* Insertando Datos en Registros*/

/*users*/
  INSERT INTO users (id,nombre,apellido,email,usuario,fecha,foto,contrasenia,dni)
VALUES (DEFAULT, 'Nacho','Ojeda','no@udesa.com','nachoojeda','1999-03-20','https://elpais.com/cultura/2019/12/16/actualidad/1576491116_371875.html','12345','41605023') ;

INSERT INTO users (id,nombre,apellido,email,usuario,fecha,foto,contrasenia,dni)
VALUES (DEFAULT, 'Segundo','Benito','sb@udesa.com','segundobenito','2002-04-10','https://www.abc.es/cultura/cultural/abci-jimi-hendrix-jardin-delicias-202009230042_noticia.html','12345','41605789') ;

INSERT INTO users (id,nombre,apellido,email,usuario,fecha,foto,contrasenia,dni)
VALUES (DEFAULT, 'Franco','Ferraro','FF@udesa.com','francoferraro','2002-01-10','https://www.latercera.com/culto/2020/02/11/las-memorias-de-flea-acid-for-the-children/','12345','51634789') ;

/*prodocuts*/

INSERT INTO products (id,titulo,descripcion,foto)
VALUES (DEFAULT, 'Fender Stratocaster','American Professional II','https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0113900755_fen_ins_frt_1_rr.jpg') ;

INSERT INTO products (id,titulo,descripcion,foto)
VALUES (DEFAULT, 'Fender Telecaster','American Ultra','https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0118032795_gtr_frt_001_rr.jpg') ;

INSERT INTO products (id,titulo,descripcion,foto)
VALUES (DEFAULT, 'Fender Jaguar','Vintera 60s','https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0149753305_gtr_frt_001_rr.jpg') ;

/*comments*/

INSERT INTO comments (id,nombre,texto,foto)
VALUES (DEFAULT, 'Nacho','Muy buena!','https://elpais.com/cultura/2019/12/16/actualidad/1576491116_371875.html') ;

INSERT INTO comments (id,nombre,texto,foto)
VALUES (DEFAULT, 'Segundo','Muy mala!','https://www.abc.es/cultura/cultural/abci-jimi-hendrix-jardin-delicias-202009230042_noticia.html') ;

INSERT INTO comments (id,nombre,texto,foto)
VALUES (DEFAULT, 'Franco','Preciosa!','https://www.latercera.com/culto/2020/02/11/las-memorias-de-flea-acid-for-the-children/') ;

/*pivot user_comment*/

INSERT INTO `esquema`.`users_comments` (`id_users`, `id_comments`) VALUES ('1', '1');

INSERT INTO `esquema`.`users_comments` (`id_users`, `id_comments`) VALUES ('2', '2');

INSERT INTO `esquema`.`users_comments` (`id_users`, `id_comments`) VALUES ('3', '3');

/*pivot user_product*/

INSERT INTO `esquema`.`users_products` (`id_user`, `id_product`) VALUES ('1', '3');

INSERT INTO `esquema`.`users_products` (`id_user`, `id_product`) VALUES ('2', '1');

INSERT INTO `esquema`.`users_products` (`id_user`, `id_product`) VALUES ('3', '2');





