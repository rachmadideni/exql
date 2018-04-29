DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `usernm` varchar(100) DEFAULT NULL,
  `passwd` varchar(100) DEFAULT NULL,
  `aktif` enum('Y','N') DEFAULT 'N',
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;