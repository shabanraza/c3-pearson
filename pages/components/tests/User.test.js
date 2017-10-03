import { shallow, mount } from "enzyme";
import User from "./../User";


describe("User Component", () => {
	const user = {
          id: 50,
          first_name: "Anish",
          last_name: "Patel",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
	}

	const onClickSpy = sinon.spy();
  const component = mount(<User user={user} onClick={onClickSpy}/>);

  it("should render component", () => {
    
		expect(component.find('.c3__user')).to.be.present();

		expect(component.find('.c3__user').children().length).to.equal(3);

		expect(component.find('.c3__img')).to.be.present();

		expect(component.find('.c3__title')).to.be.present();
		expect(component.find('.c3__delete')).to.be.present();

});


it("should called delete callback once",()=> {


 		component.find("button").simulate("click");

    expect(onClickSpy.calledOnce).to.eql(true);


})

});
