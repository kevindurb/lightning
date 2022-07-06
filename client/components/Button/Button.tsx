import React from 'react';
import './button.css';

interface ButtonProps {
  children: string;
}

export const Button: React.FC<ButtonProps> = ({ children }) => (
  <button>{children}</button>
);
