# Juego de la vida de Conway 

El juego de la vida es un autómata celular diseñado por el matemático británico John Horton 
Conway en 1970. El juego es realmente una simulación, formada por una grilla de “células” que
se extiende por el infinito en todas las direcciones. Por tanto, cada célula tiene 8 células
"vecinas", que son las que están próximas a ella, incluidas las diagonales. Las células tienen
dos estados: están "vivas" o "muertas". El estado de las células evoluciona por turnos. El
estado de todas las células se tiene en cuenta para calcular el estado de las mismas al turno
siguiente.

Por cualquier duda sobre el funcionamiento, o para investigar patrones de organismos, podés
visitar el artículo en Wikipedia: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

## 📋 Reglas
Todas las células se actualizan simultáneamente en cada turno, siguiendo estas reglas:
1. Una célula muerta con exactamente 3 células vivas vecinas, “nace” (es decir, al turno siguiente 
estará viva).
2. Una célula viva con 2 o 3 células vecinas vivas se mantiene viva.
3. Una célula viva con menos de 2 células vecinas vivas muere de “soledad”
4. Una célula viva con más de 3 células vecinas vivas muere por “sobrepoblación”

## ⚙️ Funcionalidades

* El usuario puede activar o desactivar células con un click.

* Cuando el usuario presiona "Iniciar" la simulación comienza. 

* Cuando presiona "Detener" la simulación se pausa y se puede volver a iniciar desde el punto en 
el que se paro. 

* Cuando presiona "Reiniciar", el tablero se limpia y las generaciones vuelven a cero. El indicador 
de Generación muestra el turno actual.

* Se trabaja con un tablero “esférico” (entender por “esférico” que los vecinos izquierdos de las 
células de la columna 0, son las células de la columna N, y lo mismo en todos los límites) de 
dimensiones variables. Podemos configurar la cantidad de filas y columnas.

* Se puede mmodificar el tiempo de ejecución de los intervalos.

* Se puede ejecutar generaciones paso a paso.

* Existe la posibilidad de guardar y recuperar el estado de la última generación.

## 🚀 Instalación 

### Paso 1: Instalar npm
Si no cuentas con npm, es necesario que lo instales, npm es un administrador de paquetes que facilita 
la vida de los desarrolladores web y viene junto a Node.js.

Link de descarga: https://nodejs.org/es/download/

Descargar la versión LTS.

### Paso 2: Instalar dependecias del proyecto
Abrir la linea de comando del sistema operativo y ejecutar el siguiente comando:

```
npm i
```

### Paso 3: Ejecutar programa
Una vez instalada todas las dependencias, lo único que nos falta es ejecutar el proyecto. Se hace con el
siguiente comando:

```
npm start
```

## 🛠️ Construido con 
* React
* Material-UI
* Notistack
* Formik
* Yup