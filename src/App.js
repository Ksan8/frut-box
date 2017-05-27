import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="tk-chippewa-falls lt-green">Früt Box</h1>
        </div>
        <section className="container">
          <h2 className="tk-ff-basic-gothic-sc-web-pro pink">
            A local scavenging app for fruit and other edibles.
          </h2>
          <h3 className="tk-ff-basic-gothic-sc-web-pro turquoise">Section heading</h3>
          <p className="tk-ff-basic-gothic-web-pro dk-green">Spicy jalapeno quis filet mignon beef sint pariatur jerky frankfurter dolore t-bone occaecat rump. Aute drumstick pig, adipisicing dolor andouille ham hock eu cillum shank quis ea est tri-tip ad.</p>
          <h3 className="tk-ff-basic-gothic-sc-web-pro turquoise">Another heading</h3>
          <p className="tk-ff-basic-gothic-web-pro dk-green">Burgdoggen tempor in, in ham excepteur nisi. T-bone tempor dolor flank filet mignon in excepteur biltong brisket eiusmod. Porchetta in ex meatloaf laboris dolor. Pastrami consequat dolore, consectetur meatloaf shank anim shoulder officia prosciutto alcatra.</p>
        </section>
      </div>
    );
  }
}

export default App;
