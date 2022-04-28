-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: taxi_management_system
-- ------------------------------------------------------
-- Server version	8.0.27


--
-- Table structure for table `driver`
--

-- DROP TABLE IF EXISTS `driver`;
CREATE TABLE IF NOT EXISTS `driver` (
  `driver_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(40) DEFAULT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `birth` date DEFAULT NULL,
  `mail` varchar(60) DEFAULT NULL,
  `phone` varchar(16) DEFAULT NULL,
  `license_number` varchar(40) DEFAULT NULL,
  `license_expiry` date DEFAULT NULL,
  `address` varchar(150) DEFAULT NULL,
  `city` varchar(40) DEFAULT NULL,
  `pincode` int DEFAULT NULL,
  `userName` varchar(40) DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL,
  `t_earn` float DEFAULT '0',
  `age` int DEFAULT '21',
  `token` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`driver_id`),
  UNIQUE KEY `username` (`userName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- Dump completed on 2022-04-11 12:49:16
