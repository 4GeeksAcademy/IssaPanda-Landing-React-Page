import React from "react";

const Card = ({title, text}) => {
    return(
        <div class="card mt-5npm" style={{ width: '18rem' }}>
  <img src="https://qph.cf2.quoracdn.net/main-qimg-bc54d4d995526ae5eb9877c1c00ce725-lq" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{text}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
};

export default Card;