import axios from "axios";

export const getLocation = async (latitude, longtitude) => {
  try {
    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${longtitude},${latitude}.json?access_token=${process.env.REACT_APP_API_KEY}`
    );

    const placeName = response.data.features[0].place_name;
    const cityName = response.data.features[5].place_name;

    const locationName = {
      address: placeName,
      city: cityName,
    };

    return locationName;
  } catch (error) {
    console.error(error);
    return "error";
  }
};
