const clients = [
  {
    clientId: 2,
    companyName: "Zakłady mięsne Solańscy",
    firstName: "Edward",
    lastName: "Solański",
    phoneNumber: "978456723",
    email: "zm_solanscy@mail.com",
    address: {
      street: "ul.Nowodworska 80",
      postalCode: "61-222",
      city: "Poznań",
    },
    status: "aktywny",
  },
  {
    clientId: 1,
    companyName: "Zakłady mięsne Stokłosa",
    firstName: "Adam",
    lastName: "Markowski",
    phoneNumber: "678234765",
    email: "zm_stokolosa@mail.com",
    address: {
      street: "ul.Witosa 10",
      postalCode: "69-100",
      city: "Słubice",
    },
    status: "aktywny",
  },
  {
    clientId: 3,
    companyName: "ZM Turowski",
    firstName: "Piotr",
    lastName: "Turowski",
    phoneNumber: "867544765",
    email: "zm_turowski@mail.com",
    address: {
      street: "al. Wojska Polskiego 33",
      postalCode: "66-400",
      city: "Gorzów Wielkopolski",
    },
    status: "aktywny",
  },
];

const users = [
  {
    userId: 1,
    firstName: "Jan",
    lastName: "Kowalski",
    phoneNumber: "607934182",
    email: "jan_k@email.com",
    role: "administrator",
    status: "aktywny",
  },
  {
    userId: 4,
    firstName: "Agata",
    lastName: "Krzeszowska",
    phoneNumber: "685234054",
    email: "agata_k@email.com",
    role: "technolog",
    status: "aktywny",
  },
  {
    userId: 3,
    firstName: "Andrzej",
    lastName: "Malinowski",
    phoneNumber: "679234374",
    email: "andrzej_m@email.com",
    role: "kierownik produkcji",
    status: "aktywny",
  },
  {
    userId: 2,
    firstName: "Anna",
    lastName: "Nowak",
    phoneNumber: "709856234",
    email: "anna_n@email.com",
    role: "handlowiec",
    status: "aktywny",
  },
  {
    userId: 5,
    firstName: "Edward",
    lastName: "Rak",
    phoneNumber: "978345278",
    email: "edward_r@email.com",
    role: "magazynier",
    status: "aktywny",
  },
];

const categories = [
  {
    standardProductCategoryId: 4,
    name: "Inne",
  },
  {
    standardProductCategoryId: 1,
    name: "Nóż",
  },
  {
    standardProductCategoryId: 2,
    name: "Sito",
  },
  {
    standardProductCategoryId: 3,
    name: "Szarpak",
  },
];
const materialWarehouse = [
  {
    id: 1,
    name: "Materiał",
    quantity: 50,
  },
  {
    id: 2,
    name: "Materiał 2",
    quantity: 40,
  },
  {
    id: 3,
    name: "Materiał 3",
    quantity: 30,
  },
];

const productWarehouse = [
  {
    productWarehouseItemId: 1,
    quantity: 0,
    standardProduct: {
      standardProductId: 1,
      name: "Produkt 1",
      dimensions: "100x100",
      status: "produkowany",
      standardProductCategory: {
        standardProductCategoryId: 1,
        name: "Nóż",
      },
    },
  },
  {
    productWarehouseItemId: 2,
    quantity: 0,
    standardProduct: {
      standardProductId: 2,
      name: "Produkt 2",
      dimensions: "100x100",
      status: "produkowany",
      standardProductCategory: {
        standardProductCategoryId: 2,
        name: "Sito",
      },
    },
  },
  {
    productWarehouseItemId: 3,
    quantity: 10,
    standardProduct: {
      standardProductId: 3,
      name: "Produkt 3",
      dimensions: "100x100",
      status: "produkowany",
      standardProductCategory: {
        standardProductCategoryId: 3,
        name: "Szarpak",
      },
    },
  },
  {
    productWarehouseItemId: 4,
    quantity: 25,
    standardProduct: {
      standardProductId: 4,
      name: "Produkt 4",
      dimensions: "100x100",
      status: "produkowany",
      standardProductCategory: {
        standardProductCategoryId: 4,
        name: "Inne",
      },
    },
  },
];

