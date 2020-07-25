import React from 'react';

class First extends React.Component {
    render() {
    return (
        <div className="grid-container grid-margin-y">
          <div className="grid-x grid-padding-x align-middle">
            <div className="medium-6 cell">
              <img src="https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg"></img>
            </div>
            <div className="medium-6 cell">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor urna sit amet est dignissim, ut tincidunt arcu sagittis. In ultricies elit et ipsum bibendum sollicitudin. Etiam nec ipsum nunc. Suspendisse fringilla ipsum in risus faucibus pharetra. Pellentesque mauris quam, tristique non sem sed, scelerisque mollis dolor.</p>
            </div>
          </div>
        </div>
    );
  }
}
      
export default First;