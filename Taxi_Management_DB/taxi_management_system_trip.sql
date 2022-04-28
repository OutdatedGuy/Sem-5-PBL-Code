-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: taxi_management_system
-- ------------------------------------------------------
-- Server version	8.0.27


--
-- Table structure for table `trip`
--

-- DROP TABLE IF EXISTS `trip`;
CREATE TABLE IF NOT EXISTS `trip` (
  `trip_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `driver_id` int DEFAULT '1',
  `startPlace` varchar(20) DEFAULT NULL,
  `endPlace` varchar(20) DEFAULT NULL,
  `startTime` datetime DEFAULT NULL,
  `ac` int DEFAULT '2',
  `fare` float DEFAULT '0',
  `status` int DEFAULT '2',
  PRIMARY KEY (`trip_id`),
  KEY `user_id` (`user_id`),
  KEY `driver_id` (`driver_id`),
  CONSTRAINT `trip_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `trip_ibfk_2` FOREIGN KEY (`driver_id`) REFERENCES `driver` (`driver_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- Dump completed on 2022-04-11 12:49:16
