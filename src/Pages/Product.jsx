import Data from "../Data/data";
import './Product.css'

export default function Product(){
    return(
        <div className="contianer d-flex justify-content-center flex-wrap">
            {
                Data.map((key) =>(
                    <div className="card m-3">
                        <img src={key.ProductImg_url} className="card-img-top card-thumb" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{key.ProductName}</h5>
                            <p className="card-text">{key.ProductDescription}</p>
                            <a href="#" className="btn btn-primary">Order Now</a>
                        </div>
                    </div>
                ))
            }
        </div>
    );

}