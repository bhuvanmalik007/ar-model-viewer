import React, { useState } from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Header from "./components/Header";
import BodyBox from "./components/BodyBox";
import { CssBaseline } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";
import { models, skyBoxImg } from "./constants";
// import Darth_Vader_Helmet from "./Darth_Vader_Helmet.usdz";
// import Darth_Vader_Helmet_gltf from "./scene.gltf";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  button: {
    color: "#00a152",
  },
}));

function App() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? "dark" : "light",
        },
        typography: {
          fontFamily: [
            "Noto Sans JP",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(","),
        },
        overrides: {
          MuiSlider: {
            thumb: {
              color: "black",
            },
            track: {
              color: "grey",
            },
          },
        },
      }),
    [darkMode]
  );

  const handleNext = (event) =>
    carouselIndex + 1 === models.length
      ? setCarouselIndex(0)
      : setCarouselIndex(carouselIndex + 1);

  const handlePrevious = (event) =>
    carouselIndex === 0
      ? setCarouselIndex(models.length - 1)
      : setCarouselIndex(carouselIndex - 1);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} title="Web AR" />
        <BodyBox>
          <model-viewer
            ar
            style={{
              height: "85%",
              width: "100%",
              backgroundColor: "#70BCD1",
              "--progress-bar-color": "#00a152",
            }}
            src={models[carouselIndex].src}
            ios-src={models[carouselIndex].iosSrc}
            alt="A 3D model of an astronaut"
            auto-rotate
            camera-controls
            skybox-image={skyBoxImg}
            exposure={1.5}
            className={classes.modelViewer}
          />
          <Box
            flexWrap="nowrap"
            display="flex"
            flexDirection="row"
            width="100%"
            flexGrow={1}
            boxShadow={10}
            alignItems="center"
            alignContent="center"
            justifyContent="space-evenly"
          >
            <IconButton
              aria-label="previous"
              className={classes.button}
              size="medium"
              onClick={handlePrevious}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <Typography variant="h4" className={classes.heading}>
              {models[carouselIndex].name}
            </Typography>
            <IconButton
              aria-label="next"
              className={classes.button}
              onClick={handleNext}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </BodyBox>
      </div>
    </ThemeProvider>
  );
}

export default App;
