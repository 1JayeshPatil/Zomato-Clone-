import React, { useState } from "react";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";
import { useParams } from "react-router-dom";

// components
import Navbar from "../components/Navbar";
import ImageGrid from "../components/Restaurant/ImageGrid";
import InfoButton from "../components/Restaurant/InfoButton";
import RestaurantInfo from "../components/Restaurant/RestaurantInfo";
import Tabs from "../components/Restaurant/Tabs";
import CartContainer from "../components/Cart/CartContainer";

const RestaurantLayout = ({ children: Component, ...props }) => {
  const [restaurant, setRestaurant] = useState({
    images: [
      {
        location:
          "https://b.zmtcdn.com/data/pictures/1/18540371/d8bc15f5746cb822101112bd9b674fa5.jpg",
      },
      {
        location:
          "https://b.zmtcdn.com/data/pictures/chains/7/6508047/0690264599d8796c08291796ab2b3e54.jpg",
      },
      {
        location:
          "https://b.zmtcdn.com/data/pictures/chains/7/6508047/07c44b214ca5d12777712f288485abc1.jpg",
      },
      {
        location:
          "https://b.zmtcdn.com/data/pictures/chains/8/301718/521b89e0710553cee262e5f0b13efb23.jpg",
      },
      {
        location:
          "https://b.zmtcdn.com/data/pictures/5/18216915/1cd1d09c0a137b5d8da7a7f7310cd919.jpg",
      },
    ],
    name: "Madéline",
    cuisine: ["Biryani", "Kebab", "Desserts", "Sichuan", "North Indian"],
    address: "Kharadi, Pune",
    restaurantRating: 4.6,
    deliveryRating: 4.1,
  });

  const { id } = useParams();
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 mt-8 lg:px-20 pb-20">
        <ImageGrid images={restaurant.images} />
        <RestaurantInfo {...restaurant} />
        <div className="my-4 flex flex-wrap gap-3 mx-auto">
          <InfoButton isActive="true">
            <TiStarOutline /> Add Review
          </InfoButton>
          <InfoButton>
            <RiDirectionLine /> Direction
          </InfoButton>
          <InfoButton>
            <BiBookmarkPlus /> Bookmark
          </InfoButton>
          <InfoButton>
            <RiShareForwardLine /> Share
          </InfoButton>
        </div>
        <div className="my-10 sticky bg-white top-0 pt-2 z-10">
          <Tabs />
        </div>
        {Component}
      </div>
      <CartContainer />
    </>
  );
};

export default RestaurantLayout;