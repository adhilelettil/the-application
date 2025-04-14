

import { productservieses } from '../servieses/servieses';
import Productcard from '../component/Productcard/product';

// import Button from '../component/button/Button';
// import Input from '../component/input/Input';

export default async function Products(props: any) {


  const serchpitm = props.searchParams?.itm || '';
 



 
 
 const prod = await productservieses.getproduct();
  console.log(prod)
  
 
 
 const filteredProducts = prod.filter((item: {
   name: any; category: string; 
}) => item.name.toLowerCase().includes(serchpitm.toLowerCase()));
 



  return (
    <div>
      <div>
        {/* <Button /> */}
      </div>
     
     <div >
       
            <Productcard product={filteredProducts}  />
      </div>
       
      </div>
   
  );
}