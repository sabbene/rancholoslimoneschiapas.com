import React from 'react';
import logo from '../images/rancho.los.limones.logo.png';
import logoWebp from '../images/rancho.los.limones.logo.webp';

function Logo() {
  return (
    <div className="center_container">
      <a href="/">
        <picture>
          <source srcSet={logoWebp} type="image/webp" />
          <img src={logo} alt="Rancho Los Limones Logo" className="logo" />
        </picture>
      </a>
    </div>
  );
}

export default Header;