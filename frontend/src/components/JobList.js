import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import JobDetail from './JobDetail';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function JobList({ rows }) {
  const classes = useStyles();

  const showJobDetails = (id) => {
      <JobDetail id={id}></JobDetail>
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} onClick={() => showJobDetails(row.id)}>
               <TableCell>{row.id}</TableCell>
              <TableCell>{row.job_title}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell><JobDetail id={row.id}></JobDetail></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}