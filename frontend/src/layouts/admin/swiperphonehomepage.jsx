import { Box } from "@mui/material";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Dataimage } from "./data";
import ContentContainer from "./style";

function Imagephone() {
  // const isMobile = useMediaQuery("(max-width: 1024px)");
  return (
    <ContentContainer>
      <Box className={"background"}>
        <Box>
          <Box className={"ImagephoneWrapper"}>
            <Swiper
              centeredSlides={true}
              loop={true}
              pagination={{
                enabled: true,
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={30}
              className="mySwiper"
            >
              {Dataimage.map((item, index) => (
                <SwiperSlide key={index}>
                  <Box className="imageBox">
                    <Box>
                      <img src={item.image} alt="logo-Imagephone" />
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Box>
    </ContentContainer>
  );
}

export default Imagephone;
