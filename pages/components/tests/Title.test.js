import { shallow, mount } from "enzyme";
import Title from "./../Title";
describe("Title", () => {


  it("should render Title name ", () => {
    
    const component = shallow(
			<Title 
				className="c3__title"
				text={"Jhon"}
			/>
		);
    expect(component.find('h5')).to.be.present()
		expect(component.find('h5')).to.have.className('c3__title');

  	expect(component.find('h5')).to.have.text('Jhon');

  });


});
