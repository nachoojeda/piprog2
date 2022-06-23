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
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `texto` varchar(500) NOT NULL,
  `id_usuario` int(10) unsigned DEFAULT NULL,
  `id_producto` int(10) unsigned DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comentarios_ibfk_1` (`id_usuario`),
  KEY `comentarios_ibfk_2` (`id_producto`),
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (24,'Muy mala',47,67,'2022-06-22','2022-06-22'),(25,'No me gusta Fender',47,66,'2022-06-22','2022-06-22'),(26,'Es la de Kurko',47,68,'2022-06-22','2022-06-22'),(27,'Que feo color',47,70,'2022-06-22','2022-06-22'),(28,'Mmmmm idk',46,67,'2022-06-22','2022-06-22'),(29,'Maybe...',46,66,'2022-06-22','2022-06-22'),(30,':/',46,68,'2022-06-22','2022-06-22'),(31,':$',46,70,'2022-06-22','2022-06-22'),(32,'YESSSSSSS',46,72,'2022-06-22','2022-06-22'),(33,'OH MY GOOOOSH!!!!!',46,71,'2022-06-22','2022-06-22'),(34,'YES DEFINITELY YES !!!',46,74,'2022-06-22','2022-06-22'),(35,'Green???? YAS',46,73,'2022-06-22','2022-06-22'),(36,'Mi primer guitarra <3',45,77,'2022-06-22','2022-06-22'),(37,'La de John ;)',45,75,'2022-06-22','2022-06-22'),(38,'Me gusta ',45,76,'2022-06-22','2022-06-22'),(39,'Deajjjjj',45,72,'2022-06-22','2022-06-22'),(40,'Incomoda',45,71,'2022-06-22','2022-06-22'),(41,'Aburrida',45,74,'2022-06-22','2022-06-22'),(42,'Malos pickups',45,73,'2022-06-22','2022-06-22'),(43,'Mi guitarra actual :D',45,67,'2022-06-22','2022-06-22'),(44,'Linda.. pero',45,66,'2022-06-22','2022-06-22'),(45,'Aguante Kurko!',45,68,'2022-06-22','2022-06-22'),(46,'Zafa',45,70,'2022-06-22','2022-06-22'),(47,'No hay foto?',45,78,'2022-06-22','2022-06-22'),(48,'Can\'t see no picture ...',46,78,'2022-06-22','2022-06-22'),(49,'Jejeje me olvide de cargarle una foto',47,78,'2022-06-22','2022-06-22'),(50,'Parece un ukelele',47,72,'2022-06-22','2022-06-22'),(51,'Esta la uso JFK?',47,71,'2022-06-22','2022-06-22'),(52,'Slash?????? ',47,74,'2022-06-22','2022-06-22'),(53,'Ehhh..',47,73,'2022-06-22','2022-06-22'),(54,'Buena madera',47,75,'2022-06-22','2022-06-22'),(55,'Fachera',47,77,'2022-06-22','2022-06-22'),(56,'Tipica',47,76,'2022-06-22','2022-06-22'),(57,'DAMN',46,75,'2022-06-22','2022-06-22'),(58,'Nahhh not for me',46,77,'2022-06-22','2022-06-22'),(59,'Boring',46,76,'2022-06-22','2022-06-22'),(60,'Es linda no?',45,67,'2022-06-23','2022-06-23');
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
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
