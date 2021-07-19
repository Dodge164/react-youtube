import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

export const Navbar = () => {
  const [burgerState, setBurgerState] = useState(false);
  console.log('bur', burgerState);
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
      <div className="navbar-brand">Note App</div>
      <button
        onClick={() => setBurgerState((prev) => !prev)}
        className={cn('navbar-toggle btn-primary', {
          ['collapsed']: burgerState,
        })}
        type="button"
        dataToggle="collapse"
        dataTarget="#navbarNav"
        ariaControls="navbarNav"
        ariaExpanded="false"
        ariaLabel="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        id="navbarNav"
        className={cn('navbar-collapse collapse', { ['burger']: burgerState })}
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              Главная <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              Информация
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
