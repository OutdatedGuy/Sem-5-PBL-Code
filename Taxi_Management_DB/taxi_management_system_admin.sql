-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: taxi_management_system
-- ------------------------------------------------------
-- Server version	8.0.27


--
-- Table structure for table `admin`
--

-- DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `userName` varchar(40) DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `token` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- Dump completed on 2022-04-11 12:49:16
