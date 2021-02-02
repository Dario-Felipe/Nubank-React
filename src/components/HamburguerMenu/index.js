import React from 'react';
import {
  HamburguerContent,
  HamburguerContentBox,
  HamburguerContentBoxItem,
} from './style';

const HamburguerMenu = ({ handle, ...props }) => (
  <>
    <HamburguerContent {...props} type="button">
      <HamburguerContentBox>
        <HamburguerContentBoxItem
          className={handle !== true ? 'hide' : 'show'}
        />
      </HamburguerContentBox>
    </HamburguerContent>
  </>
);

export default HamburguerMenu;
