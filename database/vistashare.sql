-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: vistashare
-- ------------------------------------------------------
-- Server version	8.0.40

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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `AdminID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  `Password` varchar(100) NOT NULL,
  PRIMARY KEY (`AdminID`),
  CONSTRAINT `admin_chk_1` CHECK ((length(`Password`) >= 8))
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'Sarah Lee','adminPass1234'),(2,'David Green','secureAdmin2024');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city` (
  `CityID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  `Coordinates` varchar(100) DEFAULT NULL,
  `CountryID` int NOT NULL,
  PRIMARY KEY (`CityID`),
  KEY `CountryID` (`CountryID`),
  CONSTRAINT `city_ibfk_1` FOREIGN KEY (`CountryID`) REFERENCES `country` (`CountryID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (6,'New York','40.7128┬░ N, 74.0060┬░ W',1),(7,'Los Angeles','34.0522┬░ N, 118.2437┬░ W',1),(8,'Vancouver','49.2827┬░ N, 123.1207┬░ W',2),(9,'Toronto','43.65107┬░ N, 79.347015┬░ W',2),(10,'Calgary','51.0447┬░ N, 114.0719┬░ W',2);
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cityguide`
--

DROP TABLE IF EXISTS `cityguide`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cityguide` (
  `PostID` int NOT NULL,
  `CityID` int NOT NULL,
  `VisitDuration` int DEFAULT NULL,
  `ActivityTypes` text,
  `RatingOutOf10` int DEFAULT NULL,
  `KeyPoints` text,
  `Tags` text,
  PRIMARY KEY (`PostID`,`CityID`),
  KEY `CityID` (`CityID`),
  CONSTRAINT `cityguide_ibfk_1` FOREIGN KEY (`PostID`) REFERENCES `post` (`PostID`) ON DELETE CASCADE,
  CONSTRAINT `cityguide_ibfk_2` FOREIGN KEY (`CityID`) REFERENCES `city` (`CityID`) ON DELETE CASCADE,
  CONSTRAINT `cityguide_chk_1` CHECK ((`RatingOutOf10` between 1 and 10))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cityguide`
--

LOCK TABLES `cityguide` WRITE;
/*!40000 ALTER TABLE `cityguide` DISABLE KEYS */;
INSERT INTO `cityguide` VALUES (1,6,3,'Sightseeing, Shopping',9,'Central Park, Times Square, Statue of Liberty','Urban, Tourism'),(2,6,2,'History, Culture',8,'Empire State Building, Brooklyn Bridge, Museum of Modern Art','History, Art'),(3,7,4,'Entertainment, Sightseeing',9,'Hollywood Sign, Griffith Observatory, Santa Monica Pier','Hollywood, Iconic'),(4,7,3,'Nature, Hiking',8,'Venice Beach, Runyon Canyon, Malibu','Nature, Fitness'),(5,8,2,'Nature, Art',9,'Stanley Park, Granville Island, Vancouver Aquarium','Outdoor, Culture'),(6,8,3,'Shopping, Dining',8,'Robson Street, Granville Island, Vancouver Art Gallery','Shopping, Food'),(7,9,4,'Sightseeing, Culture',9,'CN Tower, Royal Ontario Museum, Distillery District','Urban, Heritage'),(8,9,2,'Art, Culture',8,'High Park, Yorkville, Art Gallery of Ontario','Art, History'),(9,10,3,'Nature, Adventure',9,'Banff National Park, Calgary Tower, Heritage Park','Nature, Adventure'),(10,10,2,'Culture, Family',8,'Heritage Park, Calgary Zoo, Olympic Plaza','Family, History'),(52,7,3,'Test',9,'sunny ','yes');
/*!40000 ALTER TABLE `cityguide` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `CommentID` int NOT NULL AUTO_INCREMENT,
  `PostID` int NOT NULL,
  `MemberID` int NOT NULL,
  `Text` text NOT NULL,
  `Media` text,
  `Date` date NOT NULL,
  `Rating` decimal(3,2) DEFAULT NULL,
  PRIMARY KEY (`CommentID`),
  KEY `PostID` (`PostID`),
  KEY `MemberID` (`MemberID`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`PostID`) REFERENCES `post` (`PostID`) ON DELETE CASCADE,
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`MemberID`) REFERENCES `user` (`MemberID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,1,1,'Great park for a morning walk!',NULL,'2024-12-07',4.50),(2,1,2,'I love the greenery here!',NULL,'2024-12-07',5.00),(3,2,3,'Times Square is amazing at night.',NULL,'2024-12-07',4.00),(4,2,4,'Crowded but full of life!',NULL,'2024-12-07',3.50),(5,3,5,'Hollywood is always magical!',NULL,'2024-12-07',4.70),(6,3,6,'Great for movie lovers!',NULL,'2024-12-07',5.00),(7,4,7,'Fantastic view from the observatory!',NULL,'2024-12-07',4.80),(8,4,8,'A bit crowded, but worth it!',NULL,'2024-12-07',4.00),(9,5,9,'Stanley Park is my favorite nature spot.',NULL,'2024-12-07',4.50),(10,5,10,'Perfect for a peaceful day outdoors.',NULL,'2024-12-07',5.00),(11,6,1,'Granville Island has such a vibrant atmosphere!',NULL,'2024-12-07',4.50),(12,6,2,'I love the food and arts here.',NULL,'2024-12-07',5.00),(13,7,3,'The CN Tower gives a stunning view of the city!',NULL,'2024-12-07',4.70),(14,7,4,'Such a great experience.',NULL,'2024-12-07',4.20),(15,8,5,'The Distillery District is full of charm!',NULL,'2024-12-07',4.80),(16,8,6,'Such an interesting place to visit.',NULL,'2024-12-07',4.30),(17,9,7,'Banff National Park is breathtaking.',NULL,'2024-12-07',5.00),(18,9,8,'Absolutely stunning views!',NULL,'2024-12-07',5.00),(19,10,9,'Heritage Park is great for history buffs.',NULL,'2024-12-07',4.50),(20,10,10,'Loved walking through this historical village!',NULL,'2024-12-07',4.60),(21,12,1,'I love Central Park for a relaxing day.',NULL,'2024-12-07',4.70),(22,12,2,'ItΓÇÖs perfect for a jog or picnic.',NULL,'2024-12-07',5.00),(23,13,3,'The Griffith Observatory is a must-visit!',NULL,'2024-12-07',4.90),(24,13,4,'Great spot for stargazing!',NULL,'2024-12-07',4.50),(25,14,5,'Stanley ParkΓÇÖs views are amazing.',NULL,'2024-12-07',4.70),(26,14,6,'This is such a peaceful place.',NULL,'2024-12-07',4.40),(27,15,7,'The CN Tower is iconic.',NULL,'2024-12-07',4.80),(28,15,8,'The elevator ride was exhilarating.',NULL,'2024-12-07',4.50),(29,16,9,'Calgary Tower offers a great city view.',NULL,'2024-12-07',4.60),(30,16,10,'Worth the visit for the skyline.',NULL,'2024-12-07',4.70),(31,17,1,'Granville Island is perfect for a day out.',NULL,'2024-12-07',4.90),(32,17,2,'So much to explore here!',NULL,'2024-12-07',4.80),(33,18,3,'Venice Beach has a laid-back vibe.',NULL,'2024-12-07',4.50),(34,18,4,'A great beach for relaxation.',NULL,'2024-12-07',4.30),(35,19,5,'Times Square is truly unique.',NULL,'2024-12-07',5.00),(36,19,6,'The lights and energy are incredible.',NULL,'2024-12-07',4.90),(37,20,7,'The Royal Ontario Museum is amazing.',NULL,'2024-12-07',4.80),(38,20,8,'The exhibits were so informative!',NULL,'2024-12-07',4.60),(39,21,9,'Banff is a hikerΓÇÖs paradise.',NULL,'2024-12-07',4.90),(40,21,10,'Definitely coming back here!',NULL,'2024-12-07',5.00),(41,22,1,'Capilano Suspension Bridge is thrilling.',NULL,'2024-12-07',4.70),(42,22,2,'ItΓÇÖs a unique experience.',NULL,'2024-12-07',4.60),(43,23,3,'Santa Monica Pier is fun for everyone.',NULL,'2024-12-07',4.40),(44,23,4,'Such a lively atmosphere!',NULL,'2024-12-07',4.50),(45,24,5,'High Park is great for picnics.',NULL,'2024-12-07',4.70),(46,24,6,'Perfect for families.',NULL,'2024-12-07',4.60),(47,25,7,'Lake Louise is a serene place.',NULL,'2024-12-07',5.00),(48,25,8,'Such peaceful surroundings.',NULL,'2024-12-07',4.80),(49,26,9,'The Brooklyn Bridge is a New York classic.',NULL,'2024-12-07',5.00),(50,26,10,'Fantastic views of the city skyline.',NULL,'2024-12-07',4.90),(51,37,1,'Hiking in the Rockies was breathtaking.',NULL,'2024-12-07',5.00),(52,37,2,'I loved every minute of the hike.',NULL,'2024-12-07',4.90),(53,38,3,'The best adventure gear for any trip!',NULL,'2024-12-07',4.80),(54,38,4,'Highly recommend these brands.',NULL,'2024-12-07',4.70),(55,39,5,'Exploring local art is always inspiring.',NULL,'2024-12-07',4.90),(56,39,6,'Amazing art exhibits to check out!',NULL,'2024-12-07',5.00),(57,40,7,'Upcoming art exhibits should not be missed.',NULL,'2024-12-07',4.60),(58,40,8,'CanΓÇÖt wait for the next one!',NULL,'2024-12-07',4.80),(59,41,9,'Urban exploration is a fantastic hobby.',NULL,'2024-12-07',4.70),(60,41,10,'Found some great hidden gems!',NULL,'2024-12-07',4.80),(61,42,1,'Street food in the city is delicious!',NULL,'2024-12-07',4.90),(62,42,2,'IΓÇÖm obsessed with these food trucks.',NULL,'2024-12-07',4.60),(63,43,3,'Great parks for a family picnic.',NULL,'2024-12-07',4.80),(64,43,4,'Such a perfect place for kids.',NULL,'2024-12-07',4.70),(65,44,5,'Farm-to-table dining experiences are the best!',NULL,'2024-12-07',4.90),(66,44,6,'Amazing food with local ingredients.',NULL,'2024-12-07',5.00),(67,45,7,'Mountain adventures are so refreshing.',NULL,'2024-12-07',4.70),(69,46,9,'New food trucks in town are worth checking out.',NULL,'2024-12-07',4.60),(70,46,10,'CanΓÇÖt wait to try the new ones!',NULL,'2024-12-07',4.70),(71,37,8,'This is a great post! I love the insights.',NULL,'2024-12-08',4.50),(72,14,3,'test',NULL,'2024-12-09',1.00),(73,14,3,'Agreed!',NULL,'2024-12-09',1.00),(74,25,4,'Love the crystal clear water!',NULL,'2024-12-09',1.00),(75,25,2,'Im Alice Smith!',NULL,'2024-12-09',1.00),(76,37,2,'and every second!',NULL,'2024-12-09',1.00),(77,24,2,'Wow!',NULL,'2024-12-09',1.00),(78,37,2,'test',NULL,'2024-12-10',1.00),(79,50,2,'asdasdad',NULL,'2024-12-10',1.00),(80,51,2,'\nDROP DATABASE vistashare;\n',NULL,'2024-12-10',1.00),(81,51,2,'DROP DATABASE vistashare;\n',NULL,'2024-12-10',1.00),(82,9,2,'Cread recommendations Lucas!',NULL,'2024-12-10',1.00),(83,39,2,'true',NULL,'2024-12-10',1.00);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `country` (
  `CountryID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  PRIMARY KEY (`CountryID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (1,'Japan'),(2,'France'),(3,'United States'),(4,'Canada');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discussionpost`
--

DROP TABLE IF EXISTS `discussionpost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `discussionpost` (
  `PostID` int NOT NULL,
  `GroupName` varchar(100) NOT NULL,
  `IsPinned` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`PostID`,`GroupName`),
  KEY `GroupName` (`GroupName`),
  CONSTRAINT `discussionpost_ibfk_1` FOREIGN KEY (`PostID`) REFERENCES `post` (`PostID`) ON DELETE CASCADE,
  CONSTRAINT `discussionpost_ibfk_2` FOREIGN KEY (`GroupName`) REFERENCES `grouptable` (`GroupName`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discussionpost`
--

LOCK TABLES `discussionpost` WRITE;
/*!40000 ALTER TABLE `discussionpost` DISABLE KEYS */;
INSERT INTO `discussionpost` VALUES (37,'Adventure Seekers',0),(39,'Art Enthusiasts',0),(40,'Art Enthusiasts',0),(41,'City Explorers',0),(42,'Foodies United',0),(43,'City Explorers',0),(44,'Foodies United',0),(45,'Adventure Seekers',0);
/*!40000 ALTER TABLE `discussionpost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groupmembers`
--

DROP TABLE IF EXISTS `groupmembers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `groupmembers` (
  `GroupName` varchar(100) NOT NULL,
  `MemberID` int NOT NULL,
  `IsModerator` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`GroupName`,`MemberID`),
  KEY `MemberID` (`MemberID`),
  CONSTRAINT `groupmembers_ibfk_1` FOREIGN KEY (`GroupName`) REFERENCES `grouptable` (`GroupName`) ON DELETE CASCADE,
  CONSTRAINT `groupmembers_ibfk_2` FOREIGN KEY (`MemberID`) REFERENCES `user` (`MemberID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groupmembers`
--

LOCK TABLES `groupmembers` WRITE;
/*!40000 ALTER TABLE `groupmembers` DISABLE KEYS */;
INSERT INTO `groupmembers` VALUES ('Adventure Seekers',1,1),('Adventure Seekers',2,0),('Adventure Seekers',3,0),('Adventure Seekers',4,0),('Adventure Seekers',6,0),('Adventure Seekers',11,0),('Art Enthusiasts',1,0),('Art Enthusiasts',2,1),('Art Enthusiasts',5,0),('Art Enthusiasts',6,0),('Art Enthusiasts',7,0),('Art Enthusiasts',9,0),('Art Enthusiasts',10,0),('Art Enthusiasts',11,0),('City Explorers',2,0),('City Explorers',3,1),('City Explorers',8,0),('City Explorers',9,0),('City Explorers',10,0),('Foodies United',1,0),('Foodies United',2,0),('Foodies United',3,0),('Foodies United',4,1),('Foodies United',5,0),('Foodies United',8,0);
/*!40000 ALTER TABLE `groupmembers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grouptable`
--

DROP TABLE IF EXISTS `grouptable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grouptable` (
  `GroupName` varchar(100) NOT NULL,
  `Description` text,
  `Tags` text,
  PRIMARY KEY (`GroupName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grouptable`
--

LOCK TABLES `grouptable` WRITE;
/*!40000 ALTER TABLE `grouptable` DISABLE KEYS */;
INSERT INTO `grouptable` VALUES ('Adventure Seekers','A group for those passionate about outdoor adventures, hiking, and exploration.','Hiking, Adventure, Nature'),('Art Enthusiasts','A community for lovers of art, museums, galleries, and all things creative.','Art, Museums, Culture'),('City Explorers','For people who enjoy discovering the hidden gems in cities around the world.','Urban, Exploration, Sightseeing'),('Foodies United','A group dedicated to food lovers, sharing the best restaurants and street food experiences.','Food, Culinary, Travel');
/*!40000 ALTER TABLE `grouptable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location` (
  `LocationID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  `Description` text,
  `Coordinates` varchar(100) DEFAULT NULL,
  `OverallRating` decimal(3,2) DEFAULT NULL,
  `CityID` int NOT NULL,
  PRIMARY KEY (`LocationID`),
  KEY `CityID` (`CityID`),
  CONSTRAINT `location_ibfk_1` FOREIGN KEY (`CityID`) REFERENCES `city` (`CityID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (26,'Central Park','A large park in the middle of Manhattan, known for its open spaces and scenic views.','40.7851┬░ N, 73.9683┬░ W',4.80,6),(27,'Statue of Liberty','An iconic symbol of freedom, located on Liberty Island in New York Harbor.','40.6892┬░ N, 74.0445┬░ W',4.70,6),(28,'Empire State Building','A famous skyscraper and one of the tallest buildings in the world.','40.748817┬░ N, 73.985428┬░ W',4.60,6),(29,'Times Square','A busy commercial and entertainment hub in Midtown Manhattan.','40.7580┬░ N, 73.9855┬░ W',4.50,6),(30,'Brooklyn Bridge','A suspension bridge connecting Brooklyn and Manhattan.','40.7061┬░ N, 73.9969┬░ W',4.60,6),(31,'Hollywood Sign','An iconic landmark in the Hollywood Hills overlooking Los Angeles.','34.1341┬░ N, 118.3215┬░ W',4.90,7),(32,'Griffith Observatory','An observatory located on Mount Hollywood offering amazing views of Los Angeles and the stars.','34.1184┬░ N, 118.3004┬░ W',4.80,7),(33,'Santa Monica Pier','A popular spot with a large amusement park and beautiful beach views.','34.0226┬░ N, 118.4957┬░ W',4.70,7),(34,'Venice Beach','Known for its boardwalk, volleyball courts, and vibrant arts scene.','33.9850┬░ N, 118.4695┬░ W',4.60,7),(35,'The Getty Center','A museum offering impressive art collections and stunning architecture.','34.0780┬░ N, 118.4740┬░ W',4.80,7),(36,'Stanley Park','A famous urban park in Vancouver with scenic trails and views of the water.','49.3030┬░ N, 123.1448┬░ W',4.90,8),(37,'Capilano Suspension Bridge','A pedestrian suspension bridge crossing the Capilano River in North Vancouver.','49.3235┬░ N, 123.1149┬░ W',4.70,8),(38,'Granville Island','A bustling area filled with markets, restaurants, and artistic galleries.','49.2710┬░ N, 123.1337┬░ W',4.80,8),(39,'Vancouver Aquarium','A marine science center showcasing marine life and conservation efforts.','49.3054┬░ N, 123.1182┬░ W',4.60,8),(40,'Vancouver Art Gallery','An art gallery housing collections of historical and contemporary art.','49.2830┬░ N, 123.1217┬░ W',4.70,8),(41,'CN Tower','A landmark tower with a revolving restaurant and observation deck in Toronto.','43.6426┬░ N, 79.3871┬░ W',4.80,9),(42,'Royal Ontario Museum','A museum showcasing art, culture, and nature with exhibits from around the world.','43.6677┬░ N, 79.3948┬░ W',4.70,9),(43,'Toronto Islands','A group of small islands off the coast of downtown Toronto, known for parks and beaches.','43.6270┬░ N, 79.3953┬░ W',4.60,9),(44,'Ripley\'s Aquarium of Canada','An aquarium located in downtown Toronto, showcasing marine life from across the globe.','43.6420┬░ N, 79.3832┬░ W',4.70,9),(45,'Distillery District','A historic area in Toronto known for its Victorian-era buildings and trendy shops.','43.6500┬░ N, 79.3591┬░ W',4.80,9),(46,'Banff National Park','A national park located in the Canadian Rockies, offering scenic views and outdoor adventures.','51.4968┬░ N, 115.9281┬░ W',5.00,10),(47,'Lake Louise','A picturesque lake in Banff National Park known for its turquoise waters and surrounding mountains.','51.4161┬░ N, 116.1773┬░ W',4.90,10),(48,'Sunshine Village','A ski resort located in Banff National Park with skiing, hiking, and stunning alpine views.','51.2011┬░ N, 115.7802┬░ W',4.80,10),(49,'Icefields Parkway','A scenic drive connecting Jasper and Banff National Parks, with breathtaking views of glaciers.','53.2185┬░ N, 118.0847┬░ W',4.90,10),(50,'Jasper National Park','A UNESCO World Heritage site in the Canadian Rockies, famous for its wildlife and hiking trails.','52.8734┬░ N, 118.0814┬░ W',4.80,10),(51,'Bowness Park','A picturesque park in Calgary with scenic views of the Bow River and picnic areas.','51.0956┬░ N, 114.1633┬░ W',4.60,10),(52,'Calgary Tower','A tower offering 360-degree views of Calgary and the surrounding mountains.','51.0442┬░ N, 114.0623┬░ W',4.70,10),(53,'Fish Creek Provincial Park','A large urban park in Calgary, perfect for hiking and picnicking.','50.9181┬░ N, 114.0374┬░ W',4.70,10),(54,'Heritage Park','A historical park showcasing Calgary\'s history, with restored buildings and artifacts.','50.9499┬░ N, 114.0823┬░ W',4.80,10),(55,'Calgary Zoo','A zoo with a diverse range of animals, offering educational programs and exhibits.','51.0446┬░ N, 113.9902┬░ W',4.50,10),(56,'Rodeo Park','A park in Calgary offering rodeo events, festivals, and live entertainment.','51.0455┬░ N, 114.0582┬░ W',4.60,10),(57,'Lougheed House','A historic house museum in Calgary, showcasing the history of the Lougheed family.','51.0458┬░ N, 114.0643┬░ W',4.50,10),(58,'Prince\'s Island Park','A park located on an island in downtown Calgary, popular for outdoor activities and events.','51.0480┬░ N, 114.0670┬░ W',4.70,10),(59,'Calgary Stampede Grounds','The venue for the Calgary Stampede, a rodeo and exhibition event held annually.','51.0412┬░ N, 114.0690┬░ W',4.80,10);
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locationreview`
--

DROP TABLE IF EXISTS `locationreview`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `locationreview` (
  `PostID` int NOT NULL,
  `LocationID` int NOT NULL,
  PRIMARY KEY (`PostID`,`LocationID`),
  KEY `LocationID` (`LocationID`),
  CONSTRAINT `locationreview_ibfk_1` FOREIGN KEY (`PostID`) REFERENCES `post` (`PostID`) ON DELETE CASCADE,
  CONSTRAINT `locationreview_ibfk_2` FOREIGN KEY (`LocationID`) REFERENCES `location` (`LocationID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locationreview`
--

LOCK TABLES `locationreview` WRITE;
/*!40000 ALTER TABLE `locationreview` DISABLE KEYS */;
INSERT INTO `locationreview` VALUES (12,26),(19,29),(26,30),(13,32),(49,32),(23,33),(18,34),(14,36),(22,37),(17,38),(15,41),(20,42),(21,46),(25,47),(53,49),(24,51),(16,52),(48,53),(51,53),(50,55);
/*!40000 ALTER TABLE `locationreview` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `PostID` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(200) NOT NULL,
  `Text` text,
  `Media` text,
  `IsUnderReview` tinyint(1) DEFAULT '1',
  `Rating` decimal(3,2) DEFAULT NULL,
  `Date` date NOT NULL,
  `MemberID` int NOT NULL,
  `AdminID` int DEFAULT NULL,
  PRIMARY KEY (`PostID`),
  KEY `MemberID` (`MemberID`),
  KEY `AdminID` (`AdminID`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`MemberID`) REFERENCES `user` (`MemberID`) ON DELETE CASCADE,
  CONSTRAINT `post_ibfk_2` FOREIGN KEY (`AdminID`) REFERENCES `admin` (`AdminID`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'Exploring Central Park','Central Park offers a vast area for outdoor activities, including walking, biking, and picnicking.',NULL,1,9.00,'2024-05-10',1,1),(2,'The Wonders of Times Square','Times Square is a must-visit spot in New York with bright lights, theaters, and street performers.',NULL,1,8.50,'2024-05-11',2,1),(3,'Hollywood and Its Legends','Visit the iconic Hollywood Sign and explore the history of movies in LA.',NULL,1,9.50,'2024-05-15',3,2),(4,'Griffith Observatory Experience','Griffith Observatory offers breathtaking views of Los Angeles and a glimpse into the universe.',NULL,1,8.70,'2024-05-16',4,2),(5,'Stanley Park: A Nature Retreat','Stanley Park is a beautiful place to relax, walk or ride a bike, offering a break from the city.',NULL,1,9.20,'2024-05-20',5,2),(6,'Granville Island: A Hub of Art and Food','Granville Island is a delightful market with fresh food, art galleries, and a local brewery.',NULL,1,8.80,'2024-05-21',6,2),(7,'Exploring the CN Tower','The CN Tower offers panoramic views of Toronto and is an iconic part of the skyline.',NULL,1,9.00,'2024-06-01',7,2),(8,'The Distillery District','A historic area with cobblestone streets, art galleries, and a vibrant nightlife scene.',NULL,1,8.70,'2024-06-02',8,2),(9,'The Beauty of Banff National Park','Banff National Park is a stunning location with crystal-clear lakes and beautiful mountain views.',NULL,1,9.60,'2024-06-10',9,2),(10,'Heritage Park Historical Village','Explore CalgaryΓÇÖs history with Heritage ParkΓÇÖs interactive exhibits, including an old-time train ride.',NULL,1,8.50,'2024-06-12',10,2),(12,'Central Park Review','Central Park is an iconic spot in New York, offering both nature and city vibes.','central_park.jpg',0,9.00,'2024-12-07',1,1),(13,'Griffith Observatory Review','A must-visit in Los Angeles for stunning views of the city and the stars.','griffith_observatory.jpg',0,8.50,'2024-12-08',2,2),(14,'Stanley Park Review','Stanley Park is a green oasis in Vancouver, great for cycling and walking.','stanley_park.jpg',0,8.80,'2024-12-09',3,1),(15,'CN Tower Review','The CN Tower offers breathtaking views of Toronto, a great experience for visitors.','cn_tower.jpg',0,9.30,'2024-12-10',4,2),(16,'Calgary Tower Review','The Calgary Tower offers a fantastic view of the city, especially at sunset.','calgary_tower.jpg',0,8.70,'2024-12-11',5,1),(17,'Granville Island Review','Granville Island is a vibrant spot with markets, restaurants, and art galleries.','granville_island.jpg',0,9.00,'2024-12-09',6,2),(18,'Venice Beach Review','Venice Beach is perfect for a walk along the shore, watching street performers and enjoying the beach atmosphere.','venice_beach.jpg',0,8.60,'2024-12-08',7,1),(19,'Times Square Review','Times Square is the heart of New York, buzzing with lights, tourists, and energy.','times_square.jpg',0,9.20,'2024-12-07',8,2),(20,'Royal Ontario Museum Review','The ROM is a must-visit in Toronto, with exhibits ranging from art to science.','rom_toronto.jpg',0,9.10,'2024-12-10',9,1),(21,'Banff National Park Review','Banff National Park is a beautiful and serene getaway in the Canadian Rockies.','banff_national_park.jpg',0,9.50,'2024-12-11',10,2),(22,'Capilano Suspension Bridge Review','Walking across the Capilano Suspension Bridge is an unforgettable experience.','capilano_bridge.jpg',0,8.90,'2024-12-09',1,2),(23,'Santa Monica Pier Review','Santa Monica Pier is a classic California attraction, great for a fun day with family.','santa_monica_pier.jpg',0,8.40,'2024-12-08',2,1),(24,'High Park Review','High Park is TorontoΓÇÖs largest public park, offering beautiful nature and recreation options.','high_park.jpg',0,8.80,'2024-12-10',3,2),(25,'Lake Louise Review','Lake Louise is an incredibly scenic lake, surrounded by mountains in Banff National Park.','lake_louise.jpg',0,9.40,'2024-12-11',4,1),(26,'Brooklyn Bridge Review','The Brooklyn Bridge is a historic landmark offering beautiful views of the New York skyline.','brooklyn_bridge.jpg',0,9.00,'2024-12-07',5,2),(37,'Hiking in the Rockies','Discussing the best trails and hiking spots in the Rockies for our next trip.',NULL,0,8.00,'2024-12-01',1,NULL),(38,'Best Adventure Gear','LetΓÇÖs share tips and recommendations on the best gear for hiking and outdoor adventures.',NULL,0,7.00,'2024-12-02',2,NULL),(39,'Exploring Local Art','What are the best local galleries to explore this month?',NULL,0,9.00,'2024-12-03',3,NULL),(40,'Upcoming Art Exhibit','Looking for recommendations for exhibits happening in the next few weeks.',NULL,0,8.00,'2024-12-04',4,NULL),(41,'Urban Exploration: Hidden Gems','LetΓÇÖs talk about secret spots to explore in the city.',NULL,0,7.00,'2024-12-05',5,NULL),(42,'Best Street Food in the City','Sharing thoughts on where to find the best street food in town.',NULL,0,9.00,'2024-12-06',6,NULL),(43,'Great Parks for Family Picnic','Where are the best parks in the city for a family day out?',NULL,0,9.00,'2024-12-07',7,NULL),(44,'Farm-to-Table Dining Experiences','Looking for great farm-to-table restaurants in the area.',NULL,0,8.00,'2024-12-08',8,NULL),(45,'Mountain Adventures','LetΓÇÖs organize a weekend trip to the mountains!',NULL,0,8.00,'2024-12-09',9,NULL),(46,'New Food Trucks in Town','Check out these new food trucks opening around the city!',NULL,1,7.00,'2024-12-10',10,NULL),(47,'Fun for the whole family!','Went on a Sunday and had an absolute blast exploring! Would recommend!','',0,5.00,'2024-12-09',2,NULL),(48,'FISH ','CREEK','',0,4.50,'2024-12-09',2,NULL),(49,'They Do Be Observing ','True!','',0,5.00,'2024-12-09',2,NULL),(50,'test','test','',0,5.00,'2024-12-10',2,NULL),(51,'SELECT * FROM user;','test','',0,5.00,'2024-12-10',2,NULL),(52,'LA!','Just testing that this works','',0,9.00,'2024-12-10',2,NULL),(53,'test ','test','',0,1.00,'2024-12-10',11,NULL);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `topspotslist`
--

DROP TABLE IF EXISTS `topspotslist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `topspotslist` (
  `CityID` int NOT NULL,
  `AdminID` int NOT NULL,
  `Date` date DEFAULT NULL,
  PRIMARY KEY (`CityID`),
  KEY `AdminID` (`AdminID`),
  CONSTRAINT `topspotslist_ibfk_1` FOREIGN KEY (`CityID`) REFERENCES `city` (`CityID`) ON DELETE CASCADE,
  CONSTRAINT `topspotslist_ibfk_2` FOREIGN KEY (`AdminID`) REFERENCES `admin` (`AdminID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `topspotslist`
--

LOCK TABLES `topspotslist` WRITE;
/*!40000 ALTER TABLE `topspotslist` DISABLE KEYS */;
INSERT INTO `topspotslist` VALUES (6,1,'2024-12-07'),(7,2,'2024-12-08'),(8,1,'2024-12-09'),(9,2,'2024-12-10'),(10,1,'2024-12-11');
/*!40000 ALTER TABLE `topspotslist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `travellog`
--

DROP TABLE IF EXISTS `travellog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `travellog` (
  `MemberID` int NOT NULL,
  `CityID` int NOT NULL,
  `DurationOfStay` int DEFAULT NULL,
  `Date` date DEFAULT NULL,
  PRIMARY KEY (`MemberID`,`CityID`),
  KEY `CityID` (`CityID`),
  CONSTRAINT `travellog_ibfk_1` FOREIGN KEY (`MemberID`) REFERENCES `user` (`MemberID`) ON DELETE CASCADE,
  CONSTRAINT `travellog_ibfk_2` FOREIGN KEY (`CityID`) REFERENCES `city` (`CityID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `travellog`
--

LOCK TABLES `travellog` WRITE;
/*!40000 ALTER TABLE `travellog` DISABLE KEYS */;
INSERT INTO `travellog` VALUES (1,6,5,'2024-05-01'),(1,7,3,'2024-06-10'),(2,6,4,'2024-05-15'),(2,8,6,'2024-07-01'),(3,7,7,'2024-05-20'),(3,9,2,'2024-06-05'),(4,8,3,'2024-06-12'),(4,10,5,'2024-07-15'),(5,6,6,'2024-06-01'),(5,9,4,'2024-08-10'),(5,10,3,'2024-09-05'),(6,7,5,'2024-05-18'),(6,8,7,'2024-07-01'),(7,6,3,'2024-06-07'),(7,10,4,'2024-07-25'),(8,7,2,'2024-05-25'),(8,9,5,'2024-06-20'),(8,10,3,'2024-08-12'),(9,6,4,'2024-06-05'),(9,8,6,'2024-07-10'),(10,9,7,'2024-05-30'),(10,10,2,'2024-06-15');
/*!40000 ALTER TABLE `travellog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `MemberID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `Interests` text,
  `TotalKMTravelled` int DEFAULT '0',
  PRIMARY KEY (`MemberID`),
  CONSTRAINT `user_chk_1` CHECK ((length(`Password`) >= 8))
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'John Doe','password1234','Hiking, Photography, Traveling',1200),(2,'Alice Smith','securePass2024','Cycling, Reading, Cooking',850),(3,'Bob Johnson','mypassword5678','Fishing, Traveling, Music',1500),(4,'Emma Williams','EmmA12345','Yoga, Painting, Art Galleries',640),(5,'James Brown','secretPass4321','Running, Music Festivals, Nature',2500),(6,'Sophia Davis','Sophie2024Pass','Baking, Traveling, Hiking',980),(7,'Michael Miller','mikepass890','Tech, Travel Blogging, Photography',1900),(8,'Olivia Wilson','OliviaSafe123','Gardening, Cooking, Traveling',1100),(9,'Lucas Martinez','LucasPass987','Soccer, Traveling, Volunteering',1340),(10,'Mia Taylor','MiaPassword2024','Reading, Traveling, Fashion',765),(11,'testing','securePass2024',NULL,0),(12,'daniel','password',NULL,0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-09 23:45:10
