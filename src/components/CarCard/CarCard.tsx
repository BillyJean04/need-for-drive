import Placeholder from "@/assets/image-placeholder.png";
import {
  StyledCarCardContainer,
  StyledImageContainer,
  StyledTextContainer,
} from "@/components/CarCard/CarCard.styled";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setModel } from "@/redux/slices/model/modelSlice";
import { formatPrice } from "@/utils";

interface CarCardProps {
  id: number;
  name: string;
  priceMax: number;
  priceMin: number;
  imgSrc: string;
}

export function CarCard({ id, name, priceMax, priceMin, imgSrc }: CarCardProps) {
  const model = useAppSelector((state) => state.model);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      setModel({ id, name, priceMin: priceMin ?? 0, priceMax: priceMax ?? 0, img: imgSrc ?? "" }),
    );
  };

  const isPriceExist = !priceMin && "Цена не указана";

  return (
    <StyledCarCardContainer $isActive={id === model.id} onClick={handleClick}>
      <StyledTextContainer>
        <h4>{name}</h4>
        <span>
          {isPriceExist || formatPrice(priceMin)} - {formatPrice(priceMax)}
        </span>
      </StyledTextContainer>
      <StyledImageContainer>
        <img src={imgSrc ?? Placeholder} alt="car-img" />
      </StyledImageContainer>
    </StyledCarCardContainer>
  );
}
