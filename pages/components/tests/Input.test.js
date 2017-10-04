import {shallow, mount} from 'enzyme'
import Input from './../Input'
describe('Input', () => {
  it('Should render input component and handle change event ', () => {
    const onChangeSpy = sinon.spy()
    const component = shallow(<Input onChange={onChangeSpy} />)

    expect(component.find('input')).to.be.present()

    component.simulate('change')

    expect(onChangeSpy.calledOnce).to.to.equal(true)
  })
})
