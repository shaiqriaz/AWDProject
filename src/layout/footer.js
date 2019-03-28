import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/App.css';

class myFooter extends Component {



  render() {
    return (
      <div>
        {/* Footer Starts Here */}
        <div class="myRow">
          <hr></hr>
          <div class="myColumn">About
          <hr></hr>
            <p></p>
            <p>Want to know who we are? Just follow this <NavLink to=''>link.</NavLink></p>
          </div>
          <div class="myColumn">Our Services
          <hr></hr>
            <p></p>
            <p>
              Service 1 Here
            </p>
            <p>
              Service 2 Here
            </p>
            <p>
              Service 3 Here
            </p>
          </div>
          <div class="myColumn">Care Center
          <hr></hr>
            <p></p>
            <p>Follow this <NavLink to=''>Link</NavLink> to contact us anytime.</p>
          </div>
          <div class="myColumn">Privacy Policy
          <hr></hr>
            <p></p>
            <p>Visit this <NavLink to=''>Page</NavLink> to about our privacy policy</p>

          </div>
          <div id="meta-links"><hr></hr>Copyright © 2019. Designed by Shaiq Malik. <hr></hr></div>
        </div>
        {/* Footer Ends Here */}
      </div>
    )
  }
}

export default myFooter;
