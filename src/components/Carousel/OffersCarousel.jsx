import Carousel from "react-material-ui-carousel";
import useGetImages from "../../hooks/useGetImages";
import CarouselImageListItem from "./components/ImageListItem/CarouselImageListItem";

const OffersCarousel = () => {
  const images = useGetImages();
  console.log(images.data);
  return (
    <Carousel
      indicatorIconButtonProps={{
        style: {
          padding: "10px", // 1
          color: "white", // 3
        },
      }}
      indicatorContainerProps={{
        style: {
          // marginTop: "50px", // 5
          textAligh: "left", // 4
          backgroundColor: "#4791DB",
        },
      }}
    >
      {images.data.map((image, index) => (
        <CarouselImageListItem key={index} item={image} />
      ))}
    </Carousel>
  );
};

export default OffersCarousel;
