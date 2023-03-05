import Carousel from "react-material-ui-carousel";
import useGetImages from "../../hooks/useGetImages";
import CarouselImageListItem from "./components/ImageListItem/CarouselImageListItem";

const OffersCarousel = () => {
  const { data } = useGetImages();
  console.log(
    "Data: ",
    data.map((item) => item.alt_description)
  );

  return (
    <Carousel
      sx={{
        // maxWidth: "60rem",
        justifyContent: "center",
        alignItems: "center",
      }}
      indicatorIconButtonProps={{
        style: {
          padding: "10px", // 1
          color: "white", // 3
        },
      }}
    >
      {data &&
        data.length > 0 &&
        data.map((image, index) => (
          <CarouselImageListItem key={index} item={image} />
        ))}
    </Carousel>
  );
};

export default OffersCarousel;
