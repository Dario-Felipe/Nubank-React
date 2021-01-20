import React from 'react';
import './style.scss';

const FooterLink = ({ modifier, text, url }) => (
  <>
    <a className={`footer_link ${modifier}`} href={url}>
      <span>
        {text}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 21 20"
          className="SVGWrapper-c62y5b-0 ilbcfK StyledIcon-sc-1d6qvbo-0 etJcjf"
          color="currentColor"
          role="img"
        >
          <title>arrow</title>
          <g>
            <path
              d="M18.5 10H2.5M18.5 10L12 16.5M18.5 10L12 3.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </span>
    </a>
  </>
);

export default FooterLink;
