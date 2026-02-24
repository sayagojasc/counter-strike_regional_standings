Los equipos juegan partidos significativos en eventos de terceros durante todo el año. Para reducir la carga de los participantes de los Major y optimizar el proceso de clasificación, vamos a aprovechar esos resultados de partidos para identificar qué equipos deberían ser invitados a las etapas finales de clasificación.

Nuestra meta con las Clasificaciones Regionales es que sean precisas, difíciles de manipular y tengan un proceso transparente.

## Clasificaciones Regionales

Usaremos las Clasificaciones Regionales para invitar a equipos a eventos futuros, por lo que el modelo ideal es aquel que predice los resultados de partidos futuros. Con ese fin, el modelo actual incorpora los siguientes factores:

1.	Equipo
    -	Dinero ganado en premios
2.	Oponentes derrotados
    -	Dinero ganado en premios
    -	Número de equipos derrotados
3.	Resultados head-to-head

 sabemos que estás interesado en más detalles. En las próximas semanas, este repositorio albergará el código real usado para generar las clasificaciones junto con un conjunto de datos de ejemplo.

## Invitaciones

Actualizaremos las clasificaciones periódicamente hasta los open qualifiers. Estas clasificaciones finales determinarán qué equipos serán invitados a los closed qualifiers. Todos los demás equipos deberán competir en los open qualifiers para asegurar su lugar.

Las clasificaciones actuales se pueden encontrar aquí:
-   [Europa](standings_europe.md)
-   [Américas](standings_americas.md)
-   [Asia](standings_asia.md)

## Evaluando el Modelo

El enfoque que tomamos para evaluar la precisión de nuestro modelo es medir la relación entre las tasas de victoria esperadas y las observadas en los partidos.

Recorremos cada semana de partidos en nuestro conjunto de datos y asignamos valores de puntos a los equipos usando las Clasificaciones Regionales de la semana anterior. Usando la diferencia en valores de puntos, a cada partido se le asigna una tasa de victoria esperada. Dividimos esas tasas de victoria en intervalos del 5%, y luego medimos las tasas de victoria reales para los partidos que caen dentro de cada intervalo.

Así es como se ven las tasas de victoria esperadas vs. observadas cuando aplicamos este proceso con el modelo actual:

<img src="modelfit.png"/>

Hay una fuerte relación entre las tasas de victoria esperadas y observadas. La correlación entre las dos (rho de Spearman en este caso) es 0.98. Pero la pendiente es más suave de lo que nos gustaría - en un mundo ideal, la pendiente de esta línea estaría más cerca de 1. El modelo actual tiende a subestimar las tasas de victoria en el extremo bajo y sobreestimar en el extremo alto.

Creemos que este es un buen punto de partida.

## Actualizando y Mejorando el Modelo

El modelo que lanzamos hoy es el que usaremos hasta el próximo Major. Vamos a seguir experimentando, y creemos que tú también deberías hacerlo. Después de lanzar el código y los datos en este repositorio, siéntete libre de experimentar y crear algo nuevo. Siempre y cuando tu modelo funcione bien y se ajuste a nuestras metas, estaríamos felices de considerarlo.
