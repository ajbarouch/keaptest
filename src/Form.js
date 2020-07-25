import React from 'react';


class Form extends React.Component {
    render() {
    return (
        <form>
        <div className="grid-container grid-margin-y">
          <div className="grid-x grid-padding-x">
            <div className="medium-6 cell">
                <input type="text" placeholder="First Name" />
            </div>
            <div className="medium-6 cell">
                <input type="text" placeholder="Last Name" />
            </div>
          </div>
        <div className="grid-x grid-padding-x">
            <div className="small-12 cell">
                <a role="button" aria-label="submit form" href="#" className="button">Submit</a>
            </div>
        </div>
        </div>
      </form>
    );
  }
}
      
export default Form;