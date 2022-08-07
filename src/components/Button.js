import React from 'react'
import { Link } from 'react-router-dom';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test', 'btn--primary--rev'];

const SIZES = ['btn--medium', 'btn--large'];

const LINKS = ['/sign-up', '/get-app']
export const Button = ({
  link_to,
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonLink = LINKS.includes(link_to) ? link_to : LINKS[0];

  return (
    <Link to={checkButtonLink} className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};