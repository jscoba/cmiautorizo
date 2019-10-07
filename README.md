# cmiautorizo

[![Build Status](https://travis-ci.org/jscoba/cmiautorizo.svg?branch=master)](https://travis-ci.org/jscoba/cmiautorizo)

Servicio de autorizaciones en tiempo real para cmisabel

Este proyecto es un sistema de autorizaciones para la comunicación de dietas blandas y pernoctaciones en el Colegio Mayor Isabel la Católica. De esta manera, la dirección del colegio podrá comunicarse de una forma más eficiente con el personal del centro para autorizar a los colegiales a los distintos servicios "especiales" del centro.

El proyecto está segmentado en dos microservicios, un backend que gestiona los datos y ofrece una API y un frontend que se comunica mediante dicha API con el backend que ofrece a los usuarios (dirección y portería) una interfaz visual con la que trabajar. El backend se construirá usando el framework [Loopback 4](https://loopback.io/) que a su vez está basado en ExpressJS. Este framework permite crear servicios web basados en API REST de forma fácil. El frontend estará construido con [Ionic framework]([https://ionicframework.com](https://ionicframework.com/)) debido a su gran cantidad de componentes y su velocidad de desarrollo. Ambos frameworks están escritos en JavaScript. Posteriormente se desplegará este servicio en la nube usando contenedores para ello.

Todo el desarrollo estará guiado siguiendo el marco de la asignatura Infraestructuras Virtuales del Grado en Ingeniería Informática de la Universidad de Granada.

## Documentación para IV
La descripción de las tareas realizadas puede encontrarse [aquí](documentacion).


## Licencia

Copyright [2019] [Javier Sáez de la Coba]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
