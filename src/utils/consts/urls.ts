export const baseURL = "https://frontend-study.simbirsoft.dev/api";

export enum Urls {
  cities = "/db/city",
  addresses = "/db/point",
  cars = "/db/car",
  categories = "/db/category",
  rates = "/db/rate",
}

export type Methods = "POST" | "GET" | "PUT" | "DELETE" | "PATCH";
