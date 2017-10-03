import React from "react";
import Image from './Image';
import Title from './Title';
import Button  from './Button'


export default class User extends React.PureComponent {
	render(){
	const { user, onClick } = this.props;
	const text = `${user.first_name} ${user.last_name}`
	
		return (
			<div className="c3__user">
					<Image 
						avatar={user.avatar} 
						className='c3__img'
					/>
      		<Title 
						className='c3__title'
						text={text}
					/>
          <Button className="c3__delete" text='Delete' onClick={onClick}/>
			</div>
		);
	} 
}