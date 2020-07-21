import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
const useStyles = makeStyles((theme) => ({
  card: {
  },
}));

export default function BodyBox({ children }) {
  const classes = useStyles();
  return (
    <Box
      className={classes.card}
      display="flex"
      flexDirection="column"
      alignSelf="center"
      width="80%"
      height="60%"
      maxWidth="600px"
      maxHeight="600px"
      alignItems="center"
      m={2}
      boxShadow={10}
      borderRadius="6px"
    >
      {children}
    </Box>
  );
}

BodyBox.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};
