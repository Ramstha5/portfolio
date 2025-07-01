import React from "react";
import { useSelector } from "react-redux";

const FetchItem = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <div>
        fetch Done: {fetchStatus.fetchDone}
        currently fethcing : {fetchStatus.currentlyFetching}
      </div>
    </>
  );
};

export default FetchItem;
