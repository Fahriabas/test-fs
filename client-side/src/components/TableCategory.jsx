import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid } from '@mui/material';
import { handleDeleteCategory } from '../stores/actionCreator';



export default function TableCategory() {

    const data = useSelector((state) => state.category)

    const dispatch = useDispatch()

    const handleDelete = (id) => {
      dispatch(handleDeleteCategory(id))
    }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">
                <Grid container spacing={2}>
                    <Grid item>
                        <Button
                        variant='contained'
                        color='secondary'
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