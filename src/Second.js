import React from 'react';

class Second extends React.Component {
    render() {
    return (
        <div className="grid-container grid-margin-y ">
          <div className="grid-x grid-padding-x align-middle">
            <div className="medium-4 cell text-center">
              <img src="https://static.thenounproject.com/png/6853-200.png"></img>
            </div>
            <div className="medium-4 cell text-center">
              <p>Clouds are just the best!</p>
            </div>
            <div className="medium-4 cell text-center">
            <img src="https://static.thenounproject.com/png/6853-200.png"></img>
            </div>
          </div>
        </div>
    );
  }
}
      
export default Second;