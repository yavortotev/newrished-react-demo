import { useState, useEffect } from "react";
import { getAllBars, getOneBar, create, remove } from "../api/bars-api.js";
import * as request from "../api/requester.js";




export function useAllBars() {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    const fetchBars = async () => {
      try {
        let response = await getAllBars();
        setBars(response);
      } catch (error) {
        console.error('Error fetching bars:', error);
      }
    };

    fetchBars();
  }, []);

  return [bars, setBars]

}


export function useGetOneBarById(id) {

  const [bar, setBars] = useState({})


  useEffect(() => {
    (async () => {

      let result = await getOneBar(id)

      setBars(result)


    })()

  }, [id])


  return [
    bar,
    setBars,
  ]

}

export function useCreateBar() {

  const barCreateHandler = (barData) => create(barData)
  return barCreateHandler

}

export function useDeleteBar(id) {
  request.del(`http://localhost:3030/data/bars/${id}`)
}