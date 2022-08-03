import React, { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  forReoder: string | undefined,
  inventoryID: number | undefined,
  projectName: number | undefined,
  projectDescription: string | undefined,
  workID: number | undefined,
  plasmidQuantity: number | undefined,
  linearDnaQuantity: number | undefined,
  quantityOfRna: number | undefined,
  needForMutagenesis: number | undefined,
  polyATailing: number | undefined,
  tailedWithPoly: number | undefined,
  pasmidID: number | undefined,
  linID: number | undefined,
  rnaID: number | undefined,
  projectStartDate: number | undefined,
  plasmidBarcod: number | undefined
) {
  return {
    forReoder,
    inventoryID,
    projectName,
    projectDescription,
    workID,
    plasmidQuantity,
    linearDnaQuantity,
    quantityOfRna,
    needForMutagenesis,
    polyATailing,
    tailedWithPoly,
    pasmidID,
    linID,
    rnaID,
    projectStartDate,
    plasmidBarcod,
  };
}

const Hello = () => {
  const [forReoder, setForReoder] = useState('');
  const [inventoryID, setInventoryID] = useState('');
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [workID, setWorkID] = useState('');
  const [plasmidQuantity, setPlasmidQuantity] = useState('');
  const [linearDnaQuantity, setLinearDnaQuantity] = useState('');
  const [quantityOfRna, setQuantityOfRna] = useState('');
  const [needForMutagenesis, setNeedForMutagenesis] = useState('');
  const [polyATailing, setPolyATailing] = useState('');
  const [tailedWithPoly, setTailedWithPoly] = useState('');
  const [pasmidID, setPasmidID] = useState('');
  const [linID, setLinID] = useState('');
  const [rnaID, setRnaID] = useState('');
  const [date, setDate] = useState(new Date('2014-08-18T21:11:54'));
  const [projectStartDate, setProjectStartDate] = useState(
    `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
  );
  const [plasmidBarcod, setPlasmidBarcod] = useState('');

  const [rows, setRows] = useState([]);

  return (
    <Grid>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <div>
          <TextField
            label="For Reorder"
            sx={{ m: 1, width: '25ch' }}
            id="outlined-size-normal"
            value={forReoder}
            onChange={(e) => setForReoder(e.target.value)}
          />
          <TextField
            label="project name"
            sx={{ m: 1, width: '25ch' }}
            id="outlined-size-normal"
            defaultValue=""
            placeholder="project name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <TextField
            id="outlined-number"
            sx={{ m: 1, width: '25ch' }}
            label="Inventory ID"
            type="number"
            value={inventoryID}
            onChange={(e) => setInventoryID(e.target.value)}
          />
          <TextField
            id="outlined-number"
            sx={{ m: 1, width: '25ch' }}
            label="Work ID"
            type="number"
            value={workID}
            onChange={(e) => {
              setLinID(`${e.target.value}_3`);
              setRnaID(`${e.target.value}_2`);
              setPasmidID(`${e.target.value}_1`);
              setWorkID(e.target.value);
            }}
          />
          <OutlinedInput
            id="outlined-adornment-weight"
            sx={{ m: 1, width: '25ch' }}
            placeholder="Plasmid quantity"
            endAdornment={<InputAdornment position="end">mg</InputAdornment>}
            value={plasmidQuantity}
            onChange={(e) => setPlasmidQuantity(e.target.value)}
          />
          <OutlinedInput
            id="outlined-adornment-weight"
            sx={{ m: 1, width: '25ch' }}
            placeholder="Linear DNA quantity"
            endAdornment={<InputAdornment position="end">mg</InputAdornment>}
            inputProps={{
              'aria-label': 'weight',
            }}
            value={linearDnaQuantity}
            onChange={(e) => setLinearDnaQuantity(e.target.value)}
          />
          <OutlinedInput
            id="Quantity of RNA"
            sx={{ m: 1, width: '25ch' }}
            placeholder="Quantity of RNA"
            endAdornment={<InputAdornment position="end">mg</InputAdornment>}
            inputProps={{
              'aria-label': 'weight',
            }}
            value={quantityOfRna}
            onChange={(e) => setQuantityOfRna(e.target.value)}
          />

          <TextField
            label="need for mutagenesis"
            sx={{ m: 1, width: '25ch' }}
            id="outlined-size-normal"
            defaultValue=""
            placeholder="need for mutagenesis"
            value={needForMutagenesis}
            onChange={(e) => setNeedForMutagenesis(e.target.value)}
          />
          <TextField
            label="poly a tailing"
            sx={{ m: 1, width: '25ch' }}
            id="outlined-size-normal"
            defaultValue=""
            placeholder="poly a tailing"
            value={polyATailing}
            onChange={(e) => setPolyATailing(e.target.value)}
          />

          <Select
            sx={{ m: 1, width: '25ch' }}
            id="demo-simple-select"
            defaultValue={1}
            onChange={(e) => setTailedWithPoly(e.target.value)}
          >
            <MenuItem value={1}>tailed with poly (A)</MenuItem>
            <MenuItem value={'yes'}>yes</MenuItem>
            <MenuItem value={'no'}>no</MenuItem>
          </Select>

          <TextField
            id="Pasmid ID"
            sx={{ m: 1, width: '25ch' }}
            label="Pasmid ID"
            type="string"
            disabled={true}
            value={pasmidID}
            onChange={(e) => setPasmidID(e.target.value)}
          />
          <TextField
            id="Lin-ID"
            sx={{ m: 1, width: '25ch' }}
            label="Lin-ID"
            disabled={true}
            type="String"
            value={linID}
            onChange={(e) => setLinID(e.target.value)}
          />
          <TextField
            id="RNA-ID"
            sx={{ m: 1, width: '25ch' }}
            label="RNA-ID"
            type="string"
            disabled={true}
            value={rnaID}
            onChange={(e) => setRnaID(e.target.value)}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Date desktop"
              value={date}
              inputFormat="MM/dd/yyyy"
              renderInput={(params) => <TextField {...params} />}
              onChange={(val) => {
                setDate(val);
                const d = new Date(val);
                setProjectStartDate(
                  `${d.getDay()}/${d.getMonth()}/${d.getFullYear()}`
                );
              }}
            />
          </LocalizationProvider>
          <TextField
            label="plasmid-Barcod"
            sx={{ m: 1, width: '25ch' }}
            id="outlined-size-normal"
            defaultValue=""
            placeholder="plasmid-Barcod"
            value={plasmidBarcod}
            onChange={(e) => setPlasmidBarcod(e.target.value)}
          />

          <FormControl fullWidth sx={{ m: 1 }}>
            <TextareaAutosize
              maxRows={4}
              aria-label="maximum height"
              placeholder="description"
              defaultValue=""
              style={{ width: 600 }}
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
            />
          </FormControl>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
              color="secondary"
              onClick={(curent) => {
                console.log(
                  createData(
                    forReoder,
                    inventoryID,
                    projectName,
                    projectDescription,
                    workID,
                    plasmidQuantity,
                    linearDnaQuantity,
                    quantityOfRna,
                    needForMutagenesis,
                    polyATailing,
                    tailedWithPoly,
                    pasmidID,
                    linID,
                    rnaID,
                    projectStartDate,
                    plasmidBarcod
                  )
                );
                setRows([
                  ...rows,
                  createData(
                    forReoder,
                    inventoryID,
                    projectName,
                    projectDescription,
                    workID,
                    plasmidQuantity,
                    linearDnaQuantity,
                    quantityOfRna,
                    needForMutagenesis,
                    polyATailing,
                    tailedWithPoly,
                    pasmidID,
                    linID,
                    rnaID,
                    projectStartDate,
                    plasmidBarcod
                  ),
                ]);

                setForReoder('');
                setInventoryID('');
                setProjectName('');
                setProjectDescription('');
                setWorkID('');
                setPlasmidQuantity('');
                setLinearDnaQuantity('');
                setQuantityOfRna('');
                setNeedForMutagenesis('');
                setTailedWithPoly('');
                setPasmidID('');
                setLinID('');
                setRnaID('');
                setPlasmidBarcod('');
              }}
            >
              add project
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                console.log(rows.length);
              }}
            >
              <Link
                underline="hover"
                color="inherit"
                href={encodeURI(
                  `http://api.riale-online.fr:8080/importxls?id=${JSON.stringify(
                    rows
                  )}`
                )}
              >
                create file Excel
              </Link>
            </Button>
          </ButtonGroup>
        </div>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>For Reorder</StyledTableCell>
              <StyledTableCell align="right">Inventory ID</StyledTableCell>
              <StyledTableCell align="right">project name</StyledTableCell>
              <StyledTableCell align="right">
                project description
              </StyledTableCell>
              <StyledTableCell align="right">Work ID</StyledTableCell>
              <StyledTableCell align="right">
                Plasmid quantity&nbsp;(mg)
              </StyledTableCell>
              <StyledTableCell align="right">
                Linear DNA quantity&nbsp;(mg)
              </StyledTableCell>
              <StyledTableCell align="right">
                Quantity of RNA&nbsp;(mg)
              </StyledTableCell>
              <StyledTableCell align="right">
                need for mutagenesis
              </StyledTableCell>
              <StyledTableCell align="right">poly a tailing</StyledTableCell>
              <StyledTableCell align="right">
                tailed with poly&nbsp;(A)
              </StyledTableCell>
              <StyledTableCell align="right">Pasmid ID</StyledTableCell>
              <StyledTableCell align="right">Lin-ID</StyledTableCell>
              <StyledTableCell align="right">RNA-ID</StyledTableCell>
              <StyledTableCell align="right">
                project start date
              </StyledTableCell>
              <StyledTableCell align="right">plasmid-Barcod</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.projectName}>
                <StyledTableCell>{row.forReoder}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.inventoryID}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.projectName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.projectDescription}
                </StyledTableCell>
                <StyledTableCell align="right">{row.workID}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.plasmidQuantity}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.linearDnaQuantity}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.quantityOfRna}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.needForMutagenesis}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.polyATailing}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.tailedWithPoly}
                </StyledTableCell>
                <StyledTableCell align="right">{row.pasmidID}</StyledTableCell>
                <StyledTableCell align="right">{row.linID}</StyledTableCell>
                <StyledTableCell align="right">{row.rnaID}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.projectStartDate}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.plasmidBarcod}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
