import React from 'react';

interface NavigationProps {
}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav>
      <ul className="nav-bar">
        <li className="nav-item">
          <a href="javascript:;" className="nav-link">
            Phones
          </a>
        </li>
        <li className="nav-item">
          <a href="javascript:;" className="nav-link">
            Tablets
          </a>
        </li>
        <li className="nav-item">
          <a href="javascript:;" className="nav-link">
            Laptops
          </a>
        </li>
        <li className="nav-item">
          <a href="javascript:;" className="nav-link">
            Watches
          </a>
        </li>
        <li className="nav-item">
          <a href="javascript:;" className="nav-link">
            Drones
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;