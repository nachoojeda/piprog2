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
contrasenia 	VARCHAR(300) NOT NULL,
dni 			INT NOT NULL,
productos 		INT NULL,
seguidores 		INT NULL,
comentarios		INT NULL,
created_at 		DATE NULL,
updated_at		DATE NULL,
remember_toke VARCHAR(45) NULL
)

/*Creanddo tabla de productos*/

CREATE TABLE productos (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT, 
titulo VARCHAR(50) NOT NULL,
descripcion VARCHAR(500) NOT NULL,
foto VARCHAR(300) NOT NULL,
id_usuario INT UNSIGNED NULL,
created_at 		DATE NULL,
updated_at		DATE NULL,

FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
)

/*Creanddo tabla de comentarios*/

CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT, 
texto VARCHAR(500) NOT NULL,
id_usuario INT UNSIGNED  NULL,
id_producto INT UNSIGNED  NULL,
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
VALUES (DEFAULT, 'Fender Stratocaster','Noventa','https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0140922357_fen_ins_frt_1_rr.jpg', 1);

INSERT INTO productos (id, titulo, descripcion, foto, id_usuario)
VALUES (DEFAULT, 'Fender Telecaster','American Professional II Telecaster® Left-Hand','https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0113952718_fen_ins_frt_1_rl.jpg', 1)

/*Insertando datos en la tabla de comentarios*/

INSERT INTO comentarios (id, texto, id_usuario, id_producto)
VALUES (DEFAULT, 'Me encanta!',1, 1);

INSERT INTO comentarios (texto, id_usuario, id_producto)
VALUES ('Me gusto!',1, 1);

INSERT INTO comentarios (texto, id_usuario, id_producto)
VALUES ('Me encanta!',1, 1)

/*Insertando datos en la tabla de seguidores*/

INSERT INTO seguidores (id_usuario_seguidor, id_usuario_seguido) 
VALUES ('1', '1');

INSERT INTO seguidores (id_usuario_seguidor, id_usuario_seguido) 
VALUES ('2', '2');


/* product.ejs */
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


/* productController.js */

						showOne : (req,res) => {
    let buscada = req.query.pelicula;
    movie.findOne({
      where : 
      /* { title : buscada} */
      { title : {[op.like] : "%" + buscada
      }}

    }).then((result) => {
      res.send(result)
    })
  }

/* profile.ejs */

  <div class="container products-wrapper">
		<div class="row">
			<div class="col-12">
				<h2 class="products-title">Mis productos</h2>
			</div>
			<!-- Show mis productos -->
			<% for (let i = 0; i < 5; i++) { %>
				<div class="col-12 col-sm-6 col-lg-3">
				<section class="product-box">
					<a href="/product/product">
						<figure class="product-box_image">
							<img src="<%=productos[i].imagen %> " alt="imagen de">
						</figure>
						<article class="product-box_data">
							<h2> <%= productos[i].nombre  %> </h2>
							<p><%=productos[i].descripcion %> </p>
							<p><%=productos[i].fecha %></p>
						</article>
					</a>
				</section>
			</div>
		<% } %>

/* profileController */

		  let passHashed = bcryptjs.hashSync(info.contrasenia , 10)