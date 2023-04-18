import { style } from '@vanilla-extract/css';
import React from 'react'
import { vars } from '../../styles/globalTheme';
import { myStyle } from './sidebar.css';

// const StyledBar = styled("div", {
//   base: {
//     color: "red"
//     // backgroundColor: vars.color.brand,
//   }
// });
//


const Sidebar = () => {
  return (
    <p className={myStyle}>hey!</p>
  )
}

export default Sidebar;
