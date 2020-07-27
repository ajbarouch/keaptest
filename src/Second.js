import React from 'react';

class Second extends React.Component {
    render() {
    return (
        <div className="grid-container">
          <div className="grid-x grid-padding-x grid-margin-y align-middle">
            <div className="medium-4 cell text-center">
              <img src="https://static.thenounproject.com/png/6853-200.png"></img>
            </div>
            <div className="medium-4 cell text-center">
              <h2>Clouds are just the best!</h2>
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