export type CitiesApi = {
  data: {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
};

export type PointsApi = {
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
};
