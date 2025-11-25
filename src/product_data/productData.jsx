import React from 'react';

// Import all product and rating images
import ProdImg1 from '../assets/images/Sample/image 57.svg?react';
import ProdImg2 from '../assets/images/Sample/image 58.svg?react';
import ProdImg3 from '../assets/images/Sample/image 59.svg?react';
import ProdImg4 from '../assets/images/Sample/image 63.svg?react';
import StarImg from '../assets/images/Allicons/Four Half Star.svg?react';
import DogFood from '../assets/images/CartItems/71RdoeXxtrL 1.svg?react';
import GucciBag from '../assets/images/CartItems/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.svg?react';
import WinterJacket from '../assets/images/CartItems/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.svg?react';

import Keyboard from '../assets/images/CartItems/ak-900-01-500x500 1.svg?react';
import FootballShoes from '../assets/images/CartItems/Copa_Sense 1.svg?react';
import BeautyProduct from '../assets/images/CartItems/curology-j7pKVQrTUsM-unsplash 1.svg?react';
import Camera from '../assets/images/CartItems/eos-250d-03-500x500 1.svg?react';
import Monitor from '../assets/images/CartItems/g27cq4-500x500 1.svg?react';
import Gamepad from '../assets/images/CartItems/g92-2-500x500 1.svg?react';
import CoolingFans from '../assets/images/CartItems/gammaxx-l240-argb-1-500x500 1.svg?react';
import Gamepad2 from '../assets/images/CartItems/GP11_PRD3 1.svg?react';
import LenovoLaptop from '../assets/images/CartItems/ideapad-gaming-3i-01-500x500 1.svg?react';
import ElectricCar from '../assets/images/CartItems/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.svg?react';
import Chair from '../assets/images/CartItems/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.svg?react';
import DecorativeAccessory from '../assets/images/CartItems/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.svg?react';

// Your original product, kept for reference
// export const havicGamepad = {
//   id: 'ps-5-controller',
//   name: "PS5 Dualshock Controller",
//   images: [<ProdImg1 />, <ProdImg2 />, <ProdImg3 />, <ProdImg4 />],
//   rating: <StarImg />,
//   reviews: 150,
//   stockStatus: 'In Stock',
//   price: '192.00',
//   description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.'
// };

// An array containing all other products. It's easier to manage and display lists from an array.
export const products = [
  {
    id: 'ak-900-keyboard',
    name: "AK-900 Wired Keyboard",
    images: [<Keyboard />, <Keyboard />, <Keyboard />, <Keyboard />],
    rating: <StarImg />,
    reviews: 75,
    stockStatus: 'In Stock',
    price: '960.00',
    description: 'RGB backlit mechanical keyboard with responsive keys for an enhanced gaming experience.'
  },
  {
    id: 'ips-lcd-gaming-monitor',
    name: "IPS LCD Gaming Monitor",
    images: [<Monitor />, <Monitor />, <Monitor />, <Monitor />],
    rating: <StarImg />,
    reviews: 350,
    stockStatus: 'In Stock',
    price: '1160.00',
    description: '27-inch QHD display with a 144Hz refresh rate for smooth, immersive visuals.'
  },
  {
    id: 'havic-hv-g92-gamepad',
    name: "HAVIT HV-G92 Gamepad",
    images: [<Gamepad />, <Gamepad />, <Gamepad />, <Gamepad />],
    rating: <StarImg />,
    reviews: 210,
    stockStatus: 'Out of Stock',
    price: '560.00',
    description: 'A versatile and ergonomic gamepad compatible with PC and PS3 for a superior gaming session.'
  },
  {
    id: 'gucci-duffle-bag',
    name: "Gucci Savoy Duffle Bag",
    images: [<GucciBag />, <GucciBag />, <GucciBag />, <GucciBag />],
    rating: <StarImg />,
    reviews: 65,
    stockStatus: 'In Stock',
    price: '1200.00',
    description: 'Luxury duffle bag made with high-quality materials, perfect for weekend getaways.'
  },
  {
    id: 'north-face-x-gucci-coat',
    name: "The North Face x Gucci Coat",
    images: [<WinterJacket />, <WinterJacket />, <WinterJacket />, <WinterJacket />],
    rating: <StarImg />,
    reviews: 120,
    stockStatus: 'In Stock',
    price: '1500.00',
    description: 'A stylish and warm winter coat from the exclusive The North Face x Gucci collaboration.'
  },
  {
    id: 'breeders-dog-food',
    name: "Breeders Dry Dog Food",
    images: [<DogFood />, <DogFood />, <DogFood />, <DogFood />],
    rating: <StarImg />,
    reviews: 88,
    stockStatus: 'In Stock',
    price: '120.00',
    description: 'Nutritious and delicious dry dog food, formulated for all breeds and sizes.'
  },
  {
    id: 'canon-eos-250d-camera',
    name: "CANON EOS 250D Camera",
    images: [<Camera />, <Camera />, <Camera />, <Camera />],
    rating: <StarImg />,
    reviews: 420,
    stockStatus: 'In Stock',
    price: '850.00',
    description: 'A compact and easy-to-use DSLR camera that captures stunning photos and 4K videos.'
  },
  {
    id: 'ideapad-gaming-laptop',
    name: "Ideapad Gaming 3i Laptop",
    images: [<LenovoLaptop />, <LenovoLaptop />, <LenovoLaptop />, <LenovoLaptop />],
    rating: <StarImg />,
    reviews: 195,
    stockStatus: 'In Stock',
    price: '1050.00',
    description: 'A powerful gaming laptop with a high-performance processor and dedicated graphics card.'
  },
  {
    id: 'curology-beauty-set',
    name: "Curology Product Set",
    images: [<BeautyProduct />, <BeautyProduct />, <BeautyProduct />, <BeautyProduct />],
    rating: <StarImg />,
    reviews: 310,
    stockStatus: 'Out of Stock',
    price: '250.00',
    description: 'Personalized skincare set designed to meet your unique skin needs and goals.'
  },
  {
    id: 'kids-electric-car',
    name: "Kids Electric Ride-On Car",
    images: [<ElectricCar />, <ElectricCar />, <ElectricCar />, <ElectricCar />],
    rating: <StarImg />,
    reviews: 95,
    stockStatus: 'In Stock',
    price: '950.00',
    description: 'A fun and safe ride-on toy car for kids, featuring realistic design and parental controls.'
  },
  {
    id: 'copa-sense-football-shoes',
    name: "Copa Sense Football Shoes",
    images: [<FootballShoes />, <FootballShoes />, <FootballShoes />, <FootballShoes />],
    rating: <StarImg />,
    reviews: 155,
    stockStatus: 'In Stock',
    price: '280.00',
    description: 'Enhance your touch and control on the field with these premium football shoes.'
  },
  {
    id: 's-series-comfort-chair',
    name: "S-Series Comfort Chair",
    images: [<Chair />, <Chair />, <Chair />, <Chair />],
    rating: <StarImg />,
    reviews: 99,
    stockStatus: 'In Stock',
    price: '400.00',
    description: 'Ergonomic comfort chair with lumbar support, ideal for long hours of work or study.'
  },
];