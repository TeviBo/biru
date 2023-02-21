import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common.Authorization =
  "Client-ID FMWxk4sZopeE3fvc-T-vdpXRcJC2xVmpLELvWi3ogHE";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
const useGetImages = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const makeRequest = async () => {
      const res = await axios.get("/photos?orientation=portrait&page=1", {
        headers: { "Accept-Version": "v1" },
      });
      console.log("fetch", res.data);

      const result = await res.data;
      setData(result);
    };
    makeRequest();
  }, []);

  return { data };
};

export default useGetImages;
// GpheNo2KGBe3YKoNe2DzSuRbB6vonoXjwaE6WDqIIQ5GMRFq561NDWoG
