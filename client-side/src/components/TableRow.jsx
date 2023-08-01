// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../stores/actionCreator';
import { useNavigate } from 'react-router-dom';

export default function TableRows(props) {
  const handleNavigate = useNavigate();
  const { products } = props;
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
  }

  const buttonEdit = (id) =>{ 
    handleNavigate(`/editProduct/${id}`)
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">price</TableCell>
            <TableCell align="right">length</TableCell>
            <TableCell align="right">height</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">
                <img
                  className='w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200'
                  src={row.image}
                  alt={row.name}
                />
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.length}</TableCell>
              <TableCell align="right">{row.height}</TableCell>
              <TableCell align="right">
                <Grid container spacing={2}>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        buttonEdit(row.id)
                        // Add your edit logic here
                      }}
                    >
                      Edit
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        handleDelete(row.id)
                      }}
                    >
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
