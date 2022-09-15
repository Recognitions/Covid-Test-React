SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `atendimentos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sintomas` int(11) NOT NULL,
  `lista` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `resultado` tinyint(4) NOT NULL,
  `idPaciente` int(11) NOT NULL,
  `_token` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `pacientes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nasc` date NOT NULL,
  `cpf` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `wpp` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `foto` varchar(17) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'none.jpg',
  `estado` tinyint(4) NOT NULL DEFAULT 3,
  `_token` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `atendimentos`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `atendimentos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

ALTER TABLE `pacientes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;