import React from "react";
import { useLocation } from "react-router-dom";
import SearchChild from "./SearchChild";

const Search = () => {
  const location = useLocation();
  const items = location.state;

  return (
    <div className=" mt-5 flex flex-wrap gap-9  justify-center">
      {items.map((item) => {
        return <SearchChild key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Search;
