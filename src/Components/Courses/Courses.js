import React from 'react';

const Courses = (props) => {
    const {name,image,price,instructor} = props.course;
    console.log(props.course);
    return (
        <div className="card mb-3 ">
        <img  src= {image}  className="card-img-top py-2 w-25 rounded mx-auto d-block " alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">By:{instructor}</p>
          <h4 className="card-text">Price:${price}</h4>
          <button onClick={() => props.addToCart(props.course)} type="button" className="btn btn-success">Enroll Now	</button>
        </div>
    </div>
    );
};

export default Courses;