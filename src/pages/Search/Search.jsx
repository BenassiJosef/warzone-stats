import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Search.css";
import Input from "../../elements/Input/Input";
import Button from "../../elements/Button/Button";
import searchPlayer from "../../redux/actions/searchActionCreator";

export const Search = ({ submitPlayerRequest, history }) => {
  const searchResp = useSelector(
    ({ searchReducer }) => searchReducer.searchResponse ?? ""
  );
  const dispatch = useDispatch();
  const [playerID, setPlayerId] = useState("");

  const search = useCallback(() => {
    searchPlayer(dispatch, {
      playerID,
    });
  }, [dispatch, playerID]);

  useEffect(() => {
    console.log(searchResp);
  }, [searchResp]);

  return (
    <>
      <Input
        id="player"
        label="Activision Player ID's Examlpe: (josefbenassi%237491959)"
        type="text"
        onChange={({ target }) => setPlayerId(target.value)}
      />
      <Button intent="primary" disabled={false} onClick={search}>
        Search
      </Button>
    </>
  );
};

export default Search;
