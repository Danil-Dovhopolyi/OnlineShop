import './Home.scss';
import Feedback from '../../components/FeedbackATop/Feedback';
import HeadBlock from '../../components/HeadBlock/HeadBlock';
import ProductCard from '../../components/Card/ProductCard';
import SideMenuList from '../../components/SideMenuList/SideMenuList';
import Banner from '../../components/Banner/Banner';
import useMenuFilling from '../Home/Logic/MenuLogic';
import useProductCardFilling from '../Home/Logic/ProductLogic';
import Basket from '../../components/Basket/Basket';
import { useState } from 'react';

function Home() {
  const menu = useMenuFilling();
  const productCards = useProductCardFilling();
  const [isCartOpen, setCartOpened] = useState(() => false);
  return (
    <>
      <div className="MainPage">
        <Feedback />
        <Basket onClose={() => setCartOpened(false)} opened={isCartOpen} />
        <HeadBlock onClickCart={() => setCartOpened(true)} />

        <div className="blocks">
          <div className="blockSideMenus">
            {menu.map((sideMenuListItem) => (
              <SideMenuList
                nameCategory={sideMenuListItem.nameCategory}
                subCategories={sideMenuListItem.subCategories}
              />
            ))}
          </div>
          <div className="blockBanners">
            <Banner />
            <Banner />
          </div>
          <div className="blockCards">
            {productCards.map((productCardItem) => (
              <ProductCard
                name={productCardItem.name}
                description={productCardItem.description}
                price={productCardItem.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
