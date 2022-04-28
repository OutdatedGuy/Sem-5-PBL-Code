-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: taxi_management_system
-- ------------------------------------------------------
-- Server version	8.0.27


--
-- Table structure for table `taxi`
--

-- DROP TABLE IF EXISTS `taxi`;
CREATE TABLE IF NOT EXISTS `taxi` (
  `taxi_id` int NOT NULL AUTO_INCREMENT,
  `driver_id` int DEFAULT NULL,
  `ac` int DEFAULT NULL,
  `license_number` varchar(20) DEFAULT NULL,
  `registration_number` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`taxi_id`),
  KEY `driver_id` (`driver_id`),
  CONSTRAINT `taxi_ibfk_1` FOREIGN KEY (`driver_id`) REFERENCES `driver` (`driver_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- Dump completed on 2022-04-11 12:49:16
