/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

const baseURL = "http://localhost:3000/barang/";
const Formbarang = () => {
    const [formData, setFormData] = useState({
        NamaBarang: '',
        Satuan: '',
        HargaSatuan: '',
        Stok: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(baseURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Data berhasil disimpan!');
                // Reset the form after successful submission
                setFormData({
                    NamaBarang: '',
                    Satuan: '',
                    HargaSatuan: '',
                    Stok: '',
                });
            } else {
                console.error('Gagal menyimpan data.');
            }
        } catch (error) {
            console.error('Terjadi kesalahan:', error.message);
        }
    };

    return (
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
    );
};

export default Formbarang;
