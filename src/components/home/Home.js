import React from "react";
import Product from "../product/Product";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="Banner "
      />

      <div className="home__row">
        <Product
          id={12}
          title="Apple 13.3 MacBook Pro w/Touch Bar (Mid 2019), Intel Core i5-8279U 2.4GHz, 512GB PCI-E SSD, 8GB DDR3, 802.11ac, Silver (Renewed)"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51jckVG7HeL._AC_SY355_.jpg"
          price="	1,075.00"
        />

        <Product
          id={12}
          title="Apple 13.3 MacBook Pro w/Touch Bar (Mid 2019), Intel Core i5-8279U 2.4GHz, 512GB PCI-E SSD, 8GB DDR3, 802.11ac, Silver (Renewed)"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51jckVG7HeL._AC_SY355_.jpg"
          price="	1,075.00"
        />
      </div>

      <div className="home__row">
        <Product
          id={12}
          title="Apple 13.3 MacBook Pro w/Touch Bar (Mid 2019), Intel Core i5-8279U 2.4GHz, 512GB PCI-E SSD, 8GB DDR3, 802.11ac, Silver (Renewed)"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51jckVG7HeL._AC_SY355_.jpg"
          price="	1,075.00"
        />

        <Product
          id={12}
          title="Apple 13.3 MacBook Pro w/Touch Bar (Mid 2019), Intel Core i5-8279U 2.4GHz, 512GB PCI-E SSD, 8GB DDR3, 802.11ac, Silver (Renewed)"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51jckVG7HeL._AC_SY355_.jpg"
          price="	1,075.00"
        />
        <Product
          id={12}
          title="Apple 13.3 MacBook Pro w/Touch Bar (Mid 2019), Intel Core i5-8279U 2.4GHz, 512GB PCI-E SSD, 8GB DDR3, 802.11ac, Silver (Renewed)"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51jckVG7HeL._AC_SY355_.jpg"
          price="	1,075.00"
        />
      </div>

      <div className="home__row">
        <Product
          id={12}
          title="Apple 13.3 MacBook Pro w/Touch Bar (Mid 2019), Intel Core i5-8279U 2.4GHz, 512GB PCI-E SSD, 8GB DDR3, 802.11ac, Silver (Renewed)"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51jckVG7HeL._AC_SY355_.jpg"
          price="	1,075.00"
        />
      </div>
    </div>
  );
};

export default Home;
