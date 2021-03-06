import { shallow,mount } from "enzyme";
import Index from "./../../index";
describe("Index", () => {
  afterEach(function() {
    sinon.restore();
  });

  it("Should render component", () => {
    // http://airbnb.io/enzyme/docs/api/shallow.html - provides a powerful api for testing components
    //  hasClass and find are example of an html you might
    // you can console.log(component.html()) to see the html of a given component or console.log(component.text()) to see text

    const component = shallow(<Index />);
    expect(component.hasClass("c3__main")).to.eql(true);
  });

  it("Should handle clicks for addUser", () => {
    // http://sinonjs.org/releases/v4.0.0/spies/
    // Here we are spying on a function within Index component
    const addUserSpy = sinon.spy(Index.prototype, "addUser");
    const stateSpy = sinon.spy(Index.prototype, "setState");
    const deleteUserSpy = sinon.spy(Index.prototype, "deleteUser");

    // here we mounting the component
    const component = mount(<Index />);
    //  you can also simulate event such as 'click', 'keydown', 'mouseover', etc
    // component.find(".c3__btn")[0].simulate("click");
    // console.log(component.find(".c3__btn")[0].html())
    // component.find(".c3__delete")[0].simulate("click");


    // // or when multiple element share the same classname, use `at` which is array based: component.find(".c3-button").at(1).simulate("click");

    // // to expect a spy has been called, sinon provides a property on a spy to check if it has been called; spy.called
    // expect(addUserSpy.calledOnce).to.equal(true);
    // expect(stateSpy.calledOnce).to.equal(true);
    // expect(deleteUserSpy.calledOnce).to.equal(true);


  });

});
