import PropTypes from "prop-types";

import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

const CarouselImageListItem = ({ item }) => (
  <ImageListItem>
    <img
      src={`${item.urls.regular}?w=248&fit=crop&auto=format`}
      srcSet={`${item.urls.regular}?w=248&fit=crop&auto=format&dpr=2 2x`}
      alt={item.alt_description}
      loading='lazy'
    />
    <ImageListItemBar
      title={item.user.first_name}
      subtitle={item.user.portfolio_url}
      actionIcon={
        <IconButton
          sx={{ color: "rgba(255, 255, 255, 0.54)" }}
          aria-label={`info about ${item.id}`}
        >
          <InfoIcon />
        </IconButton>
      }
    />
  </ImageListItem>
);

export default CarouselImageListItem;

CarouselImageListItem.propTypes = {
  item: PropTypes.object.isRequired,
};
