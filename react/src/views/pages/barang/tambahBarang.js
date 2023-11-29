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

export default Formbarang;
