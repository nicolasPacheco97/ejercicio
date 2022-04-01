let contratos = [
    {
        "saldoContrato": 1117456.83,
        "contratoBase": "148678",
        "contratos": [
            {
                "idContrato": "148679",
                "descripcion": "INVERSION POCHA",
                "saldo": 1115213.43,
                "indImagen": 1,
                "tipoServicio": "Asesoría",
            },
            {
                "idContrato": "148678",
                "descripcion": "Disponibilidad",
                "saldo": 2243.4,
                "indImagen": 1,
                "tipoServicio": "Asesoría",
                
            }
        ]
    },
    {
        "saldoContrato": 1117456.83,
        "contratoBase": "149610",
        "contratos": [
            {
                "idContrato": "149611",
                "descripcion": "INVERSION SARA",
                "saldo": null,
                "indImagen": 1,
                "tipoServicio": "Asesoría"
            },
            {
                "idContrato": "149610",
                "descripcion": "Disponibilidad",
                "saldo": null,
                "indImagen": 1,
                "tipoServicio": "Asesoría"
            }
        ]
    }
];
let contratos_complementarios =  [
    {
        "contratoBase": "148678",
        "metasContrato": [
            {
                "idContrato": "148678",
                "conMeta": false,
                "saldoMeta": 0,
                "porcentajeMeta": 0,
                "saldoAlDia": 0,
                "saldoRestante": 0
            },
            {
                "idContrato": "148679",
                "conMeta": true,
                "saldoMeta": 115927,
                "porcentajeMeta": 962,
                "saldoAlDia": 1115213.43,
                "saldoRestante": 0
            }
        ]
    },
    {
        "contratoBase": "149610",
        "metasContrato": [
            {
                "idContrato": "149610",
                "conMeta": false,
                "saldoMeta": 0,
                "porcentajeMeta": 0,
                "saldoAlDia": 0,
                "saldoRestante": 0
            },
            {
                "idContrato": "149611",
                "conMeta": true,
                "saldoMeta": 3130040,
                "porcentajeMeta": 170.38,
                "saldoAlDia": 5333088.34,
                "saldoRestante": 0
            }
        ]
    }
]

//Este es el código a ejecutar
contratos.map( e => {
  let complement = contratos_complementarios.find( element => element.contratoBase === e.contratoBase)
  e.contratos = e.contratos.map( m => {
    let complemet_metas = complement.metasContrato.find( meta => meta.idContrato === m.idContrato)
    return {...m, ...complemet_metas}
  })
  return e
})

const final = [
    {
        "saldoContrato": 1117456.83,
        "contratoBase": "148678",
        "contratos": [
            {
                "idContrato": "148679",
                "descripcion": "INVERSION POCHA",
                "saldo": 1115213.43,
                "indImagen": 1,
                "tipoServicio": "Asesoría",
                "conMeta": true,
                "saldoMeta": 115927,
                "porcentajeMeta": 962,
                "saldoAlDia": 1115213.43,
                "saldoRestante": 0
            },
            {
                "idContrato": "148678",
                "descripcion": "Disponibilidad",
                "saldo": 2243.4,
                "indImagen": 1,
                "tipoServicio": "Asesoría",
                "conMeta": false,
                "saldoMeta": 0,
                "porcentajeMeta": 0,
                "saldoAlDia": 0,
                "saldoRestante": 0
            }
        ]
    },
    {
        "saldoContrato": 1117456.83,
        "contratoBase": "149610",
        "contratos": [
            {
                "idContrato": "149611",
                "descripcion": "INVERSION SARA",
                "saldo": null,
                "indImagen": 1,
                "tipoServicio": "Asesoría",
                "conMeta": true,
                "saldoMeta": 3130040,
                "porcentajeMeta": 170.38,
                "saldoAlDia": 5333088.34,
                "saldoRestante": 0
            },
            {
                "idContrato": "149610",
                "descripcion": "Disponibilidad",
                "saldo": null,
                "indImagen": 1,
                "tipoServicio": "Asesoría",
                "conMeta": false,
                "saldoMeta": 0,
                "porcentajeMeta": 0,
                "saldoAlDia": 0,
                "saldoRestante": 0
            }
        ]
    }
];