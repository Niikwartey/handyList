import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return(
      <div>
        <div id="jumbo-search" className="ui center aligned padded segment">
          <div className="jumbotron">
            <h2>What are you looking for?</h2>
            <div className="ui icon huge input">
              <input type="text" placeholder="eg. TV Repair, Plumbing etc."/>
              <i className="inverted green circular search link icon"></i>
            </div>
          </div>
        </div>

        <div className="ui center aligned segment">
          <div className="ui container">
            <div className="ui grid">
              <div id="listings" className="four column doubling row">
                 {/* each item in listing */}
                <div className="column">
                  <div className="ui centered card">
                    <div className="image">
                      <img src="http://www.coyotehandyman.com/images/coyote%20handyman%20header.jpg"/>
                    </div>
                    <div className="content">
                      <div className="header">
                        $149 for a Home Interior Mold and Water Damage Inspection and $149 Credit
                      </div>
                      <div className="meta">
                        Offered by: <a href="#">24/7 Property Cleaning & Restoration</a>
                      </div>

                    </div>
                    <div className="extra content price">
                      <span className="original-price">
                        $1000
                      </span>
                      <span className="member-price">
                        $799
                      </span>
                    </div>

                    <a className="ui inverted orange bottom attached button" href="#">
                      View Offer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
