import { RiTiktokFill,RiPinterestFill,RiInstagramLine,RiFacebookCircleFill,RiTwitterFill } from "react-icons/ri";
import { CiClock2, CiLocationOn, CiPhone } from "react-icons/ci";
const navbarItems = [
    {id:0, to: '/', label: 'Home' },
    {id:1, to: '/About', label: 'About' },
    {id:2, to: '/ProductList', label: 'Shop' },
    // {id:3, to: '/Blog', label: 'Blog' },
    // {id:3, to: '/Gifts', label: 'Gifts' },
    {id:4, to: '/Contact', label: 'Contact' },
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
    "image": "https://www.daisyjewellery.com/cdn/shop/files/polly-sayer-knot-chain-necklace-18ct-gold-plate-necklaces-daisy-london-33067435622539_1944x.jpg?v=1697711297",
    "subtitle": "Description of Product 1",
    "price": 19.99
  },
  {
    "id": 2,
    "title": "Product 2",
    "image": "https://www.daisyjewellery.com/cdn/shop/files/polly-sayer-knot-chain-necklace-18ct-gold-plate-necklaces-daisy-london-33067435622539_1944x.jpg?v=1697711297",
    "subtitle": "Description of Product 2",
    "price": 29.99
  },
  {
    "id": 3,
    "title": "Product 3",
    "image": "https://www.daisyjewellery.com/cdn/shop/files/polly-sayer-knot-chain-necklace-18ct-gold-plate-necklaces-daisy-london-33067435622539_1944x.jpg?v=1697711297",
    "subtitle": "Description of Product 3",
    "price": 39.99
  },
  {
    "id": 4,
    "title": "Product 4",
    "image": "https://www.daisyjewellery.com/cdn/shop/files/polly-sayer-knot-chain-necklace-18ct-gold-plate-necklaces-daisy-london-33067435622539_1944x.jpg?v=1697711297",
    "subtitle": "Description of Product 4",
    "price": 49.99
  },
  {
    "id": 5,
    "title": "Product 5",
    "image": "https://www.daisyjewellery.com/cdn/shop/files/polly-sayer-knot-chain-necklace-18ct-gold-plate-necklaces-daisy-london-33067435622539_1944x.jpg?v=1697711297",
    "subtitle": "Description of Product 5",
    "price": 59.99
  },
  {
    "id": 6,
    "title": "Product 6",
    "image": "https://www.daisyjewellery.com/cdn/shop/files/polly-sayer-knot-chain-necklace-18ct-gold-plate-necklaces-daisy-london-33067435622539_1944x.jpg?v=1697711297",
    "subtitle": "Description of Product 6",
    "price": 69.99
  },
  {
    "id": 7,
    "title": "Product 7",
    "image": "https://cdn.shopify.com/s/files/1/0343/0341/0315/products/seed-pearl-chain-necklace-18ct-gold-plate-necklaces-daisy-london-32199593132171_1944x.jpg?v=1680777438",
    "subtitle": "Description of Product 7",
    "price": 79.99
  },
  {
    "id": 8,
    "title": "Product 8",
    "image": "https://cdn.shopify.com/s/files/1/0343/0341/0315/products/seed-pearl-chain-necklace-18ct-gold-plate-necklaces-daisy-london-32199593132171_1944x.jpg?v=1680777438",
    "subtitle": "Description of Product 8",
    "price": 89.99
  },
  {
    "id": 9,
    "title": "Product 9",
    "image": "https://cdn.shopify.com/s/files/1/0343/0341/0315/products/seed-pearl-chain-necklace-18ct-gold-plate-necklaces-daisy-london-32199593132171_1944x.jpg?v=1680777438",
    "subtitle": "Description of Product 9",
    "price": 99.99
  },
  {
    "id": 10,
    "title": "Product 10",
    "image": "https://cdn.shopify.com/s/files/1/0343/0341/0315/products/seed-pearl-chain-necklace-18ct-gold-plate-necklaces-daisy-london-32199593132171_1944x.jpg?v=1680777438",
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
      { id: 9, name: "About", path: "/category3/label3" }
    ]
  }
];
const imagesGallery = [

  "https://i.pinimg.com/564x/4e/27/a2/4e27a228925e6c07f7e4309563d36163.jpg",
  "https://i.pinimg.com/564x/f0/ad/33/f0ad330617f795226a53e8120640ca16.jpg",
  "https://i.pinimg.com/564x/3f/f6/23/3ff623f6966dc0f51700b37b7be1f75f.jpg",
  "https://i.pinimg.com/564x/82/3f/26/823f269fbccf0f57adb94282c447def3.jpg",
  "https://i.pinimg.com/564x/71/0c/80/710c80c6b8777a632e193ca149e72d62.jpg",
  "https://i.pinimg.com/564x/4e/27/a2/4e27a228925e6c07f7e4309563d36163.jpg",
  "https://i.pinimg.com/564x/18/f0/70/18f070b2bf74528bad58a9cbe01d5c8b.jpg",
  "https://i.pinimg.com/564x/98/64/aa/9864aa7daba4d15881e80cd609322b92.jpg"
  
  
]
;
const addressInfo = [
  {
    label: "Our Address",
    value: "1230 Maecenas Street Donec Road\nNew York, EEUU",
    icon: <CiLocationOn  />
  },
  {
    label: "Contact",
    value: "Mobile: +1 (123) 456-7890\nMail: tailnext@gmail.com",
    icon: <CiPhone />
  },
  {
    label: "Working hours",
    value: "Monday - Friday: 08:00 - 17:00\nSaturday & Sunday: 08:00 - 12:00",
    icon: <CiClock2 />
  }
];
const aboutContent = [
  {
    type: "paragraph",
    content: "Timeless, effortless and everyday. Just like a daisy. We make luxury jewellery to make you feel good."
  },
  {
    type: "image",
    src: "https://bycharlotte.com.au/cdn/shop/files/About_Brand-Banner.jpg?v=1699592375&width=1600",
    alt: "Image 1"
  }, {
    type: "image",
    src: "https://bycharlotte.com.au/cdn/shop/files/About_Locket-Printing.jpg?v=1699592953&width=800",
    alt: "Image 2"
  },
  {
    type: "paragraph",
    content: "Our story began in 2009, with co-founder Ruth Bewsey creating high quality jewellery designed to be worn everyday. Effortless style runs through everything we do at Daisy and our timeless not trend approach allows us to create things that are missing from our own jewellery box, and bring them to yours."
  },
 
  {
    type: "paragraph",
    content: "Creating jewellery with meaning is kind of our thing, whether that be through our iconic Chakra collection launched in 2010, through to our most recent collaboration collection with fashion house Shrimps. Pieces with meaning are our staples. Vintage-inspired shapes, premium recycled materials and hand-drawn motifs, it's our mission to create jewellery that makes you feel unapologetically yourself, in pieces you’ll love for years to come."
  },
  {
    type: "image",
    src: "https://bycharlotte.com.au/cdn/shop/files/Untitled-1_f8e949c4-d7df-441d-804d-5a6d7bd63384.jpg?v=1704855173&width=800",
    alt: "Image 3"
  }
];
const filterOptions=[
  {
    "category": "TYPE",
    "subPossibilities": ["BRACELET", "EARRINGS", "NECKLACE", "RINGS"]
  },
  {
    "category": "MATERIAL",
    "subPossibilities": ["GOLD", "SILVER"]
  },
  {
    "category": "PRICE",
    "subPossibilities": ["UNDER £100", "UNDER £250", "UNDER £50"]
  }
]


export { navbarItems,categories,items,socials,footer, imagesGallery,addressInfo,aboutContent,filterOptions};