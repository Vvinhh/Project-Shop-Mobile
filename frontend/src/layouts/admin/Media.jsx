import { Box, Link, Typography } from "@mui/material";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { mediaData } from "./data";
import ContentContainer from "./style";

function Media() {
  return (
    <ContentContainer>
      <Box>
        <Typography className="title">Tin Tức</Typography>
        <Box className={"mediaWrapper"}>
          <Swiper
            pagination={{
              enabled: true,
              clickable: true,
              loop: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            // slidesPerView={isMobile ? 1 : 4}
            spaceBetween={24}
          >
            {mediaData.map((item, index) => (
              <SwiperSlide key={index}>
                <Link underline="hover" className={"mediaBox"} href={item.link}>
                  <Box className={"imageBox"}>
                    <Box width="100%">
                      <img src={item.image} alt="logo-Imagephone" />
                    </Box>
                  </Box>
                  <Box className="description-box">
                    <Typography className="titlefooter">
                      {item.description}
                    </Typography>
                  </Box>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </ContentContainer>
  );
}

export default Media;