const standardProducts = [
  {
    standardProductId: 1,
    name: "Produkt 1",
    dimensions: "100x100",
    status: "produkowany",
    standardProductCategory: {
      standardProductCategoryId: 1,
      name: "Nóż",
    },
  },
  {
    standardProductId: 2,
    name: "Produkt 2",
    dimensions: "100x100",
    status: "produkowany",
    standardProductCategory: {
      standardProductCategoryId: 2,
      name: "Sito",
    },
  },
  {
    standardProductId: 3,
    name: "Produkt 3",
    dimensions: "100x100",
    status: "produkowany",
    standardProductCategory: {
      standardProductCategoryId: 3,
      name: "Szarpak",
    },
  },
  {
    standardProductId: 4,
    name: "Produkt 4",
    dimensions: "100x100",
    status: "produkowany",
    standardProductCategory: {
      standardProductCategoryId: 4,
      name: "Inne",
    },
  },
];

const customProducts = [
  {
    customProductId: 1,
    name: "Produkt specjalny 1",
    description: "Opis",
    technologist: {
      firstName: "Agata",
      lastName: "Krzeszowska",
    },
    status: "przygotowany",
    orderDate: "2020-09-01T00:00:00",
    preparationStartDate: "2020-09-02T00:00:00",
    preparationCompletionDate: "2020-09-03T00:00:00",
  },
  {
    customProductId: 2,
    name: "Produkt specjalny 2",
    description: "Opis",
    technologist: {
      firstName: "Agata",
      lastName: "Krzeszowska",
    },
    status: "przygotowany",
    orderDate: "2020-09-01T00:00:00",
    preparationStartDate: "2020-09-03T00:00:00",
    preparationCompletionDate: "2020-09-04T00:00:00",
  },
  {
    customProductId: 3,
    name: "Produkt specjalny 3",
    description: "Opis",
    technologist: {
      firstName: "Agata",
      lastName: "Krzeszowska",
    },
    status: "przygotowany",
    orderDate: "2020-09-01T00:00:00",
    preparationStartDate: "2020-09-04T00:00:00",
    preparationCompletionDate: "2020-09-05T00:00:00",
  },
  {
    customProductId: 4,
    name: "Produkt specjalny 4",
    description: "Opis",
    technologist: null,
    status: "zamówiony",
    orderDate: "2020-10-20T00:00:00",
    preparationStartDate: "0001-01-01T00:00:00",
    preparationCompletionDate: "0001-01-01T00:00:00",
  },
];

const materials = [
  {
    materialId: 1,
    name: "Materiał 1",
  },
  {
    materialId: 2,
    name: "Materiał 2",
  },
  {
    materialId: 3,
    name: "Materiał 3",
  },
  {
    materialId: 4,
    name: "Materiał 4",
  },
  {
    materialId: 5,
    name: "Materiał 5",
  },
];

const warehousemanOrders = [
  {
    orderId: 5,
    placingDate: "2020-10-20T00:00:00",
    realizationStartDate: "2020-10-21T00:00:00",
    completionDate: "0001-01-01T00:00:00",
    status: "w realizacji",
    type: "standardowy",
    client: {
      companyName: "Zakłady mięsne Solańscy",
      firstName: "Edward",
      lastName: "Solański",
      phoneNumber: "978456723",
      eMail: "zm_solanscy@mail.com",
      address: {
        street: "ul.Nowodworska 80",
        postalCode: "61-222",
        city: "Poznań",
      },
      status: "aktywny",
    },
    salesman: {
      firstName: "Anna",
      lastName: "Nowak",
    },
    warehouseman: {
      firstName: "Edward",
      lastName: "Rak",
    },
    customOrderItems: [],
    standardOrderItemDetails: [
      {
        standardOrderItemId: 6,
        standardProduct: {
          standardProductId: 1,
          name: "Produkt 1",
          dimensions: "100x100",
          status: "produkowany",
          standardProductCategory: {
            standardProductCategoryId: 1,
            name: "Nóż",
          },
        },
        quantity: 10,
        status: "niedostępny",
        missingQuantity: 10,
      },
      {
        standardOrderItemId: 7,
        standardProduct: {
          standardProductId: 2,
          name: "Produkt 2",
          dimensions: "100x100",
          status: "produkowany",
          standardProductCategory: {
            standardProductCategoryId: 2,
            name: "Sito",
          },
        },
        quantity: 10,
        status: "niedostępny",
        missingQuantity: 10,
      },
    ],
  },
];

