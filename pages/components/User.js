import React from "react";
import Image from './Image';
import Title from './Title';


export default class User extends React.PureComponent {
	render(){
		console.log("sdsdasd+---->"+JSON.stringify(this.props))
		return (
			<div class="c3__user">
					<Image {...this.props} />
      		<Title {...this.props} />
          <a class='c3__delete'> Delete</a>
			</div>
		);
	} 
}