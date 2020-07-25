import React from 'react';

const ButtonSwitch = props => {
    return (
        <div id="toggleButtonContainer" className="grid-container">
            <div className="grid-x grid-padding-x text-center">
                <div className="small-12 cell">
                    <a style={{marginBottom: '20px'}} className="button" onClick={props.ShowForm}>Contact Us</a>
                </div>
            </div>
        </div>
    );
}

export default ButtonSwitch;