import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import "jest-styled-components";
import renderer from "react-test-renderer";
import Button from "./Button";
import { PRIMARY_COLOUR } from "../../constants";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Return ShallowWrapper conataining node(s) with the given data-test value.
 * @param {shallow} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {shallow}
 */
const findByTestAttribute = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

test("button component renders without crashing", () => {
  const wrapper = shallow(<Button>Test me</Button>);
  expect(wrapper).toBeTruthy();
});

test("button component renders as primary by default", () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("background", PRIMARY_COLOUR);
  expect(tree).toHaveStyleRule("color", "white");
  expect(tree).toHaveStyleRule("border-color", "white");
});

test("button component renders as primary by props attribute", () => {
  const wrapper = shallow(<Button intent="primary">Test me</Button>);
  // console.log(wrapper.debug());
  const testButton = findByTestAttribute(wrapper, "primary-button");

  // Check the we only have one button rendered.
  expect(testButton.length).toBe(1);

  // Check that the button actually renders the expected children.
  expect(testButton.props().children).toBe("Test me");

  // Check that the button is actually a primary button.
  expect(testButton).toHaveStyleRule("background", PRIMARY_COLOUR);
});

test("button component renders as secondary by props attribute", () => {
  const wrapper = shallow(<Button intent="secondary">Test me</Button>);
  // console.log(wrapper.debug());
  const testButton = findByTestAttribute(wrapper, "secondary-button");

  // Check the we only have one button rendered.
  expect(testButton.length).toBe(1);

  // Check that the button actually renders the expected children.
  expect(testButton.props().children).toBe("Test me");

  // Check that the button is actually a primary button.
  expect(testButton).toHaveStyleRule("background", "white");
});
