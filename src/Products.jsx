import { useEffect,useState } from 'react'


export default function Products() {
    const [products, setProducts] = useState([]);

    async function getProducts(){

        const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
        const data = await response.json();
        setProducts(data.recipes);
    }
    
    useEffect(() => {
        getProducts();},[]);
    
  return (
    <div className='container'>
        <div className='products'>
            {
            products.map(product=> 
                    <div className='produ'>
                        <img src={product.image_url} />
                        <h3>{product.title}</h3>
                        <span>publisher : {product.publisher}</span>
                    </div>
                 )
            }
        </div>
    </div>
  );
}
