import { Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid";
import OffersCarousel from "../components/Carousel/OffersCarousel";

import Header from "./Header/Header";
import Item from "./site-styles";

const Site = () => {
  const { loading } = true;
  return (
    <Grid container spacing={1}>
      <Grid item lg={12} xs={12} md={12} sx={{ mb: 8 }}>
        {loading ? <Skeleton /> : <Header />}
      </Grid>
      <Grid item xs={12} lg={12} md={8}>
        {loading ? <Skeleton /> : <OffersCarousel />}
      </Grid>
      <Grid item xs={4} lg={4}>
        {loading ? <Skeleton /> : <Item>xs=4 lg=4</Item>}
      </Grid>
      <Grid item xs={8} lg={8}>
        {loading ? <Skeleton /> : <Item>xs=8 lg=8</Item>}
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        {loading ? <Skeleton /> : <Item>lg=12</Item>}
      </Grid>
    </Grid>
  );
};

export default Site;
