-- MySQL dump 10.13  Distrib 8.0.28, for macos10.15 (x86_64)
--
-- Host: localhost    Database: test
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (2,'editor','editor','2022-09-28 14:35:49','2022-09-29 13:46:53'),(4,'editor','editor','2022-09-29 13:47:37','2022-09-29 13:47:37'),(5,'editor_1','editor','2022-09-29 13:48:29','2022-09-29 13:48:29'),(6,'','','2022-09-29 14:06:03','2022-09-29 14:06:03'),(7,'','','2022-09-29 14:07:19','2022-09-29 14:07:19');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `value` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `value` (`value`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,NULL,'2022-09-26 17:40:23','2022-09-26 17:40:23'),(2,'admin','2022-09-26 17:40:23','2022-09-26 17:40:23');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT 'user',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'fl333','$2b$07$40Gos9b1zgGD0wqiLOf5P.PkJsdYKniE0.8MWzBZrjj/jz5O4sUkS','[null]','2022-09-26 18:46:46','2022-09-26 18:46:46'),(2,'artem','$2b$07$O0mWqmvErGWZ3JpngyHH.eZoX7TKCoTsKu1GB6aV3gRGxlH5En/FO','[null]','2022-09-27 08:14:30','2022-09-27 08:14:30'),(3,'artem_2','$2b$07$..po0orQ3dOf1G.M3LiIzercFMLnpOUTHiYhah6IcgXbsy72KM0bW','[null]','2022-09-27 08:41:06','2022-09-27 08:41:06'),(4,'artem_2_2','$2b$07$eYhHVjiXcuyPCSizDENXLOxPNf99CJRRK9I8FWfcN8DEv2Iqvnsy6','[null]','2022-09-27 08:54:12','2022-09-27 08:54:12'),(5,'admin','$2b$07$l1QC/I/uoS3J2zjzWQ7pru2vD3OLH1Epi6XPOd5f0vi0OvGBp.FrK','admin','2022-09-27 09:15:24','2022-09-29 13:58:04'),(6,'user','$2b$07$rp.n2hKaxxoobnmwlA.JSeCR3wY8BKQIYRSrfOHNRMrLqru66id/W','[null]','2022-09-27 10:28:43','2022-09-27 10:28:43'),(7,'user__1','$2b$07$Oz4Grqx7myj8.GkHMBuqMOia21YqULXb5.gz63EmHMpBKaX5i1jD6','user','2022-09-27 10:33:19','2022-09-27 10:33:19'),(8,'1user__1','$2b$07$YeR/.NCu4xVbxZ3yCHmpKOpOM6aGEVb6coO14YXZOgucOUQTkFCf.','{\"id\":7,\"username\":\"user__1\",\"password\":\"$2b$07$Oz4Grqx7myj8.GkHMBuqMOia21YqULXb5.gz63EmHMpBKaX5i1jD6\",\"role\":\"user\",\"createdAt\":\"2022-09-27T10:33:19.000Z\",\"updatedAt\":\"2022-09-27T10:33:19.000Z\"}','2022-09-27 10:44:39','2022-09-27 10:44:39'),(9,'11user__1','$2b$07$1xdRebrP4RDUqGCgrrneputFNCLXAMQ83oYT0kB7TmOjN5C8F6wIW','user','2022-09-27 10:46:51','2022-09-27 10:46:51'),(10,'111user__1','$2b$07$caOsTh/yFZZR2oTNEgJx9uSvX5LJKYre5NO74/sQe9vVgv.YQOHt.','user','2022-09-27 10:49:19','2022-09-27 10:49:19'),(11,'fil','$2b$07$QiGsQN2ggI6t.a4obDoBQecqxdNGxNMioL5wsNxgBeM6.kj5vgSa6','admin','2022-09-27 12:17:07','2022-09-27 12:17:07'),(12,'filip','$2b$07$iImLBfJcDW55d4RAazJWgOz61rCcJz07NCyJ7.OSTDIQmiQ9y/8Ii','user','2022-09-27 12:20:22','2022-09-27 12:20:22'),(13,'filipP','$2b$07$l0/0IO88X3LF7/bAn.il0u13Y91znRIqd/iHMz2sx8I.aujNiuZS2','user','2022-09-27 14:08:48','2022-09-27 14:08:48'),(14,'admin_admin','$2b$07$JMnM5aoIk.if/HaSuX4z/Oz8J0oGB.xFo3y/vHdbENzMP0sz.iXQK','user','2022-09-27 14:16:45','2022-09-27 14:16:45'),(15,'lippil','$2b$07$88KA2hXA52vnUqf8LRu2M.hskJ3P5Mx/VjgYnmyHdzse5LNUaEh3C','user','2022-09-29 13:13:32','2022-09-29 13:13:32'),(16,'lippil_admin','$2b$07$ghzzvDVjDiHcv4Vehl7VUO6.tDWzziu4olBEw9u12yA3HsIQx2YZO','user','2022-09-29 13:17:29','2022-09-29 13:17:29'),(17,'lippil_admn','$2b$07$x9X2izlniIph7hfSHPv3KuD.d3aFF2b2t19R8DA/8wr1OlfKp8y/a','user','2022-09-29 13:20:23','2022-09-29 13:20:23'),(18,'lippil_adn','$2b$07$wPKCb9JO2/RmnZ7sUpwBQeN2wNKPGgYtb8vf7HxNVyGLRXqjja7De','admin','2022-09-29 13:20:52','2022-09-29 13:20:52'),(20,'editor','$2b$07$/kThKuZdOLFj15WSQLtkr..Z0qocubfUl2YEXcgo4PN9No.E/zqJi','editor','2022-09-29 13:36:38','2022-09-29 13:36:38'),(21,'Вася Пупкин','$2b$07$CgnZ762vYoQJuMYZbvYeieu6DPoGwOmYmenXr7/cpCqMFEwtzgaKu','user','2022-10-02 10:43:00','2022-10-02 10:43:00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-04 15:33:44
