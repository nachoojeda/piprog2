-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: catalogo
-- ------------------------------------------------------
-- Server version	5.7.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `fecha` date NOT NULL,
  `foto` varchar(500) DEFAULT NULL,
  `contrasenia` varchar(300) NOT NULL,
  `dni` int(11) NOT NULL,
  `id_producto` int(11) DEFAULT NULL,
  `seguidores` int(11) DEFAULT NULL,
  `id_comentario` int(11) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `remember_token` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Ignacio','Ojeda','io@udesa.com','IO35','1999-03-20','https://es.wikipedia.org/wiki/John_Frusciante','123',41605023,1,1,1,NULL,NULL,NULL),(2,'Segundo','Benito','sb@udesa.com','SB23','2002-04-10','https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg','12345',43988584,1,1,1,NULL,NULL,NULL),(3,'Ignacio','Vecellio','iojedavecellio@udesa.edu.ar','io','2022-06-17','https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0113970700_fen_ins_frt_1_rr.jpg','123',123,NULL,NULL,NULL,'2022-06-17','2022-06-17',NULL),(4,'Ignacio','Vecellio','iojedavecellio@udesa.edu.ar','io','2022-06-11','https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0113970700_fen_ins_frt_1_rr.jpg','123',2,NULL,NULL,NULL,'2022-06-17','2022-06-17',NULL),(5,'Ignacio','Vecellio','iojedavecellio@udesa.edu.ar','io','2022-06-17','https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0113970700_fen_ins_frt_1_rr.jpg','$2a$10$KKDVubYrq/3.NMFgzp2NQ.N/Fdg/O00sk9.oV.jbWAQ33MZzt66IO',1,NULL,NULL,NULL,'2022-06-17','2022-06-17',NULL),(6,'Ignacio','Vecellio','iojedavecellio@udesa.edu.ar','io','2022-06-17','https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0113970700_fen_ins_frt_1_rr.jpg','$2a$10$3agF4jhjmbfqXuMqgpPpMOC2LFYKFHzAZEMnCd2jn5wHiNK7eRNiS',1,NULL,NULL,NULL,'2022-06-17','2022-06-17',NULL),(7,'Ignacio','Vecellio','iojedavecellio@udesa.edu.ar','SW','2022-06-18','https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0113970700_fen_ins_frt_1_rr.jpg','$2a$10$dumdOX2oLywE0mRWoLduuOLt8GoPY6/hED9sbwzAKDYBJ5IXUZ/dS',1,NULL,NULL,NULL,'2022-06-17','2022-06-17',NULL),(8,'Ignacio','Vecellio','iojedavecellio@udesa.edu.ar','SA','2022-06-18','https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0113970700_fen_ins_frt_1_rr.jpg','b',1,NULL,NULL,NULL,'2022-06-17','2022-06-17',NULL),(9,'Segundo','Benito','sb@udesa.com','segundo','2002-04-10','https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg','$2a$10$IlpZqDpQS1wb3BDi33OJ2uB0.znzfWXELeh1hCAuKIfBx4bKJXxRK',123,NULL,NULL,NULL,'2022-06-17','2022-06-17',NULL),(10,'a','a','a@udesa.com','a','2022-06-17','https://static.wikia.nocookie.net/disney/images/3/34/Mate.png/revision/latest?cb=20140131093119&path-prefix=es','b',1,NULL,NULL,NULL,'2022-06-17','2022-06-17',NULL),(11,'c','c','c@c.com','c','2022-06-17','https://i.pinimg.com/550x/5a/f0/c2/5af0c277c804fc80b95438849c762b98.jpg','$2a$10$79fFUI1YzBWjSZ425Szdy.smIzSAlOjV6HzH.ajmdmKqVSCXETXii',1,NULL,NULL,NULL,'2022-06-17','2022-06-17',NULL),(12,'d','d','d@d.com','d','2022-06-17','https://www.clarin.com/img/2021/06/16/cada-dia-un-poco-mas___Y-9qM7yOM_1256x620__2.jpg#1623875026624','a',1,NULL,NULL,NULL,'2022-06-17','2022-06-17',NULL),(13,'k','k','k@k.com','k','2022-06-17','https://media.revistavanityfair.es/photos/60e82da4bb9e71d46fd8bef1/master/w_1600%2Cc_limit/241472.jpg','a',1,NULL,NULL,NULL,'2022-06-17','2022-06-17',NULL),(14,'s','s','s@s.com','s','2022-06-17','https://historia-biografia.com/wp-content/uploads/2018/06/Biograf%C3%ADa-14.jpg','o',1,NULL,NULL,NULL,'2022-06-17','2022-06-17',NULL),(15,'q','q','q@q.com','q','2022-06-17','https://upload.wikimedia.org/wikipedia/commons/0/0a/Eric_Clapton_-_Royal_Albert_Hall_-_Wednesday_24th_May_2017_EricClaptonRAH240517-30_%2834987232355%29_%28cropped%29.jpg','$2a$10$LK9WIzgja.LwUQIwi8LXrOXfDJuUA4PDAlhCHBx8kMGkQ4OeQaauG',1,NULL,NULL,NULL,'2022-06-17','2022-06-17',NULL),(16,'pa','p','p@p.com','p','2022-06-17','https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0113970700_fen_ins_frt_1_rr.jpg','$2a$10$NiRai1nkmQf28aDV1lZgfOL5XcWyfoPIi49HnZZGyb9HxzI.9BJze',1,NULL,NULL,NULL,'2022-06-17','2022-06-17',NULL),(17,'pi','i','i@i.com','i','2022-06-17','https://i.pinimg.com/550x/5a/f0/c2/5af0c277c804fc80b95438849c762b98.jpg','$2a$10$D1qG8hbArLokoqcXZUxhKe4KYnOv4oOLDaM3ebmbAxLq8lJha5Qtm',1,NULL,NULL,NULL,'2022-06-17','2022-06-17',NULL),(18,'w','w','w@w.com','wq','2022-06-17','https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0193982719_fen_ins_frt_1_rl.jpg','$2a$10$K.L5grnpRkk7lpgqlAMTN.GqOW91mu8iOiqR5HNZcSD4kb6re8r8S',1,NULL,NULL,NULL,'2022-06-17','2022-06-17',NULL),(19,'pe','pe','pe@pe.com','pe','2022-06-19','https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg','pepe',1,NULL,NULL,NULL,'2022-06-17','2022-06-17',NULL),(21,'x','x','x@x.com','x','2022-06-18','foto-1655588752583.jpeg','$2a$10$rjSebBLHidUhEt27auLTY.eezePzeWQWA2icPJ7ih6YUR27r14PL6',0,18,NULL,5,'2022-06-18','2022-06-18','0'),(22,'Clari','Zembo','CZ@gmail.com','Clarita<3','2003-01-20','foto-1655671954011.jpeg','$2a$10$HybOriY0ntBo/.ibkt528upNdSQhim5KTKH4CLbvB0qDM5dRK0TUy',1233,NULL,NULL,NULL,'2022-06-19','2022-06-19','0'),(23,'Ignacio','Vecellio','iojedavecellio@udesa.edu.ar','x','2022-06-30','foto-1655742733712.png','$2a$10$KhMCYZyoA8PuDXCtBmjSWu.ngt.ehV.Tb9nVau/e48855ZDNBC6zm',1,NULL,NULL,NULL,'2022-06-20','2022-06-20','0'),(24,'Ignacio','Vecellio','iojedavecellio@udesa.edu.ar','x','2022-06-25','foto-1655743322485.png','$2a$10$q.Hsamu1T8cr8MjYz4rGuOdDXFewCB7HNRgfPMJV23vmL.2NZE7yS',1,NULL,NULL,NULL,'2022-06-20','2022-06-20','0'),(25,'pepe','pepe','pepe@pepe.com','pepe','2022-06-20','foto-1655749735059.png','$2a$10$MX105ANNzwVeDkNX7SZMmOu0HYiPn2yKfR/1IIHpUVgSXAvGHGkpS',1,NULL,NULL,NULL,'2022-06-20','2022-06-20','0'),(26,'a','a','a@udesa.com','a','2022-06-18','foto-1655753924855.jpg','$2a$10$kI5dXs0VOgz84uKDpfMpTulFNFI8WU67WpasFJGLJS9N.NJBha7G2',1,NULL,NULL,NULL,'2022-06-20','2022-06-20','0'),(27,'qq','qq','qq@udesa.edu.ar','qq','2022-06-20','foto-1655753973623.jpg','$2a$10$bYhiciFtOtZLE.ZafcLy4.QCpRtGBbN1UpB/tReSocPh8PAe7/1wi',1,NULL,NULL,NULL,'2022-06-20','2022-06-20','0'),(28,'Ignacio','Vecellio','iojedavecellio@udesa.edu.ar','ll','2022-06-11','foto-1655760424746.PNG','$2a$10$xfjNdgmIOEEN4F5egGBLPOYeUR1yfh4HzSabXdDXCYIqfV6wSYqIC',1,NULL,NULL,NULL,'2022-06-20','2022-06-20','0'),(29,'Ignacio','Vecellio','iojedavecellio@udesa.edu.ar','pepe','2022-06-26','foto-1655760457728.PNG','$2a$10$vPZw7vJ9m.I3ZHX3bD8n1OAftDa8UiC69n439uUmszVvjZ7lmtpAi',1,NULL,NULL,NULL,'2022-06-20','2022-06-20','0');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-21  1:43:38
