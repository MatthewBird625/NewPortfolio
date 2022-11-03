import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">Feel free to contact me on LinkedIn</p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <a href="https://www.linkedin.com/in/matthew-bird-96363313a/">
                LinkedIn
              </a>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
