import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Api = 'https://northwind.vercel.app/api/customers';

export default function Customer({ sorted }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [rowCount, setRowCount] = useState(5); 
    useEffect(() => {
        axios.get(Api)
            .then(res => {
                const sortedData = [...res.data].sort((a, b) => {
                    return a.companyName.localeCompare(b.companyName);
                });
                setData(sorted ? sortedData : res.data);
                setLoading(false);
                console.log(res.data);
            })
            .catch(error => {
                console.error("API isteği sırasında hata oluştu:", error);
                setLoading(true);
            });
    }, [sorted]);

    useEffect(() => {
        if (data.length < rowCount) {
            setRowCount(data.length);
        }
    }, [data]);

    const handleChangeRowCount = (event) => {
        setRowCount(parseInt(event.target.value));
    };

    return (
        <div>
        <div>
          <label htmlFor="row-count">Satır Sayısı: </label>
          <select id="row-count" value={rowCount} onChange={handleChangeRowCount}>
            {Array.from({ length: data.length }, (_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
            {loading ? <div> Beklicen :) </div> : <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">ID</TableCell>
                            <TableCell align="right">Company Name</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">City</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(0, rowCount).map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right">{row.id}</TableCell>
                                <TableCell align="right">{row.companyName}</TableCell>
                                <TableCell align="right">{row.contactTitle}</TableCell>
                                <TableCell align="right">{row.address.city}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>}
        </div>
    );
}
