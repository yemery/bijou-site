import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <Link to={`/product/${props.id}`} >
      <div className=" h-full w-full flex flex-col">
        <div className={` bg-white w-full flex-1`}>
          <img className="w-full h-full" src={props.image} alt="" />
        </div>
        <div className="p-1 flex flex-col gap-1 items-center justify-center text-center text-sm md:text-normal">
          <p className="font-medium">{props.subtitle}</p>
          <p>{props.title}</p>
          <p>{props.price}</p>
        </div>{" "}
        {/* <form action="" method="post" className="w-full">
          <input type="hidden" name="item_id" value={props.id} />
          <button
            type="button"
            class="w-full text-black bg-[#b48f3e]  hover:bg-[#a0722e]  font-medium  text-sm px-5 py-2.5 me-2 mb-2 "
          >
            add to cart
          </button>
        </form> */}
      </div>
    </Link>
  );
};

export default Item;
