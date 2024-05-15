export interface CitiesApi {
  data: {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
}

export interface PointsApi {
  data: {
    id: number;
    name: string;
    address: string;
    createdAt: Date;
    updatedAt: Date;
    cityId: {
      id: number;
      name: string;
      createdAt: Date;
      updatedAt: Date;
    };
  };
}

export interface Category {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CategoriesApi {
  data: Category[];
}

export interface CarsApi {
  data: {
    id: number;
    priceMax?: number;
    priceMin?: number;
    name: string;
    thumbnail: {
      path: string;
      size: number;
    };
    description: string;
    number: string;
    tank: string;
    colors: string[];
    createdAt: Date;
    updatedAt: Date;
    categoryId: Category;
  }[];
}
