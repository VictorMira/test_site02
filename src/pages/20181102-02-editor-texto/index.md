---
path: '/02-editor-texto'
title: 'El Editor de Texto'
---

Para mí el programar es como un oficio, como el de un artesano, y me he dado cuenta con el paso del tiempo, que el aprender código no es más que aprender a tallar la madera, o a tejer la lana o a pintar la tela. Es la expresión de la creatividad, la que a través de nuestras manos, transforma ideas y conceptos en aplicaciones o sitios web, que reflejan nuestros deseos de expresarnos, de dejar huella o el de las personas o empresas para las que trabajamos y prestamos nuestros servicios.
 
Como todo oficio, la única manera de pasar las ideas al material es teniendo buenas herramientas, y si para otros esto sería un pincel, pintura, palillos y lana, martillo y cincel, para nosotros es nuestro Editor de Texto y el Lenguaje con el que vamos a trabajar.
 
Yo no pretendo hacer un estudio de todos los editores de texto que existen, pero si contar mi experiencia, desde el lado del programador que está dando sus primeros pasos, el cómo ha sido el proceso de seleccionar la herramienta que mejor me funciona para lo que quiero hacer.
 
Yo trabajo con un MacBookPro, principalmente porque es el equipo que tenía y en el proceso me di cuenta que es muy simple empezar a trabajar en código en ésta plataforma, no es necesario configurar nada en especial, y solo descargando node.js ya se puede a usar npm e instalar todo lo que necesitamos. En esta plataforma me encontré con el primer tropiezo, tuve la mala idea de abrir un archivo con VIM. No entiendo por qué aún lo recomiendan, acaso no saben que no se puede salir de ahí!! Bueno, sé que no soy el único, y que a muchos les ha pasado que una vez que entran no pueden salir, yo reconozco que cerré la terminal con un cierre forzado para salir, no me quedó otra.
 
https://d3nmt5vlzunoa1.cloudfront.net/pycharm/files/2013/06/vim3.gif
 
En un principio, me fui a la fuente de todo el conocimiento, Stack Overflow, y revisé la encuesta del año 2016, ahí pude ver que de todos los editores, el top #1 era Visual Studio de Microsoft, pero mi prejuicio fue más grande y pensé que si era de MS, en realidad debía ser una basura y que no era otra cosa que el volumen de desarrolladores lo que lo hacía "popular".
 
Después del traspié de VIM, y de chocar con MS en el camino, empecé a investigar y de todos los youtuber que seguía, Travis Nielson, al que seguí por mucho tiempo usaba Sublime, pero se estaba cambiando a ATOM, parte del grupo de GitHub. Vi que Sublime era de pago, y asumí que al ser así era una herramienta más avanzada y opté por soluciones gratuitas, y ATOM se veía muy bien, además Travis tenía un tutorial sobre como configurarlo, así que lo descargué, lo instalé y empecé a usarlo. En realidad me gustó mucho, pero por un lado usaba muchísimos recursos y por otro sentí que necesitaba alguna manera de poder ver en tiempo real lo que iba haciendo, y ATOM en ese momento no tenía un webserver nativo, por lo que tenía que cambiar de ventana y refrescar cada vez que hiciera un cambio, me mantuve así un buen tiempo pero luego decidí volver a buscar.
 
https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/06/atomeditor.png
 
En esta búsqueda encontré otra solución gratuita, esta vez de la mano del equipo de Adobe, y su editor Brackets. Este funcionaba muy similar a Atom, era mucho más liviano y tenía la opción de abrir con un click en el botón con el rayo, una ventana de Chrome donde el archivo que estaba editando era presentado y los cambios se veían en tiempo real. En ese sentido era la solución ideal, y la estuve usando un buen tiempo, y si bien me gustó, sentí que era un poco aburrido, poco personalizable y si bien podría editar y ver los cambios en tiempo real, era liviano y relativamente personalizable, sentí que le faltaban cosas que Atom si tenía y que extrañaba, como los temas de color e iconos, y otras gracias que hacían mucho más fácil el trabajo.
 
http://smgplaza.com/wp-content/uploads/2018/08/split.png
 
Y en ese ir y venir de conformismo, volví a encontrar a ese "monstruo" de Microsoft y su editor, Visual Studio, pero no era el IDE horrendo, sino que ahora tenía apellido, era Visual Studio Code. Empecé a leer y me topé con cosas muy interesantes, primero era open source, corría sobre Electron, al igual que Atom, era gratis!?! Tenía una tremenda comunidad de desarrolladores, y todo, absolutamente todo se podía configurar. Así que lo descargué, busque tutoriales y revisiones y todo el mundo hablaba maravillas de él, y yo las pude experimentar en vivo. Intellisense!! Parecía que me leía la mente, me ayudaba a escribir código y me indicaba como completar las funciones y métodos, donde estaba el ultimo arreglo y a citar todas las palabras iguales o definiciones de variables. Personalización de colores, íconos, usar todos los lenguajes, y frameworks, eslint, snippets, emmet, compilar Sass en vivo, no hay problema, un web server, por supuesto que si!!, múltiples ventanas, por qué no! Y los recursos, ni un quinto de lo que usaba con Atom!!
 
https://cdn-images-1.medium.com/max/2000/1*0kuAtmo7iYT9U72us7VxxA.png
 
Si bien no fue amor a primera vista, debo reconocer que hoy es mi herramienta principal, no importa el lenguaje o framework, funciona para todo, sincroniza con Git, tiene consola incorporada, Docker, Kubernetes, todo, todo al alcance de la mano!! Ah y antes que lo olvide, puedes usar la versión de desarrollo si te inscribes en el programa Insiders! Esta versión se actualiza a diario, mientras que la versión "estable" se actualiza mensual.
 
Además, puedes acceder a todos los recursos de Visual Studio Developers Tool, con cuenta de Azure gratis, servicios de Azure gratis por un año, y 200 dólares para comprar servicios por 30 días!!, y muchos recursos de capacitación gratis!!!
 
Qué más se puede pedir!!
 
Nota: También uso un laptop con Windows 7 (de mi trabajo) para programar, y configurarlo ha sido un dolor de cabeza!! Hoy tengo todo lo que necesito configurado, pero no ha sido menos laborioso, principalmente para tener Git andando, y cambiar el terminal por GitBash, esto funcionando dentro de VS Code. Tuve que instalar Python, Ruby, NodeJS y otros tantos paquetes para para poder funcionar como mi MBPro sin hacerle nada, ahora anda bien, pero me gusta mucho más trabajar con MacOS.
