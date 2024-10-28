import './Home.css'
import { useNavigate } from 'react-router-dom';
export default function Home(){
  const navigate = useNavigate();
    return(
        <div className='Main'>
        <div className="heros">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                  <img src="https://t3.ftcdn.net/jpg/05/85/50/46/360_F_585504652_mx2E5zY3SZxOE9yjuHArUIMWFweAgHY6.jpg" className="d-block mx-lg-auto img-fluid rounded" alt="Bootstrap Themes" width="800" height="500" loading="lazy"/>
                </div>
                <div className="col-lg-6">
                  <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Discover the Creamy Goodness of Our Milk Products</h1>
                  <p className="lead">Welcome to our world of milk! We offer a delightful range of high-quality dairy products that bring freshness and nutrition to your table. From rich, creamy milk to indulgent yogurt and flavorful cheeses, our products are crafted with care, ensuring the best taste and health benefits.</p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={()=>{navigate('/product')}}>Products</button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">Order Now</button>
                  </div>
                </div>
              </div>
        </div>
        <div class="container px-4 py-5" id="hanging-icons">
    <h2 class="pb-2 border-bottom">Milk Product</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg>
        </div>
        <div>
          <h3 class="fs-2 text-body-emphasis">Fresh Milk</h3>
          <p>Enjoy the pure, creamy taste of our fresh milk, sourced from local farms. Packed with essential nutrients, it’s perfect for drinking or cooking.</p>
          <button className='border-0' onClick={()=>{navigate('/about')}}>
            <a href="#" class="btn btn-primary">
            About
            </a>
            </button> 
        </div>
      </div>
      <div class="col d-flex align-items-start">
            <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg class="bi" width="1em" height="1em"><use xlink:href="#cpu-fill"></use></svg>
            </div>
            <div>
            <h3 class="fs-2 text-body-emphasis">Cheese</h3>
            <p>Explore our wide range of cheeses, from sharp cheddars to creamy bries. Ideal for cooking, snacking, or adding to your favorite dishes.</p>
            <button className='border-0' onClick={()=>{navigate('/about')}}>
              <a href="#" class="btn btn-primary">
              About
              </a>
            </button> 
            </div>
            </div>
            <div class="col d-flex align-items-start">
                <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg class="bi" width="1em" height="1em"><use xlink:href="#tools"></use></svg>
                </div>
                <div>
                <h3 class="fs-2 text-body-emphasis">Ice Cream</h3>
                <p>Treat yourself to our luscious ice cream, available in a variety of flavors. Made with real milk for a creamy, delightful experience.</p>
                <button className='border-0' onClick={()=>{navigate('/about')}}>
                  <a href="#" class="btn btn-primary">
                  About
                  </a>
            </button> 
                </div>
            </div>
            </div>
        </div>

        <div class="container">
              <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div class="col-md-4 d-flex align-items-center">
                  <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                    <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
                  </a>
                  <span class="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Purely Dairy Delights</span>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                  <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
                  <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
                  <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
                </ul>
              </footer>
            </div>        
        </div>
    );

}