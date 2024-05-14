import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { CarCard } from "@/components/CarCard";
import { CarCardSkeleton } from "@/components/CarCard/components/CarCardSkeleton";
import { RadioButton } from "@/components/ui/RadioButton";
import { RadioButtonSkeleton } from "@/components/ui/RadioButton/RadioButtonSkeleton";
import {
  ModelPageContainer,
  StyledCarsContainer,
  StyledCarsNotFoundMessage,
  StyledRadioButtonsContainer,
} from "@/pages/ModelPage/ModelPage.styled";
import { CarsApi, CategoriesApi } from "@/types/api";
import { createRenderArray } from "@/utils";
import { Urls } from "@/utils/consts/urls";
import { fetcher } from "@/utils/fetcher";

export function ModelPage() {
  const [filteredCars, setFilteredCars] = useState<CarsApi["data"]>();

  const { data: cars, isLoading: isCarsLoading } = useQuery<CarsApi>({
    queryKey: ["cars"],
    queryFn: () => fetcher(Urls.cars, { method: "GET" }),
  });

  const { data: categories, isLoading: isCategoriesLoading } = useQuery<CategoriesApi>({
    queryKey: ["categories"],
    queryFn: () => fetcher(Urls.categories, { method: "GET" }),
    enabled: !!cars?.data,
  });

  const handleChange = (value: string) => {
    const filtered = cars?.data.filter((car) => car.categoryId.id === Number(value));
    setFilteredCars(filtered?.length ? filtered : cars?.data);
  };

  return (
    <ModelPageContainer>
      <StyledRadioButtonsContainer>
        <RadioButton
          radioId={0}
          onChange={(event) => handleChange(event.target.value)}
          label="Все модели"
          name="category"
          defaultChecked
        />
        {categories?.data.map(({ id, name }) => (
          <RadioButton
            radioId={id}
            key={id}
            onChange={(event) => handleChange(event.target.value)}
            label={name}
            name="category"
          />
        ))}
        {isCategoriesLoading &&
          createRenderArray(4).map((value) => <RadioButtonSkeleton key={value} />)}
      </StyledRadioButtonsContainer>
      {cars?.data === null && (
        <StyledCarsNotFoundMessage>Ничего не найдено</StyledCarsNotFoundMessage>
      )}
      <StyledCarsContainer>
        {isCarsLoading && createRenderArray(9).map((value) => <CarCardSkeleton key={value} />)}
        {(filteredCars ?? cars?.data)?.map((car) => (
          <CarCard
            id={car.id}
            key={car.id}
            name={car.name}
            priceMin={car.priceMin}
            priceMax={car.priceMax}
            imgSrc={car.thumbnail.path}
          />
        ))}
      </StyledCarsContainer>
    </ModelPageContainer>
  );
}
