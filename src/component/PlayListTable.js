import React from 'react';
import { userContext } from './../App'
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors/'

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '25px'
  },
  pageTitle: {
    letterSpacing: '3px',
    fontFamily: 'Vanilla Extract',
    textAlign: 'center',
    color: theme.palette.secondary.light,
  },
  root: {
    maxWidth: '100vw',
    marginTop: '20px',
  },
  tablePagination: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
  },
  table: {
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
    minWidth: '600px',
  },
  tableRow: {
    backgroundColor: grey[700]
  },
  headerCell: {
    fontFamily: 'Vanilla Extract',
    color: grey[900],
  }
}));

const PlayListTable = () => {
  const classes = useStyles();
  const history = useHistory();
  const { name, playlist, setPlaylist } = useContext(userContext);

  if (name == null) {
    setPlaylist([])
    history.push('./');
  }
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div className={classes.container}>
        <Typography variant='h4' className={classes.pageTitle}>
          Play List
        </Typography>
        <Paper className={classes.root}>
          <TableContainer className={classes.table}>
            <Table stickyHeader aria-label="sticky table" className={classes.tableRow} >
              <TableHead >
                <TableRow >
                  <TableCell className={classes.headerCell}>No. </TableCell>
                  <TableCell className={classes.headerCell}>Level</TableCell>
                  <TableCell className={classes.headerCell}>Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  playlist.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((list, index) => (
                    <TableRow key={index} hover role="checkbox">
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{list.level}</TableCell>
                      <TableCell>{list.time}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>

          </TableContainer>
          <TablePagination
            className={classes.tablePagination}
            rowsPerPageOptions={[6, 10, 25, 100]}
            component="div"
            count={playlist.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </>
  )
}

export default PlayListTable