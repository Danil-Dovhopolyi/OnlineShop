import React from 'react';
import Feedback from '../../components/FeedbackATop/Feedback';
import HeadBlock from '../../components/HeadBlock/HeadBlock';
import GridIcon from '../../img/icon-grid.png';
import LineIcon from '../../img/icon-list.png';
import './LikesPage.scss';

import useLikes from './Logic/LikesLogic';

const LikesPage = () => {
  const [likedProducts] = useLikes();

  console.log(likedProducts);

  return (
    <div className="likespage">
      <Feedback />
      <HeadBlock />
      <div className="likespage__header">
        <div className="likespage__title">
          <h1>Likes Product</h1>
        </div>
        <div className="likespage__actions">
          <button className="btn">
            <img src={GridIcon} alt="grid" />
            Grid view
          </button>
          <button className="btn">
            <img src={LineIcon} alt="line" />
            List view
          </button>
        </div>
      </div>
    </div>
  );
};

export default LikesPage;
