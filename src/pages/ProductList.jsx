import { filterOptions, items } from "../assets/config"
import MiniHeader from "../components/MiniHeader"
import Item from "../components/Products/Item"

const ProductList = () => {
  return (
    <div className="flex flex-col w-full h-full ">
      <MiniHeader image="https://ocdn.apart.eu/apart/apart-eu/home-page/2024/20240207/bizuteria-premium.jpg" value="shop now !"/>
    
    <div className="flex flex-col px-4 text-sm relative  max-w-[1480px]  m-auto w-full  mt-9 gap-4">
<div className=" flex justify-between ">
  
  <h1 className="font-bold">filter by</h1>
{filterOptions.map((item)=>(

  <div >
    
    <p className="font-semibold">{item.category}</p>
    <ul>
      {item.subPossibilities.map((e)=>(
        <li > <input id="default-checkbox" type="checkbox" value="" class="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded  "/>
        <label for="default-checkbox" class="ms-2 ">{e}</label></li>
        
      ))}
    </ul>
  </div>
 
))}
</div>
<div className="grid md:grid-cols-4 grid-cols-2 gap-6">
  {items.map((e)=>(
   <Item {...e} />  
  ))}

</div>
    </div>

    </div>
  )
}

export default ProductList