import React from 'react';

class First extends React.Component {
    render() {
    return (
        <div className="grid-container grid-margin-y">
          <div className="grid-x grid-padding-x align-middle">
            <div className="cell-left medium-8 cell">
              <img src="https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg"></img>
            </div>
            <div className="medium-4 cell bg-white">
              <div className="cell-overlap bg-white">
                <h2>Here's an intro.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor urna sit amet est dignissim, ut tincidunt arcu sagittis. In ultricies elit et ipsum bibendum sollicitudin. </p>
                <a className="button">Check it!</a>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
      
export default First;