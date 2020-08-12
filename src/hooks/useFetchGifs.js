import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setsTate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setTimeout(() => {
        setsTate({
          data: imgs,
          loading: false,
        });
      });
    });
  }, [category]);

  return state; // data: [], loading: true
};
