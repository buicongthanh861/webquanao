import React from "react";
import './DescriptionBox.css'


const DescriptionBox = () =>{
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
                <div className="descriptionbox-description">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate repellendus  odio velit, similique commodi blanditiis illum impedit qui iusto alias cumque maiores dolores error quam facere eveniet iure sequi laboriosam.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi vel cupiditate porro, id obcaecati laboriosam ut officia? Rerum molestiae, expedita qui earum quam itaque quibusdam</p>
                </div>
        </div>
    )
}

export default DescriptionBox