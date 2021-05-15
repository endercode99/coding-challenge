import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { api } from '../App'
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function JobDetail({id}) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [job, setJob] = React.useState({});

  const handleOpen = () => {
    api.get("/jobs/" + id)
    .then(res => {      
    setJob(res.data)
    })
    .catch(error=>{
        console.log("Error")
    })
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{job.job_title}</h2>
      <p id="simple-modal-description">
        Job Description: {job.job_description} <br/>
        Location: {job.location} <br/>
        Date: {job.date} <br/>
        Applicants: {job.applicants} <br/>
      </p>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
       Show
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}