import { RiTiktokFill,RiPinterestFill,RiInstagramLine,RiFacebookCircleFill,RiTwitterFill } from "react-icons/ri";

const navbarItems = [
    {id:0, to: '/', label: 'Home' },
    {id:1, to: '/About', label: 'About' },
    {id:2, to: '/Shop', label: 'Shop' },
    {id:2, to: '/Blog', label: 'Blog' },
    {id:3, to: '/Gifts', label: 'Gifts' },
    {id:3, to: '/Contact', label: 'Contact' },
  ];

  const categories = [
    {
      id: 1,
      url: "https://www.daisyjewellery.com/cdn/shop/files/DoWhatYouLove_CategoryBlocks_Artboard_1.jpg?v=1706785407",
      name: "Necklaces",
      to:"/"
    },
    {
      id: 2,
      url: "https://www.daisyjewellery.com/cdn/shop/files/DoWhatYouLove_CategoryBlocks_Artboard_2.jpg?v=1706785449",
      name: "Earrings",
      to:"/"

    },
    {
      id: 3,
      url: "https://www.daisyjewellery.com/cdn/shop/files/DoWhatYouLove_CategoryBlocks_Artboard_4.jpg?v=1706785487",
      name: "Bracelets",
      to:"/"

    },
    {
      id: 4,
      url: "https://www.daisyjewellery.com/cdn/shop/files/DoWhatYouLove_CategoryBlocks_Artboard_3.jpg?v=1706785473",
      name: "Rings",
      to:"/"

    }
  ];
  
const items=[
  {
    "id": 1,
    "title": "Product 1",
    "image": "https://via.placeholder.com/150",
    "subtitle": "Description of Product 1",
    "price": 19.99
  },
  {
    "id": 2,
    "title": "Product 2",
    "image": "https://via.placeholder.com/150",
    "subtitle": "Description of Product 2",
    "price": 29.99
  },
  {
    "id": 3,
    "title": "Product 3",
    "image": "https://via.placeholder.com/150",
    "subtitle": "Description of Product 3",
    "price": 39.99
  },
  {
    "id": 4,
    "title": "Product 4",
    "image": "https://via.placeholder.com/150",
    "subtitle": "Description of Product 4",
    "price": 49.99
  },
  {
    "id": 5,
    "title": "Product 5",
    "image": "https://via.placeholder.com/150",
    "subtitle": "Description of Product 5",
    "price": 59.99
  },
  {
    "id": 6,
    "title": "Product 6",
    "image": "https://via.placeholder.com/150",
    "subtitle": "Description of Product 6",
    "price": 69.99
  },
  {
    "id": 7,
    "title": "Product 7",
    "image": "https://via.placeholder.com/150",
    "subtitle": "Description of Product 7",
    "price": 79.99
  },
  {
    "id": 8,
    "title": "Product 8",
    "image": "https://via.placeholder.com/150",
    "subtitle": "Description of Product 8",
    "price": 89.99
  },
  {
    "id": 9,
    "title": "Product 9",
    "image": "https://via.placeholder.com/150",
    "subtitle": "Description of Product 9",
    "price": 99.99
  },
  {
    "id": 10,
    "title": "Product 10",
    "image": "https://via.placeholder.com/150",
    "subtitle": "Description of Product 10",
    "price": 109.99
  }
]
const socials = [
  {
    id: 1,
    path: "https://www.facebook.com/",
    icon: <RiFacebookCircleFill />
  },
  {
    id: 2,
    path: "https://twitter.com/",
    icon: <RiTwitterFill />
  },
  {
    id: 3,
    path: "https://www.instagram.com/",
    icon: <RiInstagramLine /> 
  },
  {
    id: 4,
    path: "https://www.tiktok.com/",
    icon:<RiTiktokFill />
  },
  {
    id: 5,
    path: "https://www.pinterest.com/",
    icon: <RiPinterestFill />
  }
];

const footer = [
  {
    id: 1,
    name: "Support",
    labels: [
      { id: 1, name: "Label 1.1", path: "/category1/label1" },
      { id: 2, name: "Label 1.2", path: "/category1/label2" },
      { id: 3, name: "Label 1.3", path: "/category1/label3" }
    ]
  },
  {
    id: 2,
    name: "company",
    labels: [
      { id: 4, name: "Label 2.1", path: "/category2/label1" },
      { id: 5, name: "Label 2.2", path: "/category2/label2" },
      { id: 6, name: "Label 2.3", path: "/category2/label3" }
    ]
  },
  {
    id: 3,
    name: "shop",
    labels: [
      { id: 7, name: "Label 3.1", path: "/category3/label1" },
      { id: 8, name: "Label 3.2", path: "/category3/label2" },
      { id: 9, name: "Label 3.3", path: "/category3/label3" }
    ]
  }
];
const imagesGallery = [
  "https://www.daisyjewellery.com/cdn/shop/files/DoWhatYouLove_CategoryBlocks_Artboard_13_3760x.jpg?v=1707320653",
  "https://www.messika.com/media/ultraslider/slides/home-fiery-messika-slider-desktop-1.jpg",
  
]
;


export { navbarItems,categories,items,socials,footer, imagesGallery};