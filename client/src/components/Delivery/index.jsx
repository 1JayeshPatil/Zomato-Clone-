import React, { useState } from "react";
import RestaurantCard from "../RestaurantCard";

// components
import DeliveryCarousel from "./DeliveryCarousel";
// import RestaurantCard from "../RestaurantCard";

const Delivery = () => {
  const [restaurantList, setRestaurantList] = useState([
    {
      _id: "124ksjf435245jv34fg3",
      isPro: true,
      isOff: true,
      name: "Urban Darbar",
      restaurantReviewValue: "4.7",
      cuisine: [
        "Mithai",
        "South Indian",
        "Chinese",
        "Street Food",
        "Fast Food",
        "Desserts",
        "North Indian",
      ],
      averageCost: "600",
    },
    {
      _id: "sdffdsadadsfadfadsfadsf",
      isPro: true,
      isOff: true,
      name: "Master Koii's",
      restaurantReviewValue: "3.6",
      cuisine: ["Asian", "Chinese", "Thai", "Malaysian", "Korean"],
      averageCost: "450",
    },
    {
      _id: "1hdshehehehssms453ss",
      isPro: true,
      isOff: false,
      name: "Chang's",
      restaurantReviewValue: "4.0",
      cuisine: [
        "Shawarma",
        "North Indian",
        "Chinese",
        "Mughlai",
        "Biryani",
        "Desserts",
        "Rolls",
      ],
      averageCost: "400",
    },
  ]);

  return (
    <>
      <DeliveryCarousel />
      <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
        Delivery Restaurants in Pune
      </h1>
      <div className="grid gap-0 md:gap-2 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
    </>
  );
};

export default Delivery;