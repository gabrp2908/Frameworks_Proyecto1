// src/data/sampleRecipes.js
const sampleRecipes = [
  {
    id: '1',
    title: '🍕 Pizza Margherita',
    description: 'La pizza clásica italiana con tomate, mozzarella y albahaca fresca',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=300&fit=crop',
    ingredients: [
      { name: 'Harina de trigo', quantity: '500g' },
      { name: 'Salsa de tomate', quantity: '200ml' },
      { name: 'Mozzarella fresca', quantity: '250g' },
      { name: 'Albahaca fresca', quantity: '1 manojo' },
      { name: 'Aceite de oliva', quantity: '3 cucharadas' },
      { name: 'Sal', quantity: '1 cucharadita' },
      { name: 'Levadura seca', quantity: '7g' }
    ],
    steps: [
      'Mezclar la harina, sal y levadura en un bowl grande',
      'Agregar agua tibia y amasar por 10 minutos hasta obtener una masa suave',
      'Dejar reposar la masa por 1 hora hasta que duplique su tamaño',
      'Extender la masa en forma circular sobre una bandeja enharinada',
      'Agregar la salsa de tomate y distribuir uniformemente',
      'Colocar la mozzarella en rodajas y las hojas de albahaca',
      'Hornear a 220°C por 12-15 minutos hasta que el borde esté dorado',
      'Rociar con aceite de oliva y servir caliente'
    ],
    notes: 'Para una masa más crujiente, precalentar la bandeja en el horno antes de colocar la pizza'
  },
  {
    id: '2',
    title: '🍝 Espaguetis Carbonara',
    description: 'Pasta cremosa estilo italiano auténtico sin crema',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop',
    ingredients: [
      { name: 'Espaguetis', quantity: '400g' },
      { name: 'Panceta o guanciale', quantity: '200g' },
      { name: 'Huevos grandes', quantity: '3 unidades' },
      { name: 'Queso pecorino romano', quantity: '100g rallado' },
      { name: 'Pimienta negra', quantity: 'al gusto' },
      { name: 'Sal', quantity: 'para el agua de cocción' }
    ],
    steps: [
      'Cocinar la pasta en agua con sal según las instrucciones del paquete',
      'Mientras tanto, cortar la panceta en cubos pequeños y dorar en una sartén',
      'Batir los huevos con el queso pecorino y pimienta negra recién molida',
      'Escurrir la pasta reservando una taza de agua de cocción',
      'Mezclar inmediatamente la pasta caliente con la panceta y su grasa',
      'Retirar del fuego y agregar la mezcla de huevo revolviendo rápidamente',
      'Si está muy espeso, agregar un poco de agua de cocción reservada',
      'Servir inmediatamente con más queso rallado por encima'
    ],
    notes: '¡No usar crema! La carbonara auténtica se hace solo con huevo, queso y panceta'
  },
  {
    id: '3',
    title: '🥗 Ensalada César',
    description: 'Ensalada clásica con aderezo cremoso y crutones crujientes',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
    ingredients: [
      { name: 'Lechuga romana', quantity: '2 cabezas' },
      { name: 'Pechuga de pollo', quantity: '2 unidades' },
      { name: 'Pan baguette', quantity: '4 rebanadas' },
      { name: 'Queso parmesano', quantity: '100g rallado' },
      { name: 'Anchoas', quantity: '4 filetes' },
      { name: 'Ajo', quantity: '2 dientes' },
      { name: 'Jugo de limón', quantity: '3 cucharadas' },
      { name: 'Aceite de oliva', quantity: '100ml' },
      { name: 'Mostaza Dijon', quantity: '1 cucharadita' }
    ],
    steps: [
      'Cortar el pan en cubos y tostar en el horno con ajo y aceite de oliva',
      'Cocinar el pollo a la plancha hasta dorar por ambos lados',
      'Lavar y cortar la lechuga en trozos medianos',
      'Para el aderezo: mezclar anchoas, ajo, mostaza, jugo de limón y aceite',
      'Batir emulsionando hasta obtener una consistencia cremosa',
      'En un bowl grande, mezclar la lechuga con el aderezo',
      'Agregar el pollo en tiras y los crutones justo antes de servir',
      'Espolvorear con queso parmesano rallado'
    ],
    notes: 'Los crutones se mantienen más crujientes si se agregan en el momento de servir'
  },
  {
    id: '4',
    title: '🍔 Hamburguesas Caseras',
    description: 'Hamburguesas jugosas con pan artesanal y ingredientes frescos',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    ingredients: [
      { name: 'Carne molida (80/20)', quantity: '500g' },
      { name: 'Pan de hamburguesa', quantity: '4 unidades' },
      { name: 'Queso cheddar', quantity: '4 rebanadas' },
      { name: 'Lechuga', quantity: '4 hojas' },
      { name: 'Tomate', quantity: '1 unidad en rodajas' },
      { name: 'Cebolla morada', quantity: '1/2 unidad en aros' },
      { name: 'Tocino', quantity: '8 tiras' },
      { name: 'Salsa BBQ', quantity: '4 cucharadas' },
      { name: 'Sal y pimienta', quantity: 'al gusto' }
    ],
    steps: [
      'Mezclar la carne molida con sal y pimienta, sin amasar demasiado',
      'Formar 4 hamburguesas de igual tamaño y hacer un hueco en el centro',
      'Cocinar el tocino hasta quedar crujiente y reservar',
      'Cocinar las hamburguesas a fuego medio-alto por 4-5 minutos por lado',
      'En el último minuto, colocar una rebanada de queso sobre cada hamburguesa',
      'Tostar ligeramente los panes en la misma sartén',
      'Armar las hamburguesas: pan base, lechuga, tomate, hamburguesa, tocino, cebolla',
      'Agregar salsa BBQ y tapar con la parte superior del pan'
    ],
    notes: 'No presionar las hamburguesas mientras se cocinan para mantener los jugos'
  },
  {
    id: '5',
    title: '🍣 Sushi California Roll',
    description: 'Rolls de sushi rellenos de aguacate, pepino y cangrejo',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    ingredients: [
      { name: 'Arroz para sushi', quantity: '2 tazas' },
      { name: 'Alga nori', quantity: '4 hojas' },
      { name: 'Aguacate', quantity: '1 unidad maduro' },
      { name: 'Pepino', quantity: '1/2 unidad' },
      { name: 'Palitos de cangrejo', quantity: '200g' },
      { name: 'Queso crema', quantity: '100g' },
      { name: 'Vinagre de arroz', quantity: '3 cucharadas' },
      { name: 'Azúcar', quantity: '1 cucharada' },
      { name: 'Sal', quantity: '1 cucharadita' },
      { name: 'Sésamo tostado', quantity: '2 cucharadas' }
    ],
    steps: [
      'Cocinar el arroz según las instrucciones del paquete',
      'Mezclar vinagre, azúcar y sal, y agregar al arroz mientras está caliente',
      'Cortar el aguacate y pepino en tiras delgadas',
      'Colocar una hoja de nori sobre la esterilla de bambú',
      'Extender una capa delgada de arroz sobre el nori',
      'Voltear el nori y colocar los rellenos en el centro',
      'Enrollar firmemente usando la esterilla',
      'Cortar el rollo en 8 piezas con un cuchillo humedecido',
      'Espolvorear con sésamo tostado'
    ],
    notes: 'Mantener las manos húmedas al manipular el arroz para que no se pegue'
  },
  {
    id: '6',
    title: '🍫 Brownies de Chocolate',
    description: 'Brownies intensos de chocolate con nueces y centro suave',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop',
    ingredients: [
      { name: 'Chocolate negro 70%', quantity: '200g' },
      { name: 'Mantequilla sin sal', quantity: '150g' },
      { name: 'Azúcar', quantity: '250g' },
      { name: 'Huevos grandes', quantity: '3 unidades' },
      { name: 'Harina de trigo', quantity: '100g' },
      { name: 'Cacao en polvo', quantity: '30g' },
      { name: 'Nueces picadas', quantity: '100g' },
      { name: 'Esencia de vainilla', quantity: '1 cucharadita' },
      { name: 'Sal', quantity: '1 pizca' }
    ],
    steps: [
      'Precalentar el horno a 180°C y engrasar un molde cuadrado',
      'Derretir el chocolate con la mantequilla a baño maría',
      'Batir los huevos con el azúcar hasta que estén espumosos',
      'Incorporar el chocolate derretido y la vainilla a la mezcla de huevos',
      'Tamizar la harina, cacao y sal, y mezclar suavemente',
      'Agregar las nueces picadas y verter en el molde',
      'Hornear por 25-30 minutos hasta que esté firme en los bordes',
      'Dejar enfriar completamente antes de cortar en cuadrados'
    ],
    notes: 'Para brownies más húmedos, hornear 5 minutos menos y dejar reposar en el molde'
  },
  {
    id: '7',
    title: '🥘 Paella Valenciana',
    description: 'Paella tradicional con pollo, conejo y verduras',
    image: 'https://images.unsplash.com/photo-1531512073830-b031a6d1c5bc?w=400&h=300&fit=crop',
    ingredients: [
      { name: 'Arroz bomba', quantity: '400g' },
      { name: 'Pollo', quantity: '300g en trozos' },
      { name: 'Conejo', quantity: '300g en trozos' },
      { name: 'Judías verdes', quantity: '200g' },
      { name: 'Garrofó (judía ancha)', quantity: '100g' },
      { name: 'Tomate rallado', quantity: '2 cucharadas' },
      { name: 'Pimentón dulce', quantity: '1 cucharadita' },
      { name: 'Azafrán', quantity: '1 pizca' },
      { name: 'Romero fresco', quantity: '1 ramita' },
      { name: 'Caldo de pollo', quantity: '1 litro' },
      { name: 'Aceite de oliva', quantity: '4 cucharadas' }
    ],
    steps: [
      'Sofreír el pollo y conejo en aceite de oliva hasta dorar',
      'Agregar las judías verdes y garrofó, cocinar 5 minutos más',
      'Incorporar el tomate rallado y cocinar hasta que evapore el agua',
      'Añadir el pimentón y remover rápidamente para que no se queme',
      'Verter el caldo caliente, azafrán y romero, llevar a ebullición',
      'Esparcir el arroz uniformemente por toda la paellera',
      'Cocinar a fuego fuerte por 10 minutos, luego reducir a medio',
      'Cocinar 8 minutos más sin remover, hasta que el arroz esté al dente',
      'Dejar reposar 5 minutos antes de servir'
    ],
    notes: 'No remover el arroz durante la cocción para no liberar el almidón'
  },
  {
    id: '8',
    title: '🍲 Lasaña de Carne',
    description: 'Lasaña casera con capas de pasta, carne y bechamel',
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop',
    ingredients: [
      { name: 'Láminas de lasaña', quantity: '12 unidades' },
      { name: 'Carne molida de res', quantity: '500g' },
      { name: 'Cebolla', quantity: '1 unidad picada' },
      { name: 'Zanahoria', quantity: '1 unidad rallada' },
      { name: 'Salsa de tomate', quantity: '500ml' },
      { name: 'Queso mozzarella', quantity: '300g rallado' },
      { name: 'Queso parmesano', quantity: '100g rallado' },
      { name: 'Mantequilla', quantity: '50g' },
      { name: 'Harina', quantity: '50g' },
      { name: 'Leche', quantity: '500ml' },
      { name: 'Nuez moscada', quantity: '1 pizca' }
    ],
    steps: [
      'Preparar la salsa boloñesa: sofreír cebolla, agregar carne y cocinar',
      'Añadir zanahoria y salsa de tomate, cocinar a fuego lento 30 minutos',
      'Preparar la bechamel: derretir mantequilla, agregar harina y cocinar 2 minutos',
      'Incorporar leche caliente poco a poco batiendo continuamente',
      'Sazonar con sal, pimienta y nuez moscada, cocinar hasta espesar',
      'En un molde, alternar capas: salsa, pasta, bechamel, queso',
      'Repetir las capas hasta terminar con bechamel y queso por encima',
      'Hornear a 180°C por 35-40 minutos hasta dorar la superficie',
      'Dejar reposar 10 minutos antes de cortar'
    ],
    notes: 'Para ahorrar tiempo, se pueden usar láminas de lasaña que no necesitan precocción'
  }
];

export default sampleRecipes;