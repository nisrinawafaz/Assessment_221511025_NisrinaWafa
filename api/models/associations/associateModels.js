// api/models/associations/associatejs

'use strict';

module.exports = (models) => {
  const {
    Barang,
    BarangNota,
    Kasir,
    Nota,
    Tenan
  } = models;


  Tenan.hasMany(Nota, {
    foreignKey: 'KodeTenan',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })

  Nota.belongsTo(Tenan, {
    foreignKey: 'KodeTenan'
  });

  Kasir.hasMany(Nota, {
    foreignKey: 'KodeTenan',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })

  Nota.belongsTo(Kasir, {
    foreignKey: 'KodeKasir'
  });

  Nota.hasMany(BarangNota, {
    foreignKey: 'KodeNota',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })

  Barang.hasMany(BarangNota, {
    foreignKey: 'KodeBarang',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })

  BarangNota.belongsTo(Nota, {
    foreignKey: 'KodeNota'
  });

  BarangNota.belongsTo(Barang, {
    foreignKey: 'KodeBarang'
  });
};
