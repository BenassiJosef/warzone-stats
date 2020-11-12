import styled from "styled-components";
import { PRIMARY_COLOUR, FONT_FAMILY } from "../../constants";

const Button = styled.button.attrs((props) => ({
  "data-test": `${props.intent}-button`,
}))`
  /* Adapt the colors based on primary prop */
  background: ${(props) => {
    switch (props.intent) {
      case "primary":
        return PRIMARY_COLOUR;
      case "secondary":
        return "white";
      case "link":
        return "none";
      default:
        return PRIMARY_COLOUR;
    }
  }};

  color: ${(props) => {
    switch (props.intent) {
      case "primary":
        return "white";
      case "secondary":
        return PRIMARY_COLOUR;
      case "link":
        return PRIMARY_COLOUR;
      default:
        return "white";
    }
  }};

  border-color: ${(props) => {
    switch (props.intent) {
      case "primary":
      case "secondary":
        return PRIMARY_COLOUR;
      case "link":
        return "white";
      default:
        return "white";
    }
  }};

  padding: ${(props) => {
    switch (props.intent) {
      case "primary":
        return "9px 20px 8px 20px";
      case "secondary":
        return "9px 20px 8px 20px";
      case "link":
        return 0;
      default:
        return "9px 20px 8px 20px";
    }
  }};

  border: ${(props) => {
    switch (props.intent) {
      case "primary":
        return `solid 1px ${PRIMARY_COLOUR}`;
      case "secondary":
        return `solid 1px ${PRIMARY_COLOUR}`;
      case "link":
        return "none";
      default:
        return "inherit";
    }
  }};

  text-align: ${(props) => {
    switch (props.intent) {
      case "primary":
        return "center";
      case "secondary":
        return "center";
      case "link":
        return "left";
      default:
        return "inherit";
    }
  }};

  :focus {
    outline: 0;
  }
  opacity: ${(props) => (props.disabled === true ? 0.6 : 1.0)};

  min-width: 156px;
  font-family: ${FONT_FAMILY};
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  border-radius: 3px;
  margin-right: 16px;

  :hover {
    cursor: ${(props) => (props.disabled === true ? "not-allowed" : "pointer")};
  }
`;

export default Button;
