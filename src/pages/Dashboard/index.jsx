import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import ModalPopup from '../../components/Modal'

const columns = [
  { id: 'name', label: 'name', minWidth: 170 },
  { id: 'username', label: 'username', minWidth: 100 },
  { id: 'email', label: 'email', minWidth: 170, align: 'left' },
  { id: 'address', label: 'address', minWidth: 170, align: 'left' },
  { id: 'phone', label: 'phone', minWidth: 170, align: 'left' },
  { id: 'iconButton', label: '', minWidth: 70, align: 'left' },
];

export default function StickyHeadTable() {
  const [rows, setRows] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleDelete = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const handleChangeRow = (id, newRow) => {
    const newRows = [...rows];
    newRows[id] = newRow;
    setRows(newRows);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  React.useEffect(() =>{
      axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        setRows(res.data)
      })
      .catch(error => console.log(error))
  }, []);
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = column.id === "address" ? `${row[column.id].street}, ${row[column.id].suite}` : row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "iconButton" ? <div className='flex'><ModalPopup dataRow={row} rowId={index} onChangeRow={handleChangeRow} /><DeleteIcon onClick={() => handleDelete(row.id)}  sx={{cursor: "pointer"}}/></div> : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}