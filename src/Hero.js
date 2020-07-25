import React from 'react';


class Hero extends React.Component {
    render() {
    return (
        <div className="grid-container full">
            <div className="grid-x align-middle">
                <div className="medium-12 cell">
                    <div className="hero-section">
                        <div className="hero-section-text">
                            <h1>We Sell Clouds!</h1>
                            <h2>Don't Believe Us? Well you shouldn't.</h2>
                            <p>Clouds belong to everybody.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
      
export default Hero;