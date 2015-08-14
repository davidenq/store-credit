
#Store-Credit

Solución al problema planteado por Google Code Jam para las rondas de clasificación Africa 2010

###Instalación

$ [sudo] git clone git@github.com:davidenq/store-credit.git

cd /store-credit

###¿Cómo usar?

A continuación se muestra un ejemplo sensillo de la ejecución del modulo.

En `index.js` especificar el archivo que se desea leer.

```js
file = fs.readFileSync('./A-small-practice.in', 'utf8');

```
Ejecutar
```
node index.js
```
Se obtiene cómo resultado
```
Case #1: 2 3
Case #2: 1 4
Case #3: 4 5
Case #4: 29 46
Case #5: 11 56
Case #6: 4 5
Case #7: 40 46
Case #8: 16 35
Case #9: 55 74
Case #10: 7 9


```
## Validar el resultado en Google Code Jam

Para validar el resultado ejecuta el script, copia el resultado en un archivo de texto y dirígete a la página del problema [Store Credit](https://code.google.com/codejam/contest/351101/dashboard#s=p0)
y selecciona el boton solve A-small o Solve A-large, carga el archivo de texto y google te indicará si el resultado es el esperado.

## Licencia

MIT Licence
