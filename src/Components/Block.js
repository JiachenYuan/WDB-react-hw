import { getByDisplayValue } from '@testing-library/dom';
import React from 'react';
import { Col } from 'react-bootstrap';

class Block extends React.Component {
   
    //ADD CODE HERE
  constructor(props) {
    super(props);
  }
    
  render() {

  const mystyle = {
      // ADD CODE HERE
      backgroundColor: this.props.color,
      width: '300px',
      height: '300px'
    };

  return (
    <>
      <div class = "blockers" style={
        // ADD CODE HERE
        mystyle
        }>
      </div>
      
      <div className="bottom">
          <div className="white"></div>
      </div>


    </>
      );
    }
  }


  export default Block;