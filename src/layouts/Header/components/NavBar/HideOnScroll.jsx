import { Slide, useScrollTrigger } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

export const HideOnScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    target: window,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.object.isRequired,
};
