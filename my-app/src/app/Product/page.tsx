

import { productservieses } from '../servieses/servieses';
import Productcard from '../component/productcard/product';

// import Button from '../component/button/Button';
// import Input from '../component/input/Input';

export default async function Products(props: any) {


  const serchpitm = props.searchParams?.itm || '';
 



 
 
 const prod = await productservieses.getproduct();
  console.log(prod)
  
 
 
const filteredProducts = prod.filter((item: {
  name: string; category: string; 
}) => item.name.toLowerCase().includes(serchpitm.toLowerCase()) || item.name.includes(serchpitm));
 



  return (
    <div>
      <div>
        
      </div>
     
     <div >
       
            <Productcard product={filteredProducts}  />
      </div>
       
      </div>
   
  );
}