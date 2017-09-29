import React from "react";
import Image from './Image';
import Title from './Title';


export default class User extends React.PureComponent {
	render(){
	
	
		return (
			<div className="c3__user">
					<Image {...this.props} />
      		<Title {...this.props} />
          <a className="c3__delete"> Delete</a>
			</div>
		);
	} 
}