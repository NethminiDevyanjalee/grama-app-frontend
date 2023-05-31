import {useState,useEffect} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { approveDecline } from '../../api/approve-decline';
import { useAuthContext } from "@asgardeo/auth-react";

function createData(id, name, idCheck, address, police, status, approve) {
  return { id, name, idCheck, address, police, status, approve };
}

const rows = [
  createData(
    "123V",
    "A.B.C.Perera",
    "Pass",
    "Pass",
    "Pass",
    "Pass",
    "Approved"
  ),
  createData(
    "456V",
    "G.H.A.D. Silva",
    "Pass",
    "Pass",
    "Pass",
    "Pass",
    "Approved"
  ),
  createData("129V", "A.N.Perera", "Pass", "Fail", "Pass", "Fail", "Declined"),
  createData("234V", "K.P.Kumara", "Pass", "Pass", "Fail", "Pass", "Declined"),
  createData(
    "120V",
    "B.B.C.Fernando",
    "Pass",
    "Fail",
    "Pass",
    "Fail",
    "Declined"
  ),
];
const StyledApprovedButton = styled(Button)`
  background-color: green;
  color: white;
`;

const StyledDeclinedButton = styled(Button)`
  background-color: red;
  color: white;
`;

export default function PendingTable() {
const {getAccessToken} = useAuthContext();

  const handleApprove = async (id) => {
    // Handle approve logic for the specific row
    // approveDecline(at,"A123456789",true);
    
    try {
      const accessToken = await getAccessToken();
      approveDecline(accessToken,"A123456789",true);
  } catch (error) {
      console.error(error);
  }
    console.log(`Approved: ${id}`);
  };

  const handleDecline = (id) => {
    // Handle decline logic for the specific row
    console.log(`Declined: ${id}`);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1200 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{ backgroundColor: '#294A84'}}>
            <TableCell style={{ color: 'white' }}>ID</TableCell>
            <TableCell style={{ color: 'white' }}>Name</TableCell>
            <TableCell align="center" style={{ color: 'white' }}>ID Check</TableCell>
            <TableCell align="center" style={{ color: 'white' }}>Address Check</TableCell>
            <TableCell align="center" style={{ color: 'white' }}>Police Check</TableCell>
            <TableCell align="center" style={{ color: 'white' }}>Certificate Status</TableCell>
            <TableCell align="center" style={{ color: 'white' }}>Accept/Decline</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="center">{row.idCheck}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">{row.police}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">
                {row.approve === "Approved" ? (
                  <StyledApprovedButton
                    variant="contained"
                    onClick={() => handleApprove(row.id)}
                  >
                    Approve
                  </StyledApprovedButton>
                ) : (
                  <StyledDeclinedButton
                    variant="contained"
                    onClick={() => handleDecline(row.id)}
                  >
                    Decline
                  </StyledDeclinedButton>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
