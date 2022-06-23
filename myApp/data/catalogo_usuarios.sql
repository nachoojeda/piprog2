CREATE DATABASE  IF NOT EXISTS `catalogo` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `catalogo`;
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
  `id_seguidor` int(11) DEFAULT NULL,
  `id_comentario` int(11) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `remember_token` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (45,'Nacho','Ojeda','no@udesa.com','Nachin','1999-03-20','foto-1655928912789.jpg','$2a$10$L2LQ2XffQsTALsJNrxRIm.etz3pcVTZyxsAxpGIj1b03sVz12860.',41605023,NULL,NULL,NULL,'2022-06-22','2022-06-22','0'),(46,'Segundo','Benito','sb@udesa.com','Seggy','2002-04-10','foto-1655928972404.webp','$2a$10$Z49s3NLu7D713MCqau5g1uUcAc.5Ct.768iX4vplQ29ZBdvaNudfa',123456789,NULL,NULL,NULL,'2022-06-22','2022-06-22','0'),(47,'Franco','Ferrero','FF@udesa.com','Frank','2000-01-01','foto-1655929037325.jpeg','$2a$10$cYrNzu9m3Ek5bv92XwGIluQlFAdK3zwMQtnIW38G5EPYCdjpIq8qa',987654321,NULL,NULL,NULL,'2022-06-22','2022-06-23','0');
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

-- Dump completed on 2022-06-23 14:33:23
