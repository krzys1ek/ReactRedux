import React from 'react';
import ReactDOM from 'react-dom';
// Create new component. This component should produce
// some HTML

const App = () => {
  return <div>Hi! React</div>;
}


// Take thi's components generated HTML and put it
// on the page  (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
