import Slide1 from "@/assets/slide1.jpg";
import Slide2 from "@/assets/slide2.jpg";
import Slide3 from "@/assets/slide3.jpg";
import Slide4 from "@/assets/slide4.jpg";

export enum ButtonColorsEnum {
  GREEN = "green",
  LIGHT_GREEN = "lightGreen",
  BLUE = "blue",
  RED = "red",
  PURPLE = "purple",
}

export const slideItems = [
  {
    id: 1,
    title: "Бесплатный парковка",
    subtitle:
      "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
    image: Slide1,
    buttonColor: ButtonColorsEnum.GREEN,
  },
  {
    id: 2,
    title: "Страховка",
    subtitle: "Полная страховка страховка автомобиля",
    image: Slide2,
    buttonColor: ButtonColorsEnum.BLUE,
  },
  {
    id: 3,
    title: "Бензин",
    subtitle: "Полный бак на любой заправке города за наш счёт",
    image: Slide3,
    buttonColor: ButtonColorsEnum.RED,
  },
  {
    id: 4,
    title: "Бесплатный парковка",
    subtitle: "Автомобиль проходит еженедельное ТО",
    image: Slide4,
    buttonColor: ButtonColorsEnum.PURPLE,
  },
];
