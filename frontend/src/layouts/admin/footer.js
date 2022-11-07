import { Box, Typography } from "@mui/material";
import React from "react";
import ContentContainer from "./style";

const Footer = () => {
  return (
    <ContentContainer>
      {" "}
      <Box className="backgroundbox">
        <Box className="boxfooter">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            MobileShop
          </Typography>
          <Box>
            <Typography className="TitleFooter">Thông tin liên hệ</Typography>

            <Box>
              <Box>
                <Box width="18.77px"></Box>

                <Box>
                  <Typography className="TitleFooter">info@regroup.vn</Typography>
                  <Typography className="TitleFooter">
                    hoangquan@regroup.vn
                  </Typography>
                </Box>
              </Box>

              <Box>
                <Box width="18.77px"></Box>

                <Box>
                  <Typography className="TitleFooter">02543 835938</Typography>
                  <Typography className="TitleFooter">
                    09692865666 (Mr. Đông Hồ)
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box>
            <Typography className="TitleFooter">Địa chỉ</Typography>

            <Box gap="32px !important">
              <Box>
                <Box width="18.77px"></Box>

                <Box>
                  <Typography className="TitleFooter">
                    183 Binh Gia st. Ward 8. Vung Tau City
                  </Typography>
                </Box>
              </Box>

              <Box>
                <Typography className="TitleFooter">Đơn vị tổ chức</Typography>

                <Box width="85px"></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ContentContainer>
  );
};
export default Footer;
