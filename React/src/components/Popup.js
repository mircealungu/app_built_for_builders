import React from 'react';  
import '../../src/style.css';  


//https://dev.to/skptricks/create-simple-popup-example-in-react-application-5g7f

class Popup extends React.Component {  
  render() {  
return (  
<div className='popup'>  
<div className='popup\_inner'>  
<h1>{this.props.text}</h1>  
<button onClick={this.props.closePopup}>close me</button>  
</div>  
</div>  
);  
}  
}  

export default Popup;
