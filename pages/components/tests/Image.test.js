import { shallow, mount } from "enzyme";
import Image from "./../Image";
describe("Image", () => {


  it("should render Image tag ", () => {
    
    const component = shallow(<Image  className='c3__img' />);

    expect(component.find('img')).to.be.present()

		expect(component.find('img')).to.have.className('c3__img');
  
  });


});
