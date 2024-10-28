import { Link } from 'react-router-dom';
import './Navabar.css';
import { GrCart } from "react-icons/gr";
import { useState } from 'react';
export default function Navabar(){
    const [cartCount , setCount] = useState(0);
    return(
        <div className="nava">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                     
                    <span className="fs-4">Purely Dairy Delights</span>
                </a>

                <ul className="nav nav-pills py-1">
                    <li className="nav-item px-3 "><Link className ="text-decoration-none" to = "/">Home</Link></li>
                    <li className="nav-item px-3  "><Link className ="text-decoration-none" to = "/product">Product</Link></li>
                    <li className="nav-item px-3  "><Link className ="text-decoration-none" to = "/contact">Contact</Link></li>
                    <li className="nav-item px-3  "><Link className ="text-decoration-none" to = "/about">About</Link></li>
                    <li className="nav-item px-3 cart-item text-primary"><GrCart /><span className='cart-count'>{cartCount}</span></li>
                </ul>
                
            </header> 
 
        </div>
    );

}