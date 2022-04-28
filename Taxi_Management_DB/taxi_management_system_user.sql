-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: taxi_management_system
-- ------------------------------------------------------
-- Server version	8.0.27


--
-- Table structure for table `user`
--

-- DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(40) DEFAULT NULL,
  `birth` date DEFAULT NULL,
  `mail` varchar(60) DEFAULT NULL,
  `phone` varchar(16) DEFAULT NULL,
  `userName` varchar(30) DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL,
  `age` int DEFAULT '20',
  `gender` varchar(20) DEFAULT NULL,
  `token` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`userName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- Dump completed on 2022-04-11 12:49:16
