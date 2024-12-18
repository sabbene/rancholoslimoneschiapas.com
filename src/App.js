import React from 'react';
import './styles.css';
import Logo from './components/Logo';
import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <div className="content_wrapper">
      <Logo />
      <SocialMedia />
    </div>
  );
}

export default App;