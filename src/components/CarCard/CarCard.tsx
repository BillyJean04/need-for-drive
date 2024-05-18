import Placeholder from "@/assets/image-placeholder.png";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setModel } from "@/redux/slices/model/modelSlice";
import { deleteAllOptions } from "@/redux/slices/optional/optionalSlice";
import { formatPrice } from "@/utils";

import {
  StyledCarCardContainer,
  StyledImageContainer,
  StyledTextContainer,
} from "./CarCard.styled";

interface CarCardProps {
  id: number;
  name: string;
  priceMax?: number;
  priceMin?: number;
  colors: string[];
  imgSrc: string;
}

export function CarCard({ id, name, priceMax, priceMin, colors, imgSrc }: CarCardProps) {
  const model = useAppSelector((state) => state.model);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(deleteAllOptions());
    dispatch(
      setModel({
        id,
        name,
        priceMin: priceMin ?? 0,
        priceMax: priceMax ?? 0,
        colors,
        img: imgSrc ?? "",
      }),
    );
  };

  return (
    <StyledCarCardContainer $isActive={id === model.id} onClick={handleClick}>
      <StyledTextContainer>
        <h4>{name}</h4>
        <span>{formatPrice(priceMin, priceMax)}</span>
      </StyledTextContainer>
      <StyledImageContainer>
        <img src={imgSrc ?? Placeholder} alt="car-img" />
      </StyledImageContainer>
    </StyledCarCardContainer>
  );
}
