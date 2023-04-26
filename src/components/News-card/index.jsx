import React from "react";
import './card.css'
const Card = (props) => {
    return (
      <>
        <div className="col-3 p-2">
          <div className="card h-100 flex-column align-itms-center">
            <img className="card-img-top" src={props.img} alt="rasm" />
            <div className="card-body">
              <h3 className="card-title">{props.title}</h3>
              <p className="card-text">{props.text}</p>
              <div className="d-flex justify-content-between align-items-center">
                <p className="card-date">{props.date}</p>
                <a className="card-link" href="#link">
                  {props.btn}
                  <img className="card-link__img" src={props.icon} alt="rasm" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Card;