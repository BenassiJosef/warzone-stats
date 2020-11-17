import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Search.css";
import DataTableGrommet from "../../components/Datatable/DataTable";
import searchPlayer from "../../redux/actions/searchActionCreator";
import {players} from "../../data/players"


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
 
  return (
    <>
    {searchResp ? <DataTableGrommet playerData={searchResp}/> : <p>loading</p>}
    </>
  );
};

export default Search;

