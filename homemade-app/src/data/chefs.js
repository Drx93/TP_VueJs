// src/data/chefs.js
export const chefs = [
    {
      id: 1,
      name: 'Mario',
      specialties: ['Plat 1', 'Plat 2', 'Plat 3'],
      bio: 'Mario est un cuisinier passionné par la cuisine italienne traditionnelle. Avec plus de 10 ans d expérience dans les cuisines de restaurants authentiques, il maîtrise à la perfection les pâtes',
      dishes: [
        { name: 'Carbonara', description: 'C est des pates avec lardons', price: 10 },
        { name: 'Bolognaise', description: 'C est des pates avec sauce tomates', price: 12 },
        { name: 'lasagne', description: 'Pates avec sauce tomate viande hachées en lamelle', price: 15 },
      ],
    },
    {
      id: 2,
      name: 'Cédric Grolet',
      specialties: ['Plat 4', 'Plat 5', 'Plat 6'],
      bio: 'Cédric Grolet est un maître boulanger pâtissier réputé pour son expertise et son sens aigu de la perfection. Spécialiste des viennoiseries ',
      dishes: [
        { name: 'Croissant', description: 'Viennoiserie avec du beurre', price: 11 },
        { name: 'Pain au chocolat', description: 'Viennoiserie avec chocalat', price: 13 },
        { name: 'Croissant aux amandes', description: 'Croissant à base de pâte d amandes', price: 16 },
      ],
    },
    // Ajoute plus de cuisiniers selon les besoins
  ];
  