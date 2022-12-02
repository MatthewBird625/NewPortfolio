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
        {/* PYTHON DATA MODELING PROJECT */}
        <div className="flex-cards">
          <div class="card">
            <img
              src="images/portfolio/python1.png"
              alt="Avatar"
              className="folio-image"
            />
            <div class="container">
              <h4>
                <b>Python Data Modeling Project</b>
              </h4>
              <p className="folio-description">
                various ML models run on the "heart_failure_clinical_
                records_dataset" using Jupyter Notebook. To determine Patient
                chances of heart failure relapse.
              </p>
              <form action="https://github.com/MatthewBird625/Python_Data_Modelling_Machine_Learning">
                <input type="submit" className="github-button" value="GitHub" />
              </form>
            </div>
          </div>
          <div class="card">
            <img
              src="images/portfolio/python2.png"
              alt="Avatar"
              className="folio-image"
            />
            <div class="container">
              <h4>
                <b>Python Data Cleaning Project</b>
              </h4>
              <p className="folio-description">
                An investagtion of the NBA players dataset to determine
                relationships between top NBA player stats using Python/Jupyter
                notebook
              </p>
              <form action="https://github.com/MatthewBird625/Python_Data_Cleaning_Summarising-">
                <input type="submit" className="github-button" value="GitHub" />
              </form>
            </div>
          </div>
          <div class="card">
            <img
              src="images/portfolio/industryProject.png"
              alt="Avatar"
              className="folio-image"
            />
            <div class="container">
              <h4>
                <b>React Industry Project</b>
              </h4>
              <p className="folio-description">
                A project in React where I managed a team of student developers
                in partnership with an industry client to develop their product
              </p>
              <form action="https://github.com/MatthewBird625/React-Carnival-Guide-Industry-Project">
                <input type="submit" className="github-button" value="GitHub" />
              </form>
            </div>
          </div>
          <div class="card">
            <img
              src="images/portfolio/terraform1.png"
              alt="Avatar"
              className="folio-image"
            />
            <div class="container">
              <h4>
                <b>AWS- Terraform- Anisble</b>
              </h4>
              <p className="folio-description">
                A project in Terraform and ansible that automatically spins up
                AWS assets with terraform and uses Anisble to delploy an MIT
                open source application and database to EC2 machines on AWS- and
                tear it all down again when required.
              </p>
              <form action="https://github.com/MatthewBird625/AWS_Terraform_Ansible_deployment">
                <input type="submit" className="github-button" value="GitHub" />
              </form>
            </div>
          </div>
          <div class="card">
            <img
              src="images/portfolio/CI-pipeline.png"
              alt="Avatar"
              className="folio-image"
            />
            <div class="container">
              <h4>
                <b>CI Pipeline</b>
              </h4>
              <p className="folio-description">
                A CI pipeline for GitHub actions using ci-testing,
                ci-intengration testing, ci e2e testing and package
              </p>
              <form action="https://github.com/MatthewBird625/CI_Pipeline_GitHub_Actions">
                <input type="submit" className="github-button" value="GitHub" />
              </form>
            </div>
          </div>

          <div class="card">
            <img
              src="images/portfolio/javaFX.png"
              alt="Avatar"
              className="folio-image"
            />
            <div class="container">
              <h4>
                <b>Java FX project</b>
              </h4>
              <p className="folio-description">
                A table booking system written in Java and with a javaFX + FXML
                user interface
              </p>
              <form action="https://github.com/MatthewBird625/JAVA_FX_Project">
                <input type="submit" className="github-button" value="GitHub" />
              </form>
            </div>
          </div>
          <div class="card">
            <img
              src="images/portfolio/wordle.png"
              alt="Avatar"
              className="folio-image"
            />
            <div class="container">
              <h4>
                <b>Wordle Game In Javascript</b>
              </h4>
              <p className="folio-description">
                A copy of the popular game Wordle
                (www.nytimes.com/games/wordle/) written in plain HTML, CSS and
                Javascript
              </p>
              <form action="https://github.com/MatthewBird625/JavascriptWordleGame">
                <input type="submit" className="github-button" value="GitHub" />
              </form>
            </div>
          </div>
          <div class="card">
            <img
              src="images/portfolio/React.png"
              alt="Avatar"
              className="folio-image"
            />
            <div class="container">
              <h4>
                <b>A React Website (FullStack)</b>
              </h4>
              <p className="folio-description">
                My first website made in React. Connects using express/API to a
                cloud MySQL database.The website allows users to create
                accounts, login, create posts and comment or react to each others
                posts
              </p>
              <form action="https://github.com/MatthewBird625/myFirstReactWebsite">
                <input type="submit" className="github-button" value="GitHub" />
              </form>
            </div>
          </div>
          <div class="card">
            <img
              src="images/portfolio/JavaBackend.png"
              alt="Avatar"
              className="folio-image"
            />
            <div class="container">
              <h4>
                <b>Java Air BnB site</b>
              </h4>
              <p className="folio-description">
                A site that accesses the Air BnB database and allows users to
                browse listings. The front end HTML implementation is very
                ameteur but this project is included as an example of backend
                and application JAVA work.
              </p>
              <form action="https://github.com/MatthewBird625/JAVA_backend">
                <input type="submit" className="github-button" value="GitHub" />
              </form>
            </div>
          </div>
          <div class="card">
            <img
              src="images/portfolio/unityGame.png"
              alt="Avatar"
              className="folio-image"
            />
            <div class="container">
              <h4>
                <b>unity Game in C#</b>
              </h4>
              <p className="folio-description">
                A basic 2D platformer game made in Unity and developed using C#.
              </p>
              <form action="https://github.com/MatthewBird625/Unity_Game_In_Csharp">
                <input type="submit" className="github-button" value="GitHub" />
              </form>
            </div>
          </div>
          <div class="card">
            <img
              src="images/portfolio/etch.png"
              alt="Avatar"
              className="folio-image"
            />
            <div class="container">
              <h4>
                <b>Etch-A-Sketch</b>
              </h4>
              <p className="folio-description">
                A basic Etch-A-Sketch written in HTML, CSS and Javascript.
                Online player here:{" "}
                <a href="https://matthewbird625.github.io/Etch-a-Sketch/">
                  Etch-A-sketch
                </a>
              </p>
              <form action="https://github.com/MatthewBird625/Etch-a-Sketch">
                <input type="submit" className="github-button" value="GitHub" />
              </form>
            </div>
          </div>
          <div class="card">
            <img
              src="images/portfolio/RobotArm.png"
              alt="Avatar"
              className="folio-image"
            />
            <div class="container">
              <h4>
                <b>Java Robot Arm</b>
              </h4>
              <p className="folio-description">
                A simulated 2D robot arm written in JAVA that moves virtualised
                blocks.
              </p>
              <form action="https://github.com/MatthewBird625/JAVA_Robot_Arm">
                <input type="submit" className="github-button" value="GitHub" />
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
