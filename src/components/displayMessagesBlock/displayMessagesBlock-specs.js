import React from "react";
import { expect } from "chai";
import { shallow, render, mount } from 'enzyme';

import DisplayMessagesBlock from "./displayMessagesBlock";
import DisplayMessage from "../displayMessage";

describe("displayMessagesBlock", () => {
  let component;

  beforeEach(() => {
    component = shallow(<DisplayMessagesBlock />);
  });

  it(".jumbotron class exist", () => {
    expect(component.find(".jumbotron")).to.have.length(1);
  });

  it('should render <DisplayMessage /> when passed in', () => {
	    expect(component.contains(<DisplayMessage/>)).to.equal(true);
	});
});
