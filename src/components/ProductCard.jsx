import { Button } from 'flowbite-react';
import React, { useContext } from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartProvider';

const ProductCard = ({ product }) => {
  const { cartCount, setCartCount } = useContext(CartContext);

  const { id, title, price, category, description, image } = product;
  
  return (
    <div
      className="shadow bg-white p-4 rounded-lg flex flex-col justify-between hover:scale-95 ease-in duration-75"
      data-aos="zoom-in"
    >
      <div>
        <Link to={`/products/${id}`}>
          <img className="h-64 mx-auto" src={image} alt="" />
        </Link>

        <Link to={`/products/${id}`}>
          <h4 className="mt-3 font-semibold text-lg hover:underline">
            {title}
          </h4>
        </Link>
        <p className="mt-3">{description.slice(0, 70)}....</p>
      </div>
      <div>
        <div className="h-[1px] bg-slate-200 mt-3"></div>
        <h3 className="text-center font-bold text-xl mt-3">${price}</h3>

        <Button
          gradientDuoTone="purpleToBlue"
          size="xs"
          className="mx-auto mt-3"
          onClick={() => setCartCount(cartCount + 1)}
        >
          <HiShoppingCart className="mr-2 h-5 w-5" />
          Buy now
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;