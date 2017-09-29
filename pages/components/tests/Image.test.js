import { shallow } from "enzyme";
import Image from "./../Image";
describe("Image", () => {
	const url = 'https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg';
  it("should render Image tag ", () => {
    const component = shallow(<Image src={url} />);
    expect(component.exists()).eql(true);
		expect(component.find('img')).to.have.attr('src');
		expect(component.find('img')).to.have.className('c3__img');
  
  });
});
