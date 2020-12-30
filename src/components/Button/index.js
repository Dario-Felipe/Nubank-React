import React from 'react';
import './style.scss';

const Button = (props) => {
  return (
    <>
      <div className="button-content">
        <button className="button button--pix">{props.text} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 21 20" class="SVGWrapper-c62y5b-0 ilbcfK StyledIcon-sc-1d6qvbo-0 etJcjf" color="currentColor" role="img"><title>arrow</title><g>
          <path d="M18.5 10H2.5M18.5 10L12 16.5M18.5 10L12 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path>
        </g></svg></button>
      </div>
    </>
  )
}

export default Button;
