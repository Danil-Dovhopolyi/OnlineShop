import React, { useState } from 'react';
import '../HeadBlock/HeadBlock.scss';
import Login from '../ModalLogin/Login';

import IconSearch from '../../img/icon-search.png';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Card from '../../img/icon-card.png';
import Like from '../../img/icon-like.png';

const HeadBlock = (props) => {
  const [anchorElement, setAnchorElement] = useState(null);
  const isOpen = !!anchorElement;

  const handleClick = (event) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };
  return (
    <div className="search">
      <div className="name-shop">
        <h1>NameShop</h1>
      </div>
      <div className="search__input">
        <button
          className="search__buttonList"
          id="fade-button"
          aria-controls={isOpen ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={isOpen ? 'true' : undefined}
          onClick={handleClick}
        >
          <p className="list">
            All categories <p className="arrow">&#11167;</p>
          </p>
        </button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorElement}
          open={isOpen}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>Product</MenuItem>
          <MenuItem onClick={handleClose}>Product</MenuItem>
          <MenuItem onClick={handleClose}>Product</MenuItem>
        </Menu>
        <input type="text" placeholder="Search Products, categories ..." />
        <img src={IconSearch} alt="search" />
      </div>
      <div className="profile">
        <Login />
        <button className="openCartButton" onClick={props.onClickCart}>
          <img src={Card} alt="card" />
        </button>
        <button className="openLikePage">
          <img src={Like} alt="like" />
        </button>
      </div>
    </div>
  );
};

export default HeadBlock;
