function cambiarP(img_id) {
    var ficha_img = document.getElementById(img_id);
    var leccion_img = document.getElementById("lecciones_img1");
    var text = document.getElementById("info-lecciones");
  
    if (ficha_img.src.endsWith("img/ficha_2.png")) {
        leccion_img.src = "img/LeccionP_img2_trans.png";
      text.innerHTML = '<br>' + '<h2>Introducción al Poker</h2>' +
             '<br>' +
             '<p><b>Objetivo:</b></p>' + 
             '<p>El objetivo principal del poker es formar la mejor mano de cinco cartas posible utilizando las dos cartas privadas que se reparten a cada jugador y las cinco cartas comunitarias que se colocan en la mesa. El juego se desarrolla en varias rondas de apuestas, donde se van mostrando cartas en la mesa en intervalos de apuestas para formar una mano completa y el objetivo es ganar el bote, que es el conjunto de todas las fichas o dinero apostado en una mano. Se realizan una serie de rondas de apuestas hasta que se llega al final y se determina el ganador según la mejor combinación de 5 cartas que pueda hacer cada uno, con sus cartas individuales y las cartas de la mesa.</p>' +
             '<p><b>Jerarquia:</b></p>' + 
             '<p>En el poker, las manos se clasifican en diferentes categorías según la combinación de cartas que se tenga.  Las combinaciones de manos de más fuerte a más débil són:</p>' +
             '<p>1. Escalera real: Una secuencia de cinco cartas del mismo palo, del 10 al As (10-J-Q-K-A) ' +
             '<p>2. Escalera de color: Cinco cartas en secuencia del mismo palo (por ejemplo, 5-6-7-8-9 de corazones).</p>' +
             '<p>3. Poker: Cuatro cartas del mismo valor.</p>' +
             '<p>4. Full house: Tres cartas del mismo valor más un par (por ejemplo, tres 10 y dos Ases).</p>' +
             '<p>5. Color: Cinco cartas del mismo palo, pero no necesariamente en secuencia.</p>' +
             '<p>6. Escalera: Cinco cartas en secuencia, pero no del mismo palo.</p>' +
             '<p>7. Trío: Tres cartas del mismo valor.</p>' +
             '<p>8. Doble pareja: Dos pares de cartas del mismo valor.</p>' +
             '<p>9. Pareja: Dos cartas del mismo valor.</p>' +
             '<p>10. Carta Alta: Valor de la carta más alta donde el As es la más alta y el 2 la más baja (As, K, Q, J, 10, 9, 8, 7 ,6 , 5, 4, 3 i 2).</p>' +
             '<p> En el caso de que dos contrincantes tengan pareja, doble pareja, trío, escalera, color o full; el ganador se decidirá por la carta alta de estas combinaciones. (trío de Ases gana a trio de 10s)</p>'+
             '<br>';
             
    }
    else if (ficha_img.src.endsWith("img/ficha_3.png")) {
        leccion_img.src = "img/LeccionP_img3.png";
      text.innerHTML = '<br>' + '<h2>Conociendo las jugadas</h2>' +
             '<br>' +
             '<p><b>Tipo de manos:</b></p>' + 
             '<p>- Manos fuertes: En el poker, las manos fuertes son aquellas que tienen una alta probabilidad de ganar en comparación con las manos de los oponentes. Estas manos suelen ser combinaciones de cartas que forman jugadas poderosas, como escaleras, full house, color y manos más altas.</p>' +
             '<p>- Manos débiles: son aquellas que tienen una baja probabilidad de ganar y que generalmente no tienen una combinación sólida de cartas. Por ejemplo, un par bajo o cartas desconectadas de diferente palo suelen considerarse manos débiles.</p>' +
             '<p><b>Resultado de mano:</b></p>' + 
             '<p>- Mano ganadora: es aquella que tiene la combinación de cartas más fuerte entre todas las manos mostradas al final de una mano. La determinación de la mano ganadora se basa en la jerarquía de las combinaciones de cartas explicado en la lección anterior, donde una mano más alta vence a una mano más baja.</p>' +
             '<p>- Mano perdedora:  Por ende, si no tienes la mano más fuerte o te has retirado anteriormente has perdido</p>' + 
             '<p>- Empate:  En caso de empate, se consideran los valores de las cartas individuales para desempatar y si son exatamente iguales, se reparte el bote por partes iguales.</p>' +
             '<p><b>Ejemplos:</b></p>' + 
             '<p>- Ejemplo 1: Si dos jugadores tienen un full house, se compara el valor de los tríos primero y luego el de los pares.</p>' +
             '<p>- Ejemplo 2: Si dos jugadores, ambos tienen el mismo valor de trío, se consideran las cartas kicker (cartas no utilizadas en la formación de la mano) para desempatar. Por lo tanto tendrían que mirar cual es la siguiente carta más alta descartando las cartas de los tríos.</p>'+
             '<br>';
    }
    else if (ficha_img.src.endsWith("img/ficha_4.png")) {
        leccion_img.src = "img/LeccionP_img4.png";
      text.innerHTML = '<br>' + '<h2>Estrategias Básicas</h2>' +
             '<br>' +
             '<p><b>Posiciones:</b></p>' +
             '<p>- La posición en la mesa es un concepto fundamental en el poker. Se refiere a la ubicación relativa de un jugador con respecto al repartidor o dealer. Las posiciones se dividen en ciegas (big y small blind), posiciones tempranas (UTG), medias (MP) y' +
             ' tardías, así como la posición del botón (dealer) y cut off (cortar). Los jugadores en posiciones tardías tienen una ventaja estratégica, ya que actúan después de la mayoría de los otros jugadores en cada ronda de apuestas, lo que les permite tomar decisiones más informadas basadas en las acciones de los demás</p>' +
             '<p>- El jugador que se encuentra en la posición de ciega pequeña, empezara la ronda y tiene que apostar obligatoriamente la mitad de la apuesta mínima y la ciega grande  será el segundo en empezar y debe de apostar, también obligatoriamente, la apuesta mínima entera.</p>' +
             '<p><b>Acciones a realizar cuando es mi turno</b></p>' +
             '<p>- Subir (raise): Aumentar la cantidad de fichas apostadas en una ronda. Un jugador puede subir después de que otro haya apostado o subido antes que él. Cuando un jugador apuesta todo lo que tiene, se dice que hace un all-in </p>' +
             '<p>- Igualar (Call): Apostar la misma cantidad de fichas que el jugador anterior en una ronda de apuestas.</p>' +
             '<p>- Pasar (check):  Decidir no apostar y pasar la acción al siguiente jugador sin arriesgar fichas en esa ronda.</p>' +
             '<p>- Retirarse (fold): Descartar las cartas y abandonar la mano, renunciando a cualquier apuesta previa realizada en la mano.</p>' +
             '<p><b>Gestión básica del bankroll y límites de apuesta:</b></p>' +
             '<p>La gestión del bankroll se refiere a administrar de manera efectiva tu dinero destinado al poker para asegurar una estabilidad financiera a largo plazo. Algunos principios básicos incluyen:</p>' +
             '<p>- Establecer límites de apuesta: Determinar el máximo que estás dispuesto a apostar en una sola mano o sesión de juego.</p>' +
             '<p>- Jugar dentro de tus límites: Evitar apostar más de lo que tu bankroll puede soportar, lo que te protege de pérdidas significativas.</p>' +
             '<p>- Ser disciplinado: No perseguir pérdidas ni apostar por encima de tus posibilidades, y ser consciente de cuándo retirarse de una sesión para preservar tu bankroll.</p>'+
             '<br>';



            
    }
    else if (ficha_img.src.endsWith("img/ficha_5.png")) {
        leccion_img.src = "img/LeccionP_img5.png";
      text.innerHTML = '<br>' + '<h2>Conducta y Buenas prácticas en una mesa de Poker</h2>' +
             '<br>' +
             '<p><b>Normas:</b></p>' +
             '<p>- Respeto: Trata a todos los jugadores con cortesía y respeto, independientemente de su nivel de habilidad o estilo de juego.</p>' +
             '<p>- No revelar cartas: No muestres tus cartas a menos que sea necesario al final de una mano. Esto evita dar información innecesaria a los demás jugadores.</p>' +
             '<p>- No demorar el juego: Toma decisiones en un tiempo razonable para mantener el ritmo de la partida. No retrases el juego deliberadamente.</p>' +
             '<p>- Mantén el control emocional: Evita comportamientos agresivos, insultos o discusiones en la mesa. Mantén la calma y la compostura en todo momento.</p>' +
             '<p>- No discutir manos: Una vez que se ha tomado una decisión final en una mano, no discutas ni critiques las decisiones de otros jugadores. Respeta sus elecciones.</p>' +
             '<p><b>Que SI se puede hacer en una mesa?</b></p>' +
             '<p>Observar a los demás jugadores para aprende de sus patrones de apuesta, gestos y comportamientos para obtener información. Tomar notas sobre las estrategias y tendencias de los jugadores. Y por último también se puede mantener el control del bankroll: No te excedas en tus apuestas y gestiona tu bankroll de manera responsable.</p>' +
             '<p><b>Que NO se puede hacer en una mesa?</b></p>' +
             '<p>No se puede hablar de las cartas en juego, para evitar discutir las cartas activas en una mano mientras la acción esté en juego. Tampoco se puede distraer a otros jugadores: Evita conversaciones irrelevantes o distracciones que puedan afectar la concentración de los demás jugadores. Por último, no hacer comentarios despectivos para evita comentarios negativos o despectivos hacia otros jugadores, independientemente de los resultados de la partida. </p>'+
             '<br>';
             
    }
    else if (ficha_img.src.endsWith("img/ficha_1.png")) {
        leccion_img.src = "img/LeccionP_img1.png";
      text.innerHTML = '<br>' + '<h2>Tipos de Poker</h2>' +
             '<br>' +
             '<p><b>Texas Holdem</b></p>' +
             '<p>Es la variante más popular del poker y la cual la que estamos aprendiendo durante estas lecciones en PokerTiger, donde cada jugador recibe dos cartas privadas y utiliza cinco cartas comunitarias para formar la mejor mano posible.</p>' +
             '<p><b>Omaha</b></p>' +
             '<p>Similar al Texas Holdem, pero cada jugador recibe cuatro cartas privadas y debe utilizar exactamente dos de ellas junto con tres cartas comunitarias para formar una mano. Tiene una variante nombrada Omaha Hi-Lo, esta es similar, pero se reparte el bote entre la mejor mano alta (Hi) y la mejor mano baja (Lo).</p>' +
             '<p><b>Stud</b></p>' +
             '<p>En este tipo de poker, los jugadores reciben una combinación de cartas privadas y cartas comunitarias, pero algunas de ellas se reparten boca arriba, lo que permite a los jugadores ver las cartas de sus oponentes durante la mano. También tiene una variante nombrada 7-Card Stud, donde los jugadores reciben siete cartas en total, pero deben utilizar solo cinco para formar la mejor mano posible.</p>' +
             '<p><b>Draw Poker</b></p>' +
             '<p>También conocido como poker tapado, los jugadores reciben una mano completa de cartas privadas al inicio y tienen la oportunidad de descartar algunas (o todas) sus cartas para recibir nuevas cartas de la baraja.</p>'+
             '<br>';
    }
      
    text.style.display = "block";
  }

  function cambiarI(img_id) {
    var ficha_img = document.getElementById(img_id);
    var leccion_img = document.getElementById("lecciones_img1");
    var text = document.getElementById("info-lecciones");
  
    if (ficha_img.src.endsWith("img/ficha_2.png")) {
        leccion_img.src = "img/LeccionI_img2.png";
      text.innerHTML = '<br>' + '<h2>Juego en el Flop</h2>' +
             '<br>' +
             '<p><b>Estrategias de juego después de las primeras tres cartas comunitarias:</b></p>' +
             '<p>- Evaluar tu mano: Después del flop, evalúa tu mano en función de las cartas comunitarias y tus cartas privadas. Considera si has mejorado tu mano, si tienes una posible jugada (como un proyecto de color o escalera), o si tu mano es fuerte y puede ser la mejor en ese momento.</p>' +
             '<p>- Considerar la textura del flop: Observa la combinación de cartas en el flop y cómo se relacionan entre sí. Un flop conectado o con cartas del mismo palo puede influir en tu estrategia de juego.</p>' +
             '<p>- Adaptar la estrategia según la posición: Tu posición en la mesa sigue siendo importante en el flop. Si estás en posición tardía, tienes la ventaja de ver las acciones de los demás antes de tomar decisiones.</p>' +
            
             '<p><b>Cómo leer el tablero y evaluar las posibles manos de los oponentes:</b></p>' +
             '<p>- Textura del flop: La textura del flop se refiere a cómo las cartas comunitarias se relacionan entre sí. Un flop seco (cartas poco conectadas o del mismo palo) puede indicar que nadie ha mejorado significativamente su mano. Un flop mojado (con cartas conectadas o del mismo palo) puede sugerir la posibilidad de proyectos de color, escaleras u otras manos fuertes.</p>' +
             '<p>- Acciones de los oponentes: Observa las acciones de los oponentes después del flop. Las apuestas, subidas, o incluso el check-raise pueden dar pistas sobre la fuerza de sus manos.</p>' +
             '<p>- Rangos de manos: Intenta estimar los posibles rangos de manos que podrían tener tus oponentes según sus acciones y la textura del flop. Esto te ayuda a tomar decisiones más informadas sobre tu propia mano.</p>' +
            
             '<p><b>Concepto de apuestas de continuación y su aplicación efectiva:</b></p>' +
             '<p>- Apuesta de continuación (Cbet): Una apuesta de continuación es cuando un jugador que ha realizado la última apuesta pre-flop sigue con una apuesta en el flop, independientemente de si ha mejorado su mano o no. Esta estrategia se utiliza para representar fortaleza y presionar a los oponentes, especialmente si el flop favorece a tu rango de manos.</p>' +
             '<p>- Factores a considerar: Al realizar una Cbet, considera la textura del flop, tu posición, el tamaño del bote y las acciones previas de los oponentes. Una Cbet efectiva se adapta a la situación y puede ser una herramienta poderosa para controlar la acción y construir el bote.</p>'+
             '<br>';
          
    }
    else if (ficha_img.src.endsWith("img/ficha_3.png")) {
        leccion_img.src = "img/LeccionI_img3.png";
      text.innerHTML = '<br>' + '<h2>Juego en el Turn</h2>' +
             '<br>' +
             '<p><b>Qué hacer en la cuarta carta comunitaria y cómo afecta al juego:</b></p>' +
             '<p>- Evaluar la fuerza de tu mano: Después de ver la cuarta carta comunitaria (el turn), evalúa cómo afecta tu mano. Considera si has mejorado, si tu mano ha perdido fuerza o si tu posición en la mano ha cambiado significativamente.</p>' +
             '<p>- Considerar la acción previa: Reflexiona sobre las acciones de los jugadores en las rondas anteriores y cómo podrían influir en sus manos en el turn. Las apuestas y subidas previas pueden dar indicios sobre la fuerza de las manos de los oponentes.</p>' +
            
             '<p><b>Estrategias avanzadas de apuestas y extracción de valor:</b></p>' +
             '<p>- Apuesta por valor: Si crees que tienes la mejor mano en el turn, considera realizar una apuesta por valor para extraer fichas de manos más débiles. Ajusta el tamaño de tu apuesta para maximizar el valor sin alejar a los oponentes.</p>' +
             '<p>- Control del tamaño del bote: Evalúa el tamaño del bote en relación con tu mano y las posibles manos de los oponentes. Ajusta tus apuestas para controlar el tamaño del bote y maximizar las ganancias.</p>' +
             '<p>- Apuestas de bloqueo: En situaciones donde estás preocupado por manos potencialmente peligrosas en el turn, como proyectos de color o escaleras, considera realizar apuestas de bloqueo para controlar la acción y limitar las posibles pérdidas.</p>' +
            
             '<p><b>Identificación de manos dominantes y potencialmente peligrosas:</b></p>' +
             '<p>- Manos dominantes: En el turn, identifica las manos que son claramente superiores a las de tus oponentes. Por ejemplo, si tienes una escalera o un proyecto completado, puedes considerar aumentar la agresividad para extraer valor.</p>' +
             '<p>- Manos potencialmente peligrosas: Presta atención a las posibles manos peligrosas que podrían haber mejorado en el turn, como proyectos de color o escaleras. Ajusta tu juego para proteger tu mano o para minimizar las pérdidas en caso de que estés detrás en la mano.</p>'+
             '<br>';
    }
    else if (ficha_img.src.endsWith("img/ficha_4.png")) {
        leccion_img.src = "img/LeccionI_img4.png";
      text.innerHTML = '<br>' + '<h2>Juego en el River</h2>' +
             '<br>' +
             '<p><b>Estrategias finales para la última carta comunitaria:</b></p>' +
             '<p>- Evaluar tu mano final: En el river, evalúa la fuerza final de tu mano considerando las cinco cartas comunitarias y tus cartas privadas. Determina si tienes una mano ganadora, una mano fuerte pero vulnerable, o una mano que probablemente esté detrás en la mano.</p>' +
             '<p>- Revisar la acción previa: Reflexiona sobre las acciones de los jugadores en las rondas anteriores, especialmente en el turn. Las apuestas, subidas, o cambios en la dinámica de la mano pueden dar pistas sobre las manos de los oponentes.</p>' +
            
             '<p><b>Cómo decidir entre apostar, igualar o retirarse en el river:</b></p>' +
             '<p>- Apuesta por valor: Si tienes una mano fuerte y crees que es la mejor mano en el river, considera realizar una apuesta por valor para extraer fichas de manos más débiles. Ajusta el tamaño de tu apuesta para maximizar el valor sin alejar a los oponentes.</p>' +
             '<p>- Apuesta de bloqueo: En situaciones donde estás preocupado por manos potencialmente peligrosas en el river, como un posible proyecto completado, considera realizar una apuesta de bloqueo para controlar la acción y limitar las pérdidas.</p>' +
             '<p>- Igualar o retirarse: Si crees que estás detrás en la mano y no puedes mejorar tu mano en el river, considera igualar una apuesta moderada para ver las cartas de tu oponente en busca de información, o retírate si la acción indica una mano muy fuerte por parte del oponente.</p>' +
            
             '<p><b>Lectura avanzada de las acciones de los oponentes y ajuste de estrategias:</b></p>' +
             '<p>- Analiza el tamaño de las apuestas: Las apuestas grandes en el river suelen indicar fuerza y confianza en la mano, mientras que apuestas pequeñas pueden ser un intento de inducir a otros a igualar.</p>' +
             '<p>- Considera el historial de la mano: Recuerda las acciones previas de la mano para determinar la credibilidad de las acciones en el river. Los patrones de apuestas pueden dar pistas sobre las manos de los oponentes.</p>' +
             '<p>- Ajusta tu estrategia según la dinámica de la mesa: Si has sido un jugador agresivo, considera cambiar a un juego más pasivo en el river para confundir a los oponentes. Del mismo modo, si has sido pasivo, una apuesta inesperada en el river puede tener un impacto significativo.</p>'+
             '<br>';
               
    }
    else if (ficha_img.src.endsWith("img/ficha_5.png")) {
        leccion_img.src = "img/LeccionI_img5.1.png";
      text.innerHTML = '<br>' + '<h2>Gestión de Bankroll y Mentalidad</h2>' +
             '<br>' +
             '<p><b>Estrategias para gestionar un bankroll de forma efectiva:</b></p>' +
             '<p>- Establecer límites: Define límites claros para tus sesiones de juego y para la cantidad de dinero que estás dispuesto a arriesgar en cada mano o sesión. Esto te ayudará a evitar pérdidas significativas y a mantener la estabilidad financiera.</p>' +
             '<p>- Utilizar la regla del 1-2%: Una regla común es apostar entre el 1% y el 2% de tu bankroll en cada mano. Esto te protege de las oscilaciones naturales del juego y te permite jugar de manera más consistente.</p>' +
             '<p>- Separar fondos de juego: Si es posible, separa tu bankroll de poker de otros fondos. Esto te ayudará a tener una visión clara de tus ganancias y pérdidas relacionadas con el poker.</p>' +
            
             '<p><b>Consejos para mantener una mentalidad sólida durante las sesiones de juego:</b></p>' +
             '<p>- Control emocional: Mantén la calma y la compostura en todo momento, incluso en situaciones adversas. Evita dejarte llevar por emociones como la frustración, la euforia o la impaciencia.</p>' +
             '<p>- Enfoque en el proceso: En lugar de preocuparte solo por los resultados a corto plazo, concéntrate en tomar buenas decisiones en cada mano basadas en la información disponible.</p>' +
             '<p>- Descansos regulares: Tómate descansos regulares durante las sesiones largas de juego para mantener la concentración y evitar la fatiga mental.</p>' +
             '<p>- Aprender a aceptar las pérdidas: Es importante entender que las pérdidas son parte del juego. Aprende de tus errores y utiliza las experiencias para mejorar tu juego en lugar de desanimarte.</p>' +
            
             '<p><b>Cómo analizar y aprender de las manos jugadas para mejorar continuamente:</b></p>' +
             '<p>- Utiliza herramientas de seguimiento: Hay programas y aplicaciones que te permiten registrar y analizar tus manos jugadas. Utiliza estas herramientas para identificar patrones, errores recurrentes y áreas de mejora.</p>' +
             '<p>- Revisa manos clave: Después de cada sesión, revisa las manos clave en las que hayas tenido decisiones difíciles. Analiza si tomaste la mejor decisión posible y considera cómo podrías haber jugado la mano de manera diferente.</p>' +
             '<p>- Estudia estrategias: Dedica tiempo a estudiar estrategias de poker, ya sea a través de libros, videos educativos o discusiones con jugadores más experimentados. Mantente actualizado sobre las tendencias y evoluciones del juego.</p>'+
             '<br>';
          
    }
    else if (ficha_img.src.endsWith("img/ficha_1.png")) {
        leccion_img.src = "img/LeccionI_img1.png";
      text.innerHTML = '<br>' + '<h2>Estrategia Pre-Flop</h2>' +
             '<br>' +
             '<p><b>Conceptos avanzados de posición y su influencia en las decisiones:</b></p>' +
             '<p>- Posición temprana: Los jugadores en posiciones tempranas están entre los primeros en actuar después del repartidor. En estas posiciones, es recomendable ser más selectivo con las manos iniciales, ya que no se tiene mucha información sobre las acciones de los demás jugadores.</p>' +
             '<p>- Posición media: Los jugadores en posiciones medias tienen más información disponible, ya que algunos jugadores ya han actuado antes que ellos. Aquí, se pueden ampliar un poco las manos jugables, pero aún se debe tener cautela.</p>' +
             '<p>- Posición tardía: Los jugadores en posiciones tardías tienen una ventaja significativa, ya que pueden ver las acciones de la mayoría de los jugadores antes de tomar decisiones. Aquí, se pueden jugar más manos y ser más agresivo con las apuestas.</p>' +
             
             '<p><b>Cómo interpretar las manos iniciales y tomar decisiones pre-flop:</b></p>' +
             '<p>- Manos fuertes: Pares altos (Ases, Reyes, etc.), cartas altas del mismo palo (conexiones o cartas de la misma familia), y cartas altas conectadas (como K-Q, Q-J) son manos fuertes que suelen ser buenas para aumentar la apuesta pre-flop.</p>' +
             '<p>- Manos marginales: Cartas medianas o conectadas, como 8-9, 7-8, pueden ser jugables dependiendo de la posición y la dinámica de la mesa, pero requieren precaución.</p>' +
             '<p>- Manos débiles: Cartas desconectadas bajas o manos como 2-7 offsuit generalmente deben evitarse, especialmente en posiciones tempranas.</p>' +
             
             '<p><b>Cálculo de probabilidades básicas para tomar decisiones informadas:</b></p>' +
             '<p>- Probabilidades de mejoramiento: Calcula las probabilidades de mejorar tu mano en el flop, turn y river. Por ejemplo, si tienes un proyecto de color en el flop, calcula cuántas cartas del mismo palo quedan en la baraja.</p>' +
             '<p>- Pot Odds: Compara el tamaño de la apuesta que debes hacer con el tamaño del bote para determinar si la apuesta es rentable en función de las probabilidades de mejorar tu mano.</p>' +
             '<p>- Equity: Evalúa la equidad de tu mano en comparación con las manos probables de tus oponentes para determinar si tienes ventaja o desventaja en la mano.</p>'+
             '<br>';
            
    }
      
    text.style.display = "block";
  }

  function cambiarE(img_id) {
    var ficha_img = document.getElementById(img_id);
    var leccion_img = document.getElementById("lecciones_img1");
    var text = document.getElementById("info-lecciones");
  
    if (ficha_img.src.endsWith("img/ficha_2.png")) {
        leccion_img.src = "img/LeccionE_img2.png";
      text.innerHTML = '<br>' + '<h2>Juego de Bluff y Semi-Bluff (Farol)</h2>' +
             '<br>' +
             '<p><b>Estrategias avanzadas de bluff y semi-bluff en diferentes situaciones:</b></p>' +
             '<p>- Bluff efectivo: El bluff o farol es una herramienta poderosa, pero debe usarse con cuidado. Bluffea en situaciones donde creas que tu oponente es vulnerable y es probable que se retire. Por ejemplo, un bluff puede ser efectivo en un flop seco o cuando tienes una imagen de jugador sólido.</p>' +
             '<p>- Semi-Bluff: El semi-bluff implica apostar o subir con una mano que tiene potencial para mejorar en las siguientes calles (como un proyecto de color o escalera). Esto te permite ganar el bote de inmediato si tus oponentes se retiran, o mejorar tu mano si te igualan.</p>' +
             '<p>- Considera la textura del board: La textura del board (flop, turn, river) influye en la efectividad del bluff y semi-bluff. En flops conectados o mojados, los bluffs son menos efectivos, mientras que en flops secos o con cartas altas, pueden tener más éxito.</p>' +
            
             '<p><b>Cómo balancear el rango de manos para hacer jugadas efectivas:</b></p>' +
             '<p>- Balancear el rango: Es importante mantener un equilibrio entre manos fuertes y bluffs en tu rango. Esto evita que tus oponentes puedan leer fácilmente tu mano basándose en tus acciones.</p>' +
             '<p>- Identifica oportunidades de bluff: Busca situaciones donde tu rango de manos pueda representar una mano fuerte, incluso cuando estás bluffeando. Por ejemplo, si has estado jugando de manera agresiva y apuestas en el river, tus oponentes pueden creer que tienes una mano fuerte, lo que puede facilitar el bluff.</p>' +
             '<p>- Varía tu juego: No bluffees o semi-bluffees de manera predecible. Varía tu juego y utiliza el bluff como parte de una estrategia más amplia para mantenerte impredecible</p>' +
            
             '<p><b>Lectura de patrones de apuestas y comportamiento para detectar bluffing:</b></p>' +
             '<p>- Observa las acciones anteriores: Analiza las acciones previas de tus oponentes en la mano. ¿Han sido pasivos o agresivos? Las tendencias de juego pueden dar pistas sobre la fuerza de sus manos.</p>' +
             '<p>- Apuesta y tamaño de la apuesta: Las apuestas grandes o inusuales pueden indicar un intento de bluff o semi-bluff. También presta atención a los cambios en el tamaño de las apuestas a lo largo de la mano.</p>' +
             '<p>- Comportamiento no verbal: Observa el comportamiento no verbal de tus oponentes, como gestos, expresiones faciales o patrones de apuestas físicas. Estos pueden revelar información sobre la fuerza de su mano o si están tratando de engañarte con un bluff.</p>'+
             '<br>';
    }
    else if (ficha_img.src.endsWith("img/ficha_3.png")) {
        leccion_img.src = "img/LeccionE_img3.1.png";
      text.innerHTML = '<br>' + '<h2>Juego Multi-Mesa y Torneos</h2>' +
             '<br>' +
             '<p><b>Estrategias para jugar en múltiples mesas simultáneamente:</b></p>' +
             '<p>- Gestión de ventanas y disposición de las mesas: Organiza tus ventanas de juego de manera que puedas ver toda la información importante de cada mesa sin esfuerzo. Esto incluye el tamaño de las apuestas, las cartas comunitarias y las acciones de los jugadores.</p>' +
             '<p>- Priorización de manos: En el juego multi-mesa, es crucial priorizar las manos más importantes y tomar decisiones rápidas y eficientes. No te quedes atrapado en manos marginales que requieren demasiado tiempo de análisis.</p>' +
             '<p>- Mantén la concentración: Evita distracciones externas y mantén la concentración en el juego. Limita el uso de aplicaciones o navegadores que puedan interrumpir tu atención en las mesas de poker.</p>' +
            
             '<p><b>Cómo ajustar el juego en diferentes etapas de un torneo:</b></p>' +
             '<p>- Fase inicial: En las primeras etapas de un torneo, juega de manera conservadora y selecciona manos fuertes para entrar en las manos. Evita riesgos innecesarios y mantén tu stack inicial.</p>' +
             '<p>- Fase intermedia: A medida que avanzas en el torneo y las ciegas aumentan, considera ser más agresivo para robar botes y mantener tu stack competitivo. Aprovecha las oportunidades de semi-bluff y bluff en situaciones adecuadas.</p>' +
             '<p>- Fase tardía: En las etapas finales del torneo, ajusta tu juego según tu stack y la estructura de premios. Si estás corto de fichas, busca oportunidades para doblarte. Si tienes un stack grande, puedes presionar a los oponentes cortos y buscar acumular más fichas.</p>' +
            
             '<p><b>Gestión del tiempo, atención y recursos en entornos de juego intensivos:</b></p>' +
             '<p>- Establece pausas regulares: Programa pausas cortas entre sesiones de juego intensivo para descansar la mente y evitar la fatiga.</p>' +
             '<p>- Prioriza la salud: Mantén una dieta equilibrada, realiza ejercicio regularmente y asegúrate de dormir lo suficiente. La salud física y mental es fundamental para un juego efectivo.</p>' +
             '<p>- Optimiza la configuración de tu espacio de juego: Asegúrate de tener un ambiente cómodo y libre de distracciones para maximizar tu concentración y rendimiento.</p>'+
             '<br>';
    }
    else if (ficha_img.src.endsWith("img/ficha_4.png")) {
        leccion_img.src = "img/LeccionE_img4.png";
      text.innerHTML = '<br>' + '<h2>Psicología del Poker</h2>' +
             '<br>' +
             '<p><b>Análisis de las emociones y su impacto en las decisiones de juego:</b></p>' +
             '<p>- Emociones comunes: En el poker, es común experimentar una amplia gama de emociones, como la frustración, la euforia, la ansiedad y la confianza. Estas emociones pueden influir en las decisiones de juego y llevar a tomar acciones subóptimas.</p>' +
             '<p>- Impacto en las decisiones: Las emociones pueden llevar a tomar decisiones impulsivas, como hacer un bluff arriesgado debido a la frustración o igualar una apuesta agresiva por el deseo de recuperar fichas perdidas. Es importante reconocer cómo las emociones afectan tu juego y tomar medidas para controlarlas.</p>' +
            
             '<p><b>Estrategias para controlar el tilt emocional y mantener la compostura:</b></p>' +
             '<p>- Autoconciencia: Reconoce tus propias emociones y cómo influyen en tu juego. Si te sientes frustrado, enojado o ansioso, toma un momento para respirar profundamente y calmar tu mente antes de tomar decisiones importantes.</p>' +
             '<p>- Descansos y pausas: Si sientes que estás en tilt emocional, considera tomar un descanso de las mesas para refrescar tu mente y volver con una actitud más centrada.</p>' +
             '<p>- Perspectiva a largo plazo: Recuerda que el poker es un juego de habilidad a largo plazo. Incluso en momentos de mala suerte o decisiones desafortunadas, mantén la perspectiva de mejorar continuamente y aprender de cada experiencia.</p>' +
            
             '<p><b>Uso de la psicología para leer a los oponentes y tomar ventaja:</b></p>' +
             '<p>- Observación de patrones: Observa el comportamiento y las acciones de tus oponentes para identificar patrones de juego. Las acciones repetitivas pueden revelar información sobre la fuerza de sus manos o sus estrategias.</p>' +
             '<p>- Comportamiento no verbal: Presta atención al comportamiento no verbal de tus oponentes, como gestos, expresiones faciales y cambios en la postura. Estos pueden ser indicadores de la fuerza o debilidad de su mano.</p>' +
             '<p>- Engaño controlado: Utiliza la psicología para engañar a tus oponentes de manera controlada. Por ejemplo, puedes mostrar una expresión de confianza cuando tienes una mano fuerte para hacer que tus oponentes duden de su propia mano.</p>'+
             '<br>';
            
    }
    else if (ficha_img.src.endsWith("img/ficha_5.png")) {
        leccion_img.src = "img/LeccionE_img5.png";
      text.innerHTML = '<br>' + '<h2>Continuo Aprendizaje y Mejora</h2>' +
           '<br>' +
           '<p><b>Recursos avanzados para seguir aprendiendo:</b></p>' +
           '<p>- Libros de poker online: Hay una amplia variedad de libros tanto escritos como online por jugadores profesionales o expertos como PokerTiger que cubren diferentes aspectos del juego, desde estrategias básicas hasta conceptos avanzados como la teoría del poker moderna.</p>' +
           '<p>- Vídeos/cursos/test en línea: Plataformas como PokerTiger entre otras, y ofrecen cursos estructurados y análisis de manos realizados por jugadores expertos. Estos recursos son excelentes para visualizar conceptos y estrategias en acción. Con PokerTiger además podrás realizar diferentes tests para poner a prueba tu conocimiento.</p>' +
           '<p>- Coaching personalizado: Contratar a un coach de poker puede ser una excelente manera de recibir retroalimentación individualizada sobre tu juego. Un coach puede identificar áreas de mejora específicas, proporcionarte ejercicios prácticos y ayudarte a desarrollar un plan de estudio efectivo, todo y el gran coste económico que puede suponer.</p>' +
          
           '<p><b>Participación en comunidades de jugadores y análisis de manos en grupo:</b></p>' +
           '<p>- Foros de poker: Participa en foros de discusión en línea como TwoPlusTwo o Reddits/r/poker donde puedes interactuar con otros jugadores, compartir experiencias y discutir estrategias.</p>' +
           '<p>- Grupos de estudio: Únete a grupos de estudio o discusión de manos con otros jugadores de poker. Estos grupos pueden ser locales o en línea y ofrecen la oportunidad de analizar manos en grupo, compartir conocimientos y recibir retroalimentación de manera colaborativa.</p>' +
           '<p>- Análisis de manos en grupo: Organiza sesiones regulares de análisis de manos en grupo donde cada miembro presenta manos para su revisión y discusión. Este enfoque colectivo ayuda a desarrollar habilidades analíticas y a obtener diferentes perspectivas sobre situaciones de juego.</p>' +
          
           '<p><b>Importancia de la adaptabilidad y la evolución constante en el poker de alto nivel:</b></p>' +
           '<p>- Estudio continuo: Invierte tiempo regularmente en estudiar y mejorar tu juego. Mantente al tanto de las últimas tendencias, herramientas y estrategias utilizadas por jugadores de alto nivel.</p>' +
           '<p>- Mentalidad de crecimiento: Adopta una mentalidad de crecimiento donde cada experiencia, ya sea una victoria o una derrota, es una oportunidad para aprender y mejorar. La evolución constante es fundamental para mantenerse competitivo en el poker de alto nivel.</p>' +
           '<p>- Entorno cambiante: El poker es un juego dinámico donde las estrategias y tendencias evolucionan constantemente. Los jugadores exitosos son aquellos que pueden adaptarse a los cambios en el meta juego y ajustar sus estrategias en consecuencia. Por eso en PokerTiger estamos en constante atención para enseñar las nuevas estrategias y que te conviertas en el tigre de todas las mesas.</p>'+
           '<br>';
    }
    else if (ficha_img.src.endsWith("img/ficha_1.png")) {
        leccion_img.src = "img/LeccionE_img1.png";
      text.innerHTML = '<br>' + '<h2>Análisis Avanzado de Manos</h2>' +
           '<br>' +
           '<p><b>Cómo utilizar programas de análisis de manos para mejorar:</b></p>' +
           '<p>- Elección del software: Hay varios programas de análisis de manos disponibles, pero PokerTiger es la mejor  que te ayudará a analizar manos y aprender qué hacer en cada situación. Aprende a utilizar estas herramientas para analizar tus manos y obtener información valiosa sobre tu juego.</p>' +
           '<p>- Importancia del análisis: Utiliza el software para revisar tus sesiones de juego y detectar patrones en tu juego, identificar áreas de mejora y comprender mejor las estrategias utilizadas por tus oponentes.</p>' +
           '<p>- Simulaciones y aprendizaje: Con estos programas entre los que se encuentra PokerTiger, puedes realizar simulaciones detalladas para comprender cómo se desarrollan las manos en diferentes situaciones y aprender estrategias óptimas.</p>' +
          
           '<p><b>Evaluación detallada de manos históricas y toma de decisiones:</b></p>' +
           '<p>- Revisión de manos clave: Enfócate en revisar y analizar manos clave en las que hayas tomado decisiones difíciles o situaciones interesantes. Examina diferentes líneas de juego y considera si tomaste la mejor decisión posible en cada etapa de la mano.</p>' +
           '<p>- Contexto de la mano: Analiza el contexto completo de la mano, incluyendo la posición, la acción previa, el tamaño de las apuestas y las tendencias de los jugadores involucrados.</p>' +
           '<p>- Aprender de errores: Identificar errores o decisiones subóptimas en manos anteriores y utiliza esas experiencias para mejorar tu juego futuro. Aprender de los errores es una parte crucial del crecimiento como jugador de poker.</p>' +
          
           '<p><b>Identificación de patrones en el juego de los oponentes y ajuste de estrategias:</b></p>' +
           '<p>- Estilos de juego: Observa y categoriza los estilos de juego de tus oponentes, como jugadores agresivos, pasivos, tight, loose, etc. Identifica patrones en sus acciones y ajusta tu estrategia para contrarrestar sus estilos.</p>' +
           '<p>- Frecuencia de apuestas: Analiza la frecuencia con la que tus oponentes apuestan en diferentes situaciones, como en el flop, turn y river. Esto te dará pistas sobre la fuerza de sus manos y les ayudará a tomar decisiones más informadas.</p>' +
           '<p>- Adaptación continua: El análisis de manos te permite adaptar tu juego en tiempo real. A medida que identificas patrones en el juego de tus oponentes, ajusta tu estrategia para explotar sus debilidades y proteger tu propia mano.</p>'+
           '<br>';
     
  }
      
    text.style.display = "block";
  }