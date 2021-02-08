-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Hostiteľ: 127.0.0.1
-- Čas generovania: Po 08.Feb 2021, 14:30
-- Verzia serveru: 10.4.11-MariaDB
-- Verzia PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databáza: `diyweb`
--

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `price` float NOT NULL,
  `image` varchar(100) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Sťahujem dáta pre tabuľku `products`
--

INSERT INTO `products` (`id`, `user_id`, `name`, `description`, `price`, `image`, `time`) VALUES
(33, 10, 'daco nove', ' specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containi', 5, 'assets/img/stolik.jpg', '2021-02-07 11:57:00'),
(38, 1, 'Kvetinac zavesny', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 10.5, 'assets/img/kvetinac.jpg', '2021-02-07 20:06:06'),
(39, 1, 'Hand-made soap', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 5.7, 'assets/img/mydlo.jpg', '2021-02-07 20:07:48'),
(40, 1, 'Silver ring', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 80.6, 'assets/img/prsten.jpg', '2021-02-07 20:08:18'),
(41, 1, 'Face mask', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 5.1, 'assets/img/rusko.jpg', '2021-02-07 20:08:38'),
(42, 21, 'Coffee table', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 58.9, 'assets/img/stolik.jpg', '2021-02-07 20:09:49'),
(43, 21, 'Painting', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 152.3, 'assets/img/obraz.jpg', '2021-02-07 20:10:32'),
(44, 21, 'Hand-made candles', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 15.6, 'assets/img/sviecky.jpg', '2021-02-07 20:15:06'),
(45, 21, 'Product', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 25.8, 'assets/img/creator.jpg', '2021-02-07 20:15:28'),
(46, 21, 'Flowerpot', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 25.2, 'assets/img/kvetinace.jpg', '2021-02-07 20:17:58');

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Sťahujem dáta pre tabuľku `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'ROLE_ADMIN'),
(2, 'ROLE_MODERATOR'),
(3, 'ROLE_USER');

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(120) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Sťahujem dáta pre tabuľku `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(1, 'peter', 'gano@gano.sk', '$2a$10$EahE144YL4/2O/71.uUHNeFpplDIlK/2rD6CnOolXgzlrwXrU365.'),
(2, 'peter1', 'gano1@gano.sk', '$2a$10$UyPSwSl2EQytw.oIb5dm7u9qMuI76hpYBCG0DsQbSHuwrwN1jyT4a'),
(3, 'rado', 'rado@gano.sk', '$2a$10$75Nm7Z5bt8cmyD57BAUfau1yJUuusg5qjL6FUzXKBSeD9kKAAojeG'),
(4, 'raddo', 'raddo@gano.sk', '$2a$10$PJ9y49P0ZnuMy/tM1nFqjOSDSX08igIgeIN0FtQQCNHrVS7H1/.qy'),
(5, 'raddko', 'raddko@gano.sk', '$2a$10$AIYiJMiooAGD6h412LJobu6T9Yf7OfQxmQ3a3oypJe8CBO6igGQHe'),
(6, 'marian', 'majo@majo.sk', '$2a$10$zp3dQKy7AUZfE87h0YE8sOUXoEtmeQ3MD.u/Vmcd/LrQrfjlc5Jr6'),
(7, 'marek', 'marek@marek.sk', '$2a$10$CqUoOLN9YgM.XpsaGrz/CeJT5rXYnqq9mjA.ReSLACF4BAhvjXuaW'),
(8, 'martin', 'mato@mato.sk', '$2a$10$qtQ8i/SAgZFj8NovPJXCau.KgX0znIoGkVu9CFzbHLoITpedCQew2'),
(9, 'laco', 'laco@laco.sk', '$2a$10$ddpYHw.Oh0UxnMkPOhC8cOrAc0Y/o6wlYs5nZtAg3zg4qSzfz8IN2'),
(10, 'peter22', 'adada@dasda.sk', '$2a$10$GIZZ6B/j1B.VjKTpGe111.1ufG6UG6BQCImN5uzzQyHOPEqbaypGW'),
(11, 'peter23', 'peter.ganoczi@gmail.com', '$2a$10$Zw.TxtSk3OwC4ekj.BJkdO1LYixrHl2w2qHdNhh29YJy3A/vSQUzW'),
(12, 'peter24', 'peter24.ganoczi@gmail.com', '$2a$10$ZOLomLCLUViVekuqankXx.okE/AODxdd1aZp5JWFiUa1hk1rnnC8i'),
(13, 'peter25', 'peter25.ganoczi@gmail.com', '$2a$10$c72ZmraqdjO19acDxMWcmOvVlOTzKHfEJsC0ib8h5ap0Qi07RjyEq'),
(14, 'peter32', 'peter32@dsad.sk', '$2a$10$ArVNzBJD1ZdztnuhXyf9Bufdpy8/o56XjhDAHVR4UFua1fmf/d7hS'),
(15, 'peter33', 'peter33@sksks.sk', '$2a$10$ZMxEvydq6cZiEfwvEgMEnuC/Fexe1MMsNDyLSaJJQ6jznEyLO1B2S'),
(16, 'peter34', 'peter34@sksk.sk', '$2a$10$124aYDJwP.YczPBB9/RxmewRiE3FbFWqi6rnWS.m6iMtwWlMdKiDy'),
(17, 'peter55', 'peter55@sksks.sk', '$2a$10$QsULWvnY1zSnSnk7PJjFHe1VYvJ/w/Dz60NwkGuWEsdcJYcHGILqm'),
(18, 'peter56', 'peter56@sks.sk', '$2a$10$lxYCAcnbzJub/7KhGbA8WeYXXQgx3fl4ZK3jUjhkikNARFW4Q8hFm'),
(19, 'peter57', 'adas@asdas.sk', '$2a$10$RlpW8u3FC8WhCg5Vhe3BJ.Fr3xCDvOIac6uIzJSKXrmQTHC0p88Ey'),
(20, 'peter28', 'peter28@sadsd.sk', '$2a$10$UvgW.56gg.iwJiiF3yl5Ge9F.Xh/dtJ9.UjEJ24i9O9dCJsvfHDI2'),
(21, 'jakub', 'jakub@jakub.sk', '$2a$10$Oef1QqkFfP479EUiCGXWZuyVnUP/.cVIjmPbw.i9Ro2luvvhdL3oO');

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Sťahujem dáta pre tabuľku `user_roles`
--

INSERT INTO `user_roles` (`user_id`, `role_id`) VALUES
(1, 2),
(1, 3),
(2, 3),
(2, 2),
(3, 3),
(3, 2),
(4, 3),
(4, 2),
(5, 3),
(6, 3),
(7, 3),
(8, 3),
(9, 3),
(10, 3),
(11, 3),
(12, 3),
(13, 3),
(14, 3),
(15, 3),
(16, 3),
(17, 3),
(18, 3),
(19, 3),
(20, 3),
(21, 3);

--
-- Kľúče pre exportované tabuľky
--

--
-- Indexy pre tabuľku `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexy pre tabuľku `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexy pre tabuľku `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`),
  ADD UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`);

--
-- Indexy pre tabuľku `user_roles`
--
ALTER TABLE `user_roles`
  ADD KEY `role_id` (`role_id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT pre exportované tabuľky
--

--
-- AUTO_INCREMENT pre tabuľku `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT pre tabuľku `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Obmedzenie pre exportované tabuľky
--

--
-- Obmedzenie pre tabuľku `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Obmedzenie pre tabuľku `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `user_roles_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
