import React from 'react';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import CallMergeIcon from '@material-ui/icons/CallMerge';
import BugReportOutlinedIcon from '@material-ui/icons/BugReportOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import SortIcon from '@material-ui/icons/Sort';
import './css/repo.css';

const Repo = (props) => {
  return (
    <li class='list-group-item'>
      <a href={props.link} className='font-weight-bold repo-name'>
        {props.name}
      </a>
      <div>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <div class='d-flex flex-row'>
          <div class='p-2'>
            <div class='d-flex flex-row'>
              <StarBorderOutlinedIcon fontSize='small' />
              <p>{props.stars}</p>
            </div>
          </div>
          <div class='p-2'>
            <div class='d-flex flex-row'>
              <FiberManualRecordIcon fontSize='small' />
              <p>{props.language}</p>
            </div>
          </div>
          <div class='p-2'>
            <div class='d-flex flex-row'>
              <SortIcon fontSize='small' />
              <p>{Math.floor(props.rank)}</p>
            </div>
          </div>
          <div class='p-2'>
            <div class='d-flex flex-row'>
              <CallMergeIcon fontSize='small' />
              <p>{props.forks}</p>
            </div>
          </div>
          <div class='p-2'>
            <div class='d-flex flex-row'>
              <BugReportOutlinedIcon fontSize='small' />
              <p>{props.issues}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Repo;
