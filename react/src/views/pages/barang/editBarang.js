/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

const baseURL = "http://localhost:3000/barang/";

const DataBarang = () => {
    const { key } = useParams();
    const [formData, setFormData] = useState({
        NamaBarang: '',
        Satuan: '',
        Stok: 0,
        HargaSatuan: 0
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/barang/${key}`);
            setFormData({
                NamaBarang: response.data.data.NamaBarang,
                Satuan: response.data.data.Satuan,
                Stok: response.data.data.Stok,
                HargaSatuan: response.data.data.HargaSatuan
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.patch(`http://localhost:3000/barang/update/${key}`, {
            NamaBarang: formData.NamaBarang,
            Satuan: formData.Satuan,
            Stok: formData.Stok,
            HargaSatuan: formData.HargaSatuan
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="NamaBarang" className="form-label">Nama Barang:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="NamaBarang"
                        name="NamaBarang"
                        value={formData.NamaBarang}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Satuan" className="form-label">Satuan:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="Satuan"
                        name="Satuan"
                        value={formData.Satuan}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="HargaSatuan" className="form-label">Harga Satuan:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="HargaSatuan"
                        name="HargaSatuan"
                        value={formData.HargaSatuan}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Stok" className="form-label">Stok:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="Stok"
                        name="Stok"
                        value={formData.Stok}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Simpan Data</button>
                </div>
            </form>
        </div>
    );
};

export default DataBarang;
