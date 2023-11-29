/* eslint-disable prettier/prettier */
import React, { useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
const baseURL = "http://localhost:3000/barang/";

const DataBarang = () => {
    const [dataBarang, setDataBarang] = useState([]);
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
            setDataBarang(response.data.data);
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
        <div>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="NamaBarang">Nama Barang:</label>
                <input
                    type="text"
                    id="NamaBarang"
                    name="NamaBarang"
                    value={formData.NamaBarang}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="Satuan">Satuan:</label>
                <input
                    type="text"
                    id="Satuan"
                    name="Satuan"
                    value={formData.Satuan}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="HargaSatuan">Harga Satuan:</label>
                <input
                    type="number"
                    id="HargaSatuan"
                    name="HargaSatuan"
                    value={formData.HargaSatuan}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="Stok">Stok:</label>
                <input
                    type="number"
                    id="Stok"
                    name="Stok"
                    value={formData.Stok}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <button type="submit">Simpan Data</button>
            </div>
        </form>
        </div>
    );
};

export default DataBarang;
