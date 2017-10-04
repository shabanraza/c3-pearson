import {shallow, mount} from 'enzyme'
import UserForm from './../UserForm'

describe('UserForm', () => {
  const addUserSpy = sinon.spy()

  const component = mount(<UserForm addUser={addUserSpy} />)

  it('should render userForm component ', () => {
    expect(component.find('.c3__userform')).to.be.present()
  })

  it('Should have two inputs and two labels', () => {
    expect(component).to.have.exactly(2).descendants('.c3__input')
    expect(component).to.have.exactly(2).descendants('.c3__label')
  })

  it('handle change on firstname input field', () => {
    const event = {
      target: {
        value: 'first_name'
      }
    }
    component.find('#fname').simulate('change', event)
    expect(component.state().fname).to.deep.equal(event.target.value)
  })

  it('handle change on second input field', () => {
    const event = {
      target: {
        value: 'last_name'
      }
    }
    component.find('#lname').simulate('change', event)

    expect(component.state().lname).to.deep.equal(event.target.value)
  })

  it('should be called once add user callback ', () => {
    component.find('button').simulate('click')

    expect(addUserSpy.calledOnce).to.equal(true)
  })
})
