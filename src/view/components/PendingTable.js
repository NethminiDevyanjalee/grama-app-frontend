import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, name, idCheck, address, police, status, approve) {
  return { id, name, idCheck, address, police, status, approve };
}

const rows = [
  createData('123V', 'A.B.C.Perera', 'Pass', 'Pass', 'Pass', 'Pass', 'Approved'),
  createData('456V', 'G.H.A.D. Silva', 'Pass', 'Pass', 'Pass', 'Pass', 'Approved'),
  createData('129V', 'A.N.Perera', 'Pass', 'Fail', 'Pass', 'Fail', 'Declined'),
  createData('234V', 'K.P.Kumara', 'Pass', 'Pass', 'Fail', 'Pass', 'Declined'),
  createData('123V', 'B.B.C.Fernando', 'Pass', 'Fail', 'Pass', 'Fail','Declined'),
];

export default function PendingTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="center">ID Check</TableCell>
            <TableCell align="center">Address Check</TableCell>
            <TableCell align="center">Police Check</TableCell>
            <TableCell align="center">Certificate Status</TableCell>
            <TableCell align="center">Accept/Decline</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="center">{row.idCheck}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">{row.police}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.approve}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}