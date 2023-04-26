import React from "react";

const Card = (props) => {
    return (
      <>
        <div className="col-4 offset-4 my-5">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">Counter</h2>
            </div>
            <div className="card-body">
              <h3 className="text-center">{props.count}</h3>
            </div>
            <div className="card-footer d-flex justify-content-between ">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => props.incrementNum()}
              >
                +
              </button>
              <button
                className="btn btn-danger"
                type="button"
                onClick={() => props.decrementNum()}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default Card;