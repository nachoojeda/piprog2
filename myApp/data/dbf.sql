CREATE SCHEMA `catalogo` ;

USE catalogo 

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
createdAt 		DATE NULL,
updatedAt		DATE NULL
)


CREATE TABLE productos (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT, 

titulo VARCHAR(50) NOT NULL,
descripcion VARCHAR(500) NOT NULL,
foto VARCHAR(300) NOT NULL,
id_usuario INT UNSIGNED NOT NULL,
createdAt 		DATE NULL,
updatedAt		DATE NULL,

FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
)

CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT, 

texto VARCHAR(500) NOT NULL,
id_usuario INT UNSIGNED NOT NULL,
id_producto INT UNSIGNED NOT NULL,
createdAt 		DATE NULL,
updatedAt		DATE NULL,

FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
FOREIGN KEY (id_producto) REFERENCES productos(id)
)


CREATE TABLE seguidores (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT, 
id_usuario_seguidor INT UNSIGNED NOT NULL,
id_usuario_seguido INT UNSIGNED NOT NULL,

FOREIGN KEY (id_usuario_seguidor) REFERENCES usuarios(id),
FOREIGN KEY (id_usuario_seguido) REFERENCES usuarios(id)

)


INSERT INTO usuarios (id,nombre, apellido, email, usuario, fecha, foto, contrasenia, dni, productos, seguidores, comentarios)

VALUES (DEFAULT, 'Ignacio', 'Ojeda', 'io@udesa.com', 'IO35', '1999-03-20','https://es.wikipedia.org/wiki/John_Frusciante' , '123', '43988584', 1, 1, 1 )
