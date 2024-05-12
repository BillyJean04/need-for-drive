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
