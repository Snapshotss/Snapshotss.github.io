# PHP INTEGRADI EN IoT
A continuación se mostraran algunos de los  proyectos desarrollados con PHP, MySQL y herramientas asociadas para el registro y visualización de datos.

### Tabla de Registro
Para la tabla de registro se creara dentro de una base de datos en MySQL donde se almacenaran los datos capturados por sensores para presentarlos en una página web. Incluyendo PHP para la visualización de la información.


### 🛠️Tecnologías utilizadas
* PHP:  Es un lenguaje de programación para crear sitios web dinámicos y aplicaciones del lado del servidor.
* MySQL: MySQL es un sistema de gestión de bases de datos que permite almacenar, organizar y consultar datos de manera eficiente.

## Configuración de la Base de Datos
Antes de iniciar el proyecto, verifique que la base de datos esté correctamente configurada.

### Paso 1: 🗄Crear la Base de Datos y la Tabla
Este script SQL es para phpMyAdmin o consola de MySQL.

```sql

CREATE DATABASE base de datos;

USE base de datos;

CREATE TABLE registro (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sensor VARCHAR(50) NOT NULL,
    fecha_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    valor FLOAT NOT NULL
);
```

### 📄Datos
## db_config.php - Configuración de la Conexión a la Base de Datos

Esto almacena la configuración y la conexión a MySQL.

```sql
<?php
$servername = " ";
$username = " ";
$password = " ";
$dbname = " ";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
```

## index.php - Mostrar Datos en una Tabla
Este script obtiene y muestra los datos que se han almacenados en la base de datos.

```sql
<?php
include 'db_config.php';

$sql = "SELECT id, sensor, fecha_hora, valor FROM registro";
$result = $conn->query($sql);

echo "<h2>Registro de Sensores</h2>";
echo "<table border='1'>
        <tr>
        <th>ID</th>
        <th>Sensor</th>
        <th>Fecha y Hora</th>
        <th>Valor</th>
        </tr>";

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>" . $row["id"] . "</td>
                <td>" . $row["sensor"] . "</td>
                <td>" . $row["fecha_hora"] . "</td>
                <td>" . $row["valor"] . "</td>
            </tr>";
    }
    echo "</table>";
} else {
    echo "No hay registros.";
}

$conn->close();
?>
```

## Gestión de Sensores

Este consiste en una API desarrollada en PHP que recibe información en formato JSON y la guarda en una base de datos MySQL. Es perfecto para su integración con sistemas IoT o cualquier aplicación que necesite almacenar datos de sensores en tiempo real.

# Proyecto Dientes (Bluetooth)
Este proyecto implementa un sistema para transmitir datos desde un ESP32 a un servidor PHP utilizando Bluetooth Serial. Una vez que los datos se reciben a través de Bluetooth, se envían a una base de datos MySQL a través de una API en PHP mediante conexión WiFi.

## 🔧Tecnologías Utilizadas
* ESP32 (Placa de desarrollo)

* Bluetooth Serial (Para recibir datos desde un dispositivo móvil u otro ESP32)

* WiFi (Para transmitir datos al servidor web)

* PHP (Para recibir y guardar los datos en una base de datos MySQL)

* MySQL (Para administrar la base de datos)

* Arduino IDE (Para programar el ESP32)

## Estructura del Proyecto
* db_config.php # Configuración de la base de datos

* recibir_datos.php # API que recibe los datos y los almacena en la BD

* ESP32_Bluetooth.ino # Código del ESP32 para recibir datos y enviarlos

## Archivos del Proyecto
db_config.php - Configuración de la Conexión con la Base de Datos
Este archivo establece la conexión entre PHP y MySQL.

```sql
<?php
$servername = "pagina web";
$username = "nombre de usuario";
$password = "contraseña";
$dbname = "nombre de la base de datos";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
```

## recibir_datos.php - API para Procesar y Almacenar Datos
Este archivo recibe los datos en formato JSON mediante una solicitud POST y los guarda en la base de datos.

```sql
<?php
include 'db_config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $datos = json_decode(file_get_contents('php://input'));

    if (isset($datos->sensor) && isset($datos->valor)) {
        $sensor = $conn->real_escape_string($datos->sensor);
        $valor = $conn->real_escape_string($datos->valor);

        $sql = "INSERT INTO registro (sensor, valor) VALUES ('$sensor', '$valor')";

        if ($conn->query($sql) === TRUE) {
            echo json_encode(["mensaje" => "Datos registrados correctamente"]);
        } else {
            echo json_encode(["error" => "Error al insertar: " . $conn->error]);
        }
    } else {
        echo json_encode(["error" => "Datos incompletos"]);
    }
}

$conn->close();
?>
```
