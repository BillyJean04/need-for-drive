import { routesPathsNames } from "@/utils/consts/routesPathsNames";

export const orderInfoSteps = [
  "Пункт выдачи",
  "Модель",
  "Цвет",
  "Длительность аренды",
  "Тариф",
  "Полный бак",
  "Детское кресло",
  "Правый руль",
];

const { modelPagePath, optionalPagePath, locationPagePath, totalPagePath } = routesPathsNames;

export const buttonTextForNextStep = {
  [locationPagePath]: "Выбрать модель",
  [modelPagePath]: "Дополнительно",
  [optionalPagePath]: "Итого",
  [totalPagePath]: "Заказать",
};
