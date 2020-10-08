import React, { useState, useContext } from "react";
import { FaStar } from "react-icons/fa";
import NewsContext from "../context/NewsContext";

export interface IStarIcon {
  item: any;
}

const StarIcon: React.FC<IStarIcon> = ({ item }) => {
  const [checked, setChecked] = useState(false);

  const newscontext = useContext(NewsContext);

  const { setfavourite } = newscontext;

  const handleOncheck = () => {
    setfavourite(item);
  };

  return (
    <div className="mystar">
      <label>
        <input
          type="checkbox"
          name="rating"
          checked={checked}
          onChange={handleOncheck}
        />
        <FaStar className="star" color="grey" />
      </label>
    </div>
  );
};

export default StarIcon;
