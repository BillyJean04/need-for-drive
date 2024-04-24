import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { slideItems } from "@/components/MainPageSlider/constants";
import {
  StyledMainPageSliderContainer,
  StyledMainPageSliderContent,
  StyledSliderImage,
} from "@/components/MainPageSlider/MainPageSlider.styled";
import { Button } from "@/components/ui";

export function MainPageSlider() {
  return (
    <StyledMainPageSliderContainer>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{
          clickable: true,
        }}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        {slideItems.map(({ id, subtitle, title, image, buttonColor }) => (
          <SwiperSlide key={id}>
            <StyledMainPageSliderContent>
              <h2>{title}</h2>
              <p>{subtitle}</p>
              <Button $color={buttonColor}>Подробнее</Button>
            </StyledMainPageSliderContent>
            <StyledSliderImage>
              <img src={image} alt="" />
            </StyledSliderImage>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledMainPageSliderContainer>
  );
}
