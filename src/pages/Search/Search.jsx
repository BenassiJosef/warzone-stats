import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Search.css";
import searchPlayer from "../../redux/actions/searchActionCreator";
import {players} from "../../data/players"
import DataTable from "../../components/DataTable"


export const Search = ({ submitPlayerRequest, history }) => {
const searchResp = useSelector(
    ({ searchReducer }) => searchReducer.searchResponse ?? false);
const dispatch = useDispatch();
const [player] = useState(players);

const search = useCallback(() => {
    searchPlayer(dispatch, {
      player,
    });
  }, [dispatch, player]);

    useEffect(() => {
        search()
    }, []);

 if (Object.keys(searchResp).length === 0 && searchResp.constructor === Object) {
    return <p>Loading Warzone Data...</p>;
  }
 
  return (
    <>
    <DataTable playerData={searchResp}></DataTable>
    </>
  );
};

export default Search;