const managerMissingProducts = [
  {
    standardProduct: {
      standardProductId: 1,
      name: "Produkt 1",
      dimensions: "100x100",
      status: "produkowany",
      standardProductCategory: {
        standardProductCategoryId: 1,
        name: "Nóż",
      },
    },
    quantity: 10,
  },
  {
    standardProduct: {
      standardProductId: 2,
      name: "Produkt 2",
      dimensions: "100x100",
      status: "produkowany",
      standardProductCategory: {
        standardProductCategoryId: 2,
        name: "Sito",
      },
    },
    quantity: 10,
  },
];

const customOrderItems = [
  {
    customOrderItemId: 2,
    customProduct: {
      customProductId: 1,
      name: "Produkt specjalny 1",
      description: "Opis",
      technologist: null,
      status: "przygotowany",
      orderDate: "2020-09-01T00:00:00",
      preparationStartDate: "2020-09-02T00:00:00",
      preparationCompletionDate: "2020-09-03T00:00:00",
    },
    status: "zrealizowany",
    quantity: 5,
    orderDate: "2020-09-01T00:00:00",
    productionStartDate: "2020-09-04T00:00:00",
    completionDate: "2020-09-06T00:00:00",
  },
  {
    customOrderItemId: 3,
    customProduct: {
      customProductId: 2,
      name: "Produkt specjalny 2",
      description: "Opis",
      technologist: null,
      status: "przygotowany",
      orderDate: "2020-09-01T00:00:00",
      preparationStartDate: "2020-09-03T00:00:00",
      preparationCompletionDate: "2020-09-04T00:00:00",
    },
    status: "zrealizowany",
    quantity: 15,
    orderDate: "2020-09-01T00:00:00",
    productionStartDate: "2020-09-05T00:00:00",
    completionDate: "2020-09-10T00:00:00",
  },
  {
    customOrderItemId: 4,
    customProduct: {
      customProductId: 3,
      name: "Produkt specjalny 3",
      description: "Opis",
      technologist: null,
      status: "przygotowany",
      orderDate: "2020-09-01T00:00:00",
      preparationStartDate: "2020-09-04T00:00:00",
      preparationCompletionDate: "2020-09-05T00:00:00",
    },
    status: "zrealizowany",
    quantity: 9,
    orderDate: "2020-09-01T00:00:00",
    productionStartDate: "2020-09-08T00:00:00",
    completionDate: "2020-09-12T00:00:00",
  },
  {
    customOrderItemId: 1,
    customProduct: {
      customProductId: 4,
      name: "Produkt specjalny 4",
      description: "Opis",
      technologist: null,
      status: "zamówiony",
      orderDate: "2020-10-20T00:00:00",
      preparationStartDate: "0001-01-01T00:00:00",
      preparationCompletionDate: "0001-01-01T00:00:00",
    },
    status: "zamówiony",
    quantity: 10,
    orderDate: "2020-10-20T00:00:00",
    productionStartDate: "0001-01-01T00:00:00",
    completionDate: "0001-01-01T00:00:00",
  },
];

export {
  clients,
  users,
  categories,
  materialWarehouse,
  productWarehouse,
  standardProducts,
  customProducts,
  materials,
  warehousemanOrders,
  managerMissingProducts,
  customOrderItems,
};
