import React from 'react';

const Repo = (props) => {
  return (
    <li class='list-group-item'>
      <a href={props.link}>
        {/* <img src={props.image} alt='img' /> */}
        {props.name}
      </a>
      <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </li>
  );
};

export default Repo;
