import { shallow } from "enzyme";
import Index from "./index";
describe("Index", () => {
  afterEach(function() {
    sinon.restore();
  });

  it("Should render component", () => {
    // http://airbnb.io/enzyme/docs/api/shallow.html - provides a powerful api for testing components
    //  hasClass and find are example of an html you might
    // you can console.log(component.html()) to see the html of a given component or console.log(component.text()) to see text

    const component = shallow(<Index />);
    expect(component.hasClass("c3-main")).to.eql(true);
    expect(component.find("h1").text()).to.eql("C3 - User Management");
  });

  it("Should handle clicks for addUser", () => {
    // http://sinonjs.org/releases/v4.0.0/spies/
    // Here we are spying on a function within Index component
    const addUserSpy = sinon.spy(Index.prototype, "addUser");
    const stateSpy = sinon.spy(Index.prototype, "setState");
    // here we mounting the component
    const component = shallow(<Index />);
    //  you can also simulate event such as 'click', 'keydown', 'mouseover', etc
    component.find(".c3-button--addUser").simulate("click");
    // or when multiple element share the same classname, use `at` which is array based: component.find(".c3-button").at(1).simulate("click");

    // to expect a spy has been called, sinon provides a property on a spy to check if it has been called; spy.called
    expect(addUserSpy.called).to.eql(true);
    expect(stateSpy.called).to.eql(true);
  });

});
