import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "../admin/Navbar";
import Footer from "./footer";
import Media from "./Media";
import Imagephone from "./swiperphonehomepage.jsx";
const homepage = () => {
  return (
    <Box>
      <div>
        <Navbar />
      </div>
      <div>
        <Imagephone />
      </div>
      <div>
        <Media />
      </div>
      <div>
        <Footer />
      </div>
      <Typography>© 2022 make by </Typography>
    </Box>
  );
};
export default homepage;
