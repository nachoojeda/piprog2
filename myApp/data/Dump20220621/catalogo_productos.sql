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
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (66,'Fender Stratocaster','American Professional II Stratocaster® HSS','foto-1655929109675.jpeg',46,'2022-06-22','2022-06-22',NULL),(67,'Fender Stratocaster','American Ultra Stratocaster®','foto-1655929150337.jpeg',45,'2022-06-22','2022-06-22',NULL),(68,'Fender Stratocaster','American Professional II Jazzmaster®','foto-1655929207799.jpeg',47,'2022-06-22','2022-06-22',NULL),(70,'Fender Stratocaster','Player Plus Stratocaster®','foto-1655929324825.jpeg',46,'2022-06-22','2022-06-22',NULL),(71,'Gibson Flying V','70s Flying V','foto-1655931000008.png',45,'2022-06-22','2022-06-22',NULL),(72,'Gibson Explorer','\'60s','foto-1655930005748.png',47,'2022-06-22','2022-06-22',NULL),(73,'Gibson Les Paul','Les Paul Classic','foto-1655930037093.png',46,'2022-06-22','2022-06-22',NULL),(74,'Gibson Les Paul','Les Paul Standard \'50s','foto-1655930107072.png',45,'2022-06-22','2022-06-22',NULL),(75,'Taylor','GT Taylor GT','foto-1655930133299.png',47,'2022-06-22','2022-06-22',NULL),(76,'Taylor','300 Grand Concert','foto-1655930167574.png',46,'2022-06-22','2022-06-22',NULL),(77,'Taylor','Academy 10e','foto-1655932329910.png',45,'2022-06-22','2022-06-22',NULL),(78,'Taylor','\'73s','guitardef.jpeg',47,'2022-06-22','2022-06-22',NULL);
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

-- Dump completed on 2022-06-22 18:38:46
