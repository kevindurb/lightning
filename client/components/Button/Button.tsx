import React from 'react';
import './button.css';
import classNames from 'classnames';

interface ButtonProps {
  children: string;
  onClick?: () => void;
  selected?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  selected,
}) => (
  <button
    onClick={onClick}
    className={classNames('button', { 'button--selected': selected })}
  >
    {children}
  </button>
);
