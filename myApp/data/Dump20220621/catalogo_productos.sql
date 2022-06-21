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
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `foto` varchar(300) NOT NULL,
  `id_usuario` int(10) unsigned DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `id_comentario` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productos_ibfk_1` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (18,'Fender Bass','Troy Sanders Jaguar® Bass','foto-1655680845610.jpeg',21,'2022-06-18','2022-06-19',5),(19,'Fender Bass','Player Jaguar® Bass','foto-1655783930756.jpeg',NULL,'2022-06-18','2022-06-21',NULL),(20,'Fender Stratocaster','American Professional II Stratocaster® HSS','foto-1655680873343.jpeg',NULL,'2022-06-18','2022-06-19',NULL),(21,'Gibson Les Paul','Les Paul Standard \'50s','foto-1655589443024.png',NULL,'2022-06-18','2022-06-18',NULL),(22,'Gibson Les Paul','Les Paul Classic','foto-1655589476571.png',NULL,'2022-06-18','2022-06-18',15),(23,'Gibson Flying V','70s Flying V','foto-1655590747158.png',NULL,'2022-06-18','2022-06-18',NULL),(24,'Gibson Explorer','Johnny Winter 1964 Firebird V','foto-1655589565148.png',NULL,'2022-06-18','2022-06-18',NULL),(25,'Fender Stratocaster','American Ultra Stratocaster®','foto-1655751734142.jpeg',NULL,'2022-06-30','2022-06-20',NULL),(26,'Nach','F','foto-1655753456582.jpeg',25,'2022-06-20','2022-06-20',NULL),(27,'x','x','foto-1655753537095.jpeg',21,'2022-06-20','2022-06-20',NULL),(32,'Nach','American Professional II Jazzmaster®','foto-1655766839741.png',25,'2022-06-20','2022-06-20',NULL),(33,'x','x','foto-1655766881061.jpeg',21,'2022-06-20','2022-06-20',NULL);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-21  1:43:39
