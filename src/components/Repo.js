import React from 'react';

const Repo = (props) => {
  return (
    <li class='list-group-item'>
      <a href={props.link}>
        {/* <img src={props.image} alt='img' /> */}
        {props.name}
      </a>
      <div>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <p>Rank:{props.rank}</p>
      </div>
    </li>
  );
};

export default Repo;
