import React from "react";
import Box from "@material-ui/core/Box";

export default function CardBox(props: { children: React.ReactNode; }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignSelf="center"
      width="90%"
      height="60%"
      maxWidth="600px"
      maxHeight="600px"
      alignItems="center"
      m={2}
      boxShadow={10}
      borderRadius="6px"
    >
      {props.children}
    </Box>
  );
}
