var orderHistory = [
  {
    delivered: 'Aug 8, 2020',
    orderPlaced: 'Aug 4, 2020',
    itemName: 'JavaScript for impatient programmers',
    author: 'Dr. Alex Rauschmayer',
    orderNumber: '114-3941689-8772232',
    shipTo: 'JS Masher',
    itemCost: '$31.55',
    total: '$34.00',
    returnBy: 'Sep 7, 2020'
  },
  {
    delivered: 'Jul 20, 2020',
    orderPlaced: 'Jul 19, 2020',
    itemName: 'The Timeless Way of Building',
    author: 'Christopher Alexander',
    orderNumber: '113-9984268-1280257',
    shipTo: 'JS Masher',
    itemCost: '$41.33',
    total: '$44.53',
    returnBy: 'Aug 19, 2020'
  },
  {
    delivered: 'Jul 7, 2020',
    orderPlaced: 'Jul 4, 2020',
    itemName: 'Gamecube Controller Adapter',
    orderNumber: '114-2875557-9059409',
    shipTo: 'JS Masher',
    itemCost: '$15.98',
    total: '$17.22',
    returnBy: 'Aug 5, 2020'
  },
  {
    delivered: 'Jul 5, 2020',
    orderPlaced: 'Jul 3, 2020',
    orderNumber: '113-2883177-2648248',
    shipTo: 'JS Masher',
    total: '$138.93',
    returnBy: 'Aug 4, 2020',
    items: [
      {
        itemName: 'Gamecube Controller',
        itemCost: '$94.95'
      },
      {
        itemName: 'The Are of Sql',
        author: 'Stephanie Faroult',
        itemCost: '$33.99'
      }
    ]
  }

];

console.log(orderHistory);
