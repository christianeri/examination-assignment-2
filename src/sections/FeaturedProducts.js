
import ProductCard from "../components/ProductCard"

const FeaturedProducts = ({title, sectionName, items = []}) => {

  return (
     <>          
          <section className='featured-products'>     
               <div className='container'>
                    <h3>Featured Products</h3>
                    <div className='row row-cols-1 row-cols-md-3 row-cols-lg-4 g-0'>
                         {
                              items.map(product => <ProductCard key={product.articleNumber} orientation='vertical' item={product}/>)
                         }
                    </div>
               </div>
          </section>
     </>
  )
}

export default FeaturedProducts