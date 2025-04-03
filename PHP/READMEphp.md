# PHP INTEGRADI EN IoT
A continuación se mostraran algunos de los  proyectos desarrollados con PHP, MySQL y herramientas asociadas para el registro y visualización de datos.

### Tabla de Registro
Para la tabla de registro se creara dentro de una base de datos en MySQL donde se almacenaran los datos capturados por sensores para presentarlos en una página web. Incluyendo PHP para la visualización de la información.


### 🛠️Tecnologías utilizadas
* PHP:  Es un lenguaje de programación para crear sitios web dinámicos y aplicaciones del lado del servidor.
* MySQL: MySQL es un sistema de gestión de bases de datos que permite almacenar, organizar y consultar datos de manera eficiente.

## Configuración de la Base de Datos
Antes de iniciar el proyecto, verifique que la base de datos esté correctamente configurada.

### Paso 1: Crear la Base de Datos y la Tabla
Script SQL para phpMyAdmin o consola de MySQL.
´´´
CREATE DATABASE base de datos;

USE base de datos;

CREATE TABLE registro (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sensor VARCHAR(50) NOT NULL,
    fecha_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    valor FLOAT NOT NULL
);
´´´
