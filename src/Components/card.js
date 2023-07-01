import React from "react";
function Card()
{
return <div>
    <div className="container2" >
        <div >
            <img  className="wom-card1"/>
            <div>
            
                <div className="description">
                   
                    <h4>Women Vest</h4>
                <p>Grey women vest</p>
                <div className="select">
                <select >
                        {Array.from(Array(6) , (e,i) =>
                        {
                            return<option key={i+1} value={i+1}> {i+1}</option>
                        })}
                    </select> 
                    <div>
                        <select>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                    </div>
                <div className="price">Total Price: </div>
                </div>
                </div>
            </div>
        </div>
    </div>
   
</div>


}

export default Card; 