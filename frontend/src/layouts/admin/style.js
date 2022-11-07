import styled from "@emotion/styled";
import { Box } from "@mui/material";

const ContentContainer = styled(Box)`
  .background {
    background-color: #d3d5cc;
  }
  .ImagephoneWrapper {
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: center;
    display: flex;
  }
  .imageBox {
    display: flex;
    margin: auto;
    justify-content: center;
    max-width: 50%;
    img {
      object-fit: cover;
      width: 100%;
    }
  }
  .boxfooter {
    border-radius: 12px;
    justify-content: space-between;
    display: flex;``
    max-width: 1440px;
    margin: auto;
  }
  .backgroundbox {
    background-color: White;
    margin-top: 30px;
  }
  .titlefooter: {
    color: black;
  }
  .title {
    font-style: 50px;
    font-weight: 700;
    font-size: 40px;
    lineheight: 56px;
    text-align: center;
    margin: auto;
  }

  .mediawrapper: {
    paddingtop: 40px;
    paddingbottom: 64px;
    display: flex;
    gap: 24px;
  }
  .mediabox {
    display: flex;
    flexdirection: column;
    height: 280px;
    marginbottom: 40px;
  }
  .description-box {
    margin: auto;
  }

  .titlefooter {
    fontstyle: normal;
    fontweight: 600;
    fontsize: 20px;
    lineheight: 22px;
    text-align: center;
    display: flex;
    color: black;
    justify-content: center;
  }
`;

export default ContentContainer;
