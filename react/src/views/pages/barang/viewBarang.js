/* eslint-disable prettier/prettier */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const baseURL = 'http://localhost:3000/barang/';

const DataBarang = () => {
    const [dataBarang, setDataBarang] = useState([]);

    useEffect(() => {
        barang();
    }, []);

    const barang = async () => {
        try {
            const response = await axios.get('http://localhost:3000/barang/');
            setDataBarang(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleEdit = (id) => {
        // Implement logic for editing based on the item id
        console.log(`Editing item with kode ${id}`);
    };

    const handleDelete = async (id) => {
        const confirmation = window.confirm('Anda yakin ingin menghapus data ini?');

        if (confirmation) {
            try {
                await axios.delete(`http://localhost:3000/barang/delete/${id}`);
                const newData = dataBarang.filter((item) => item.KodeBarang !== id);
                setDataBarang(newData);
            } catch (error) {
                console.error('Error deleting data:', error);
            }
        }
    };

    return (
        <div className="container mt-5">
            <h2>Data Barang</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Kode Barang</th>
                        <th scope="col">Nama Barang</th>
                        <th scope="col">Satuan</th>
                        <th scope="col">Harga Satuan</th>
                        <th scope="col">Stok</th>
                        <th scope="col">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(dataBarang) && dataBarang.length > 0 ? (
                        dataBarang.map((barang) => (
                            <tr key={barang.id}>
                                <td>{barang.KodeBarang}</td>
                                <td>{barang.NamaBarang}</td>
                                <td>{barang.Satuan}</td>
                                <td>{barang.HargaSatuan}</td>
                                <td>{barang.Stok}</td>
                                <td>
                                    <button
                                        className="btn btn-primary me-2"
                                        onClick={() => (window.location.href = `/#/edit/${barang.KodeBarang}`)}
                                    >
                                        Edit
                                    </button>
                                    <button className="btn btn-danger" onClick={() => handleDelete(barang.KodeBarang)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DataBarang;
