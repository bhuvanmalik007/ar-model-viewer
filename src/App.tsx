import React, { useState } from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Header from "./components/Header";
import CardBox from "./components/CardBox";
import { CssBaseline } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";
import { models, skyBoxImg } from "./constants";
// import Darth_Vader_Helmet from "./Darth_Vader_Helmet.usdz";
// import Darth_Vader_Helmet_gltf from "./scene.gltf";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": PersonInfoProps;
    }
  }
}
type PersonInfoProps = React.HTMLAttributes<HTMLElement> & {
  ar: boolean;
  style: Record<string, string | number>;
  src: string;
  alt: string;
  exposure: number;
};
const useStyles = makeStyles((_theme) => ({
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
  const handleNext = () =>
    carouselIndex + 1 === models.length
      ? setCarouselIndex(0)
      : setCarouselIndex(carouselIndex + 1);
  const handlePrevious = () =>
    carouselIndex === 0
      ? setCarouselIndex(models.length - 1)
      : setCarouselIndex(carouselIndex - 1);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} title="Web AR" />
        <CardBox>
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
            <Typography variant="h4">{models[carouselIndex].name}</Typography>
            <IconButton
              aria-label="next"
              className={classes.button}
              onClick={handleNext}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </CardBox>
      </div>
    </ThemeProvider>
  );
}
