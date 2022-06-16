CREATE SCHEMA catalogo ;

USE catalogo 

/*Creanddo tabla de usuarios*/

CREATE TABLE usuarios (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT, 
nombre			VARCHAR(50) NOT NULL ,
apellido 		VARCHAR(50) NOT NULL ,
email 			VARCHAR(50) NOT NULL ,
usuario 		VARCHAR(50) NOT NULL ,
fecha 			DATE 		NOT NULL,
foto 			VARCHAR(300)NULL,
contrasenia 	VARCHAR(50) NOT NULL,
dni 			INT NOT NULL,
productos 		INT NULL,
seguidores 		INT NULL,
comentarios		INT NULL,
created_at 		DATE NULL,
updated_at		DATE NULL
)

/*Creanddo tabla de productos*/

CREATE TABLE productos (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT, 
titulo VARCHAR(50) NOT NULL,
descripcion VARCHAR(500) NOT NULL,
foto VARCHAR(300) NOT NULL,
id_usuario INT UNSIGNED NOT NULL,
created_at 		DATE NULL,
updated_at		DATE NULL,

FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
)

/*Creanddo tabla de comentarios*/

CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT, 
texto VARCHAR(500) NOT NULL,
id_usuario INT UNSIGNED NOT NULL,
id_producto INT UNSIGNED NOT NULL,
created_at 		DATE NULL,
updated_at		DATE NULL,

FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
FOREIGN KEY (id_producto) REFERENCES productos(id)
)

/*Creanddo tabla de seguidores*/

CREATE TABLE seguidores (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT, 
id_usuario_seguidor INT UNSIGNED NOT NULL,
id_usuario_seguido INT UNSIGNED NOT NULL,

FOREIGN KEY (id_usuario_seguidor) REFERENCES usuarios(id),
FOREIGN KEY (id_usuario_seguido) REFERENCES usuarios(id)
)

/*Insertando datos en la tabla de usuarios*/

INSERT INTO usuarios (id,nombre, apellido, email, usuario, fecha, foto, contrasenia, dni, productos, seguidores, comentarios)
VALUES (DEFAULT, 'Ignacio', 'Ojeda', 'io@udesa.com', 'IO35', '1999-03-20','https://es.wikipedia.org/wiki/John_Frusciante' , '123', '41605023', 1, 1, 1 )

INSERT INTO usuarios (id,nombre, apellido, email, usuario, fecha, foto, contrasenia, dni, productos, seguidores, comentarios)
VALUES (DEFAULT, 'Segundo', 'Benito', 'sb@udesa.com', 'SB23', '2002-04-10','https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg' , '12345', '43988584', 1, 1, 1 )

/*Insertando datos en la tabla de productos*/

INSERT INTO productos (id, titulo, descripcion, foto, id_usuario)
VALUES (DEFAULT, 'Fender Stratocaster','American Professional II','https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0113900755_fen_ins_frt_1_rr.jpg', 1)

INSERT INTO productos (id, titulo, descripcion, foto, id_usuario)
VALUES (DEFAULT, 'Fender Stratocaster','Noventa','https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0140922357_fen_ins_frt_1_rr.jpg', 1)

INSERT INTO productos (id, titulo, descripcion, foto, id_usuario)
VALUES (DEFAULT, 'Fender Telecaster','American Professional II Telecaster® Left-Hand','https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0113952718_fen_ins_frt_1_rl.jpg', 1)

/*Insertando datos en la tabla de comentarios*/

INSERT INTO comentarios (id, texto, id_usuario, id_producto)
VALUES (DEFAULT, 'Me encanta!',1, 1)

INSERT INTO comentarios (texto, id_usuario, id_producto)
VALUES ('Me gusto!',1, 1)

INSERT INTO comentarios (texto, id_usuario, id_producto)
VALUES ('Me encanta!',1, 1)

/*Insertando datos en la tabla de seguidores*/

INSERT INTO seguidores (id_usuario_seguidor, id_usuario_seguido) 
VALUES ('1', '1');

INSERT INTO seguidores (id_usuario_seguidor, id_usuario_seguido) 
VALUES ('2', '2');



<% for (let i = 0; i < comments.length ; i++) { %>
					<section class="comments">
					<a href="/users/profile">
						<article > 
							<img src= <%= comments[i].fotoDePerfil %>  alt="">
							<div class="data"> 
								<p class="user">
								<strong><%= comments[i].nombre %> </a> </strong>
							<%= comments[i].texto %> </p>
							</div>
						</article>
						<% } %>