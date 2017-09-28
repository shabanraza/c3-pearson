import { shallow } from "enzyme";
import Button from "./Button";
describe("Button", () => {
  it("should render Button and handle onClick", () => {
    const onClickSpy = sinon.spy();
    const component = shallow(<Button onClick={onClickSpy} />);
    
    expect(component.exists()).eql(true);

    component.find("button").simulate("click");

    expect(onClickSpy.calledOnce).to.eql(true);
  });
});
