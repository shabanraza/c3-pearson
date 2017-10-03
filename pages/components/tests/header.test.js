import { shallow, mount } from "enzyme";
import Header from "./../Header";
describe("Header", () => {


  it("should render header tag with pearson text ", () => {
    
    const component = shallow(<Header />);

    expect(component.find('header')).to.be.present()

		expect(component.find('header')).to.have.className('c3__header');

    expect(component.find('header')).to.have.text('Pearson User Management');

  });


});
