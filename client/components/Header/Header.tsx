import React from 'react';
import './header.css';

interface HeaderProps {
  children: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ children }) => (
  <nav className="header">{children}</nav>
);
