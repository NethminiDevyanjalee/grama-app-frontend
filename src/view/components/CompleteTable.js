import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

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
    "123V",
    "B.B.C.Fernando",
    "Pass",
    "Fail",
    "Pass",
    "Fail",
    "Declined"
  ),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const StyledApprovedButton = styled(Button)`
  background-color: green;
  color: white;
`;

const StyledDeclinedButton = styled(Button)`
  background-color: red;
  color: white;
`;

export default function CompleteTable() {
  const handleApprove = (id) => {
    // Handle approve logic for the specific row
    console.log(`Approved: ${id}`);
  };

  const handleDecline = (id) => {
    // Handle decline logic for the specific row
    console.log(`Declined: ${id}`);
  };
  return (
    <Paper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">ID Check</StyledTableCell>
              <StyledTableCell align="center">Address Check</StyledTableCell>
              <StyledTableCell align="center">Police Check</StyledTableCell>
              <StyledTableCell align="center">
                Certificate Status
              </StyledTableCell>
              <StyledTableCell align="center">Accept/Decline</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.idCheck}</StyledTableCell>
                <StyledTableCell align="center">{row.address}</StyledTableCell>
                <StyledTableCell align="center">{row.police}</StyledTableCell>
                <StyledTableCell align="center">{row.status}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.approve === "Approved" ? (
                    <StyledApprovedButton
                      variant="contained"
                      onClick={() => handleApprove(row.id)}
                    >
                      Approved
                    </StyledApprovedButton>
                  ) : (
                    <StyledDeclinedButton
                      variant="contained"
                      onClick={() => handleDecline(row.id)}
                    >
                      Declined
                    </StyledDeclinedButton>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
