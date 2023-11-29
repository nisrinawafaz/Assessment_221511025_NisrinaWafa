/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import axios from "axios";
const baseURL = "http://localhost:3000/barang/";

const DataBarang = () => {
    const [dataBarang, setDataBarang] = useState([]);

    useEffect(() => {
        barang();
      }, []);
    const barang = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/barang/`);
          setDataBarang(response.data.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      const handleEdit = (id) => {
        // Implement logic for editing based on the item id
        console.log(`Editing item with id ${id}`);
    };

    const handleDelete = async (id) => {
        const confirmation = window.confirm('Anda yakin ingin menghapus data ini?');
    
        if (confirmation) {
          try {
            await axios.delete(`http://localhost:3000/barang/delete/${id}`);
            const newData = dataBarang.filter(item => item.id !== id);
            setDataBarang(newData);
          } catch (error) {
            console.error('Error deleting data:', error);
          }
        }
      };

    return (
        <div>
            <h2>Data Barang</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama Barang</th>
                        <th>Satuan</th>
                        <th>Harga Satuan</th>
                        <th>Stok</th>
                        <th>aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(dataBarang) && dataBarang.length > 0 ? (
                        dataBarang.map((barang) => (
                            <tr key={barang.id}>
                                <td>{barang.id}</td>
                                <td>{barang.NamaBarang}</td>
                                <td>{barang.Satuan}</td>
                                <td>{barang.HargaSatuan}</td>
                                <td>{barang.Stok}</td>
                                <td>{barang.Stok}</td>
                                <td>
                                <button onClick={() => window.location.href=`/#/edit/${barang.id}`}>Edit</button>

                                    <button onClick={() => handleDelete(barang.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DataBarang;
