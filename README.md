# Jenkins-Configuration
Primero descargamos Jenkins del mirror proporcionado y escribimos el siguiente comando:
![Tuto-1](https://github.com/Pimed23/Octree-Quantization/blob/main/img/Tuto1.png?raw=true)

Una vez instalado Jenkins ingresamos la contrasena por defecto y nos deberia mostrar la pantalla principal de Jenkins:
![Tuto-2](https://github.com/Pimed23/Octree-Quantization/blob/main/img/Tuto2.png?raw=true)

Procedemos a crear una nueva tarea, le colocamos un nombre y seleccionamos la opcion de Pipeline:
![Tuto-3](https://github.com/Pimed23/Octree-Quantization/blob/main/img/Tuto3.png?raw=true)

Ahora deberemos vincular a Jenkins con nuestro git en le que estemos trabajando para ello escogeremos la opcion Pipeline script from SCM y seleccionaremos git posteriormete colocaremos la direccion de nuestro repositorio:

![Tuto-4](https://github.com/Pimed23/Octree-Quantization/blob/main/img/Tuto4.png?raw=true)

Una vez realizado esto deberemos crear nuestro archivo de configuracion en dicho repositorio:

![Tuto-5](https://github.com/Pimed23/Octree-Quantization/blob/main/img/Tuto5.png?raw=true)

Y esto seria todo por parte de las configuraciones, ahora nos dirigimos a Jenkins y construimos dicho pipeline, esperemos un momento a que realice la construccion y podemos visualizar los resultados:

![Tuto-6](https://github.com/Pimed23/Octree-Quantization/blob/main/img/Tuto7.png?raw=true)

Ahora si ingresamos a estos resultados podemos ver los logs, para confirmar si nuestra ejecucion se ha realizado correctamente:

![Tuto-7](https://github.com/Pimed23/Octree-Quantization/blob/main/img/Tuto6.png?raw=true)







