import './index.css'
import Header from '../Header'

const Products = () => (
  <div>
    <Header />
    <div className="products-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        alt="products"
        className="product-route"
      />
    </div>
  </div>
)

export default Products
