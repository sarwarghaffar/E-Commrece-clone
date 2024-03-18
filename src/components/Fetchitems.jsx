import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";

function Fetchitems() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  const dispatch = useDispatch();

  useEffect(()=>{
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;
    fetch("", {signal})
    .then((res)=>res.json())
    .then(({items})=>{
        dispatch(itemsActions.addInitialItems(items))

    })
    return()=>{
        controller.abort();
    }
  }, [fetchStatus])
  return (
    <div>
      fetch Done: {fetchStatus.fetchDone}
      currently Fetching: {fetchStatus.curruntlyFetching}
    </div>
  );
}

export default Fetchitems;
