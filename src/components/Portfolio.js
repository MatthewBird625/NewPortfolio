import React, { Component } from "react";

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div>
          <div>
            <h1>Check Out Some of My Works.</h1>
          </div>
        </div>
        <div className="flex-cards">
         {resumeData.projects.map((project)=>{
          return(
            <div class="card">
            <img
              src={project.image}
              alt="project display"
              className="folio-image"
            />
            <div class="container">
              <h4>
                <b>{project.title}</b>
              </h4>
              <p className="folio-description">
                {project.description}
              </p>
              <form action={project.link}>
                <input type="submit" className="github-button" value="GitHub" />
              </form>
            </div>
          </div>
          )
         })}
  
        </div>
      </section>
    );
  }
}
