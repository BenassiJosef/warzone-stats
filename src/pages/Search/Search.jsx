import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./Search.css";
import { withRouter } from "react-router-dom";
import Input from "../../elements/Input/Input";
import Button from "../../elements/Button/Button";
import searchPlayer from "../../redux/actions/searchActionCreator";

export const Search = ({ submitPlayerRequest, history, searchResp }) => {
  const [credentials, setCredentials] = useState({
    playerID: "",
  });

  useEffect(() => {
    console.log(searchResp);
  }, [searchResp]);

  return (
    <>
      <Input
        id="player"
        label="Activision Player ID Examlpe: (josefbenassi%237491959)"
        type="text"
        onChange={(e) => {
          setCredentials({ ...credentials, playerID: e.target.value });
        }}
      />
      <Button
        intent="primary"
        disabled={false}
        onClick={() => {
          submitPlayerRequest(
            {
              playerID: credentials.playerID,
            },
            history
          );
        }}
      >
        Search
      </Button>
    </>
  );
};

export const mapStateToProps = (state) => {
  return {
    searchResp:
      state.searchReducer.searchResponse !== undefined
        ? state.searchReducer.searchResponse
        : "",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitPlayerRequest: (payload, history) =>
      searchPlayer(dispatch, payload, history),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
