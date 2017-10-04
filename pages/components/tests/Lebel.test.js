import {shallow, mount} from 'enzyme'
import Label from './../Label'
describe('Label', () => {
  it('should render Label tag with text inside ', () => {
    const component = shallow(
      <Label className='c3__label' text={'First Name'} />
    )
    expect(component.find('label')).to.be.present()
    expect(component.find('label')).to.have.className('c3__label')

    expect(component.find('label')).to.have.text('First Name')
  })
})
