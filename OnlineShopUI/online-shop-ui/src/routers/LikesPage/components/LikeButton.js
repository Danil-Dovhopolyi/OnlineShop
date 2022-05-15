import React, { useState } from 'react';
import Liked from '../../../img/liked-icon.png';
import Unliked from '../../../img/unliked-icon.png';

// TODO: Remove redundant shadow from liked-icon.png
const LikeButton = (props) => {
  const [isLiked, setIsLiked] = useState(() => props.isLiked);

  return (
    <>
      <div>
        <img
          src={isLiked ? Liked : Unliked}
          onClick={() => setIsLiked(!isLiked)}
          alt={isLiked ? 'Liked' : 'Unliked'}
        />
      </div>
    </>
  );
};

export default LikeButton;
