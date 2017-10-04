import {shallow, mount} from 'enzyme'
import User from './../User'
import Image from './../Image'
import Title from './../Title'
import Button from './../Button'

describe('User Component', () => {
  const user = {
    id: 50,
    first_name: 'Anish',
    last_name: 'Patel',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg'
  }

  const onClickSpy = sinon.spy()
  const component = mount(<User user={user} onClick={onClickSpy} />)

  it('should render component', () => {
    expect(component.find('.c3__user')).to.be.present()

    expect(component).to.have.descendants(Image)
    expect(component).to.have.descendants(Title)
    expect(component).to.have.descendants(Button)
  })

  it('should called delete callback once', () => {
    component.find('button').simulate('click')

    expect(onClickSpy.calledOnce).to.equal(true)
  })
})
