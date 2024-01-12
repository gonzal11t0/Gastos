import React, { useEffect, useState } from "react";

const ListaCompras = () => {
    const storeCompras = JSON.parse(localStorage.getItem("compras")) || [];
    const [compras, setCompras] = useState(storeCompras);
    const [nuevoArticulo, setNuevoArticulo] = useState({
        nombre: "",
        precio: "",
        cantidad: "",
        fechaCompra: "",
        total: "",
    });

    useEffect(() => {
        localStorage.setItem("compras", JSON.stringify(compras));
    }, [compras]);

    const agregarCarrito = () => {
        if (
            nuevoArticulo.nombre.trim() !== "" &&
            nuevoArticulo.cantidad.trim() !== "" &&
            nuevoArticulo.precio.trim() !== "" &&
            nuevoArticulo.fechaCompra.trim() !== ""
        ) {
            const total = parseFloat(nuevoArticulo.precio) * parseInt(nuevoArticulo.cantidad);
        const nuevaCompra = { ...nuevoArticulo, total, comprado: false };
        

        const nuevasCompras = [...compras, nuevaCompra].sort((a, b) => {
            const fechaA = new Date(a.fechaCompra);
            const fechaB = new Date(b.fechaCompra);
            return  fechaB - fechaA ;
        });
            setCompras(nuevasCompras);
            setNuevoArticulo({
                nombre: "",
                precio: "",
                cantidad: "",
                fechaCompra: "",
            });
        }
    };

    const eliminarArticulo = (index) => {
        const nuevaCompra = [...compras];
        nuevaCompra.splice(index, 1);
        setCompras(nuevaCompra);
    };

    const validarArticulo = (articulo) => {
        if (articulo.nombre.length <= 3 || articulo.nombre.trim() === "") {
            return (
                <div>
                    <span className="error">Nombre invalido</span>
                </div>
            );
        } else {
            return null;
        }
    }
    
    const validarPrecio = (articulo) =>{
        const precioNumerico=parseFloat(articulo.precio);
        if(isNaN(precioNumerico) || precioNumerico < 1 || articulo.precio.trim() === ""){
            return(
                <div>
                    <span className="error">Precio invalido</span>
                </div>
            );
        }else{
            return null;
        }
    }

    const validarCantidad = (articulo) =>{
        const cantidadNumerica=parseFloat(articulo.cantidad);
        if(isNaN(cantidadNumerica) || cantidadNumerica < 1 || articulo.cantidad.trim() === ""){
            return(
                <div>
                    <span className="error">Cantidad erronea</span>
                </div>
            );
        }else{
            return null;
        }
    }

    const validarFecha= (articulo) =>{
        const fechaActual=new Date();
        const fechaArticulo=new Date(articulo.fechaCompra);
        if(fechaArticulo>fechaActual){
            return(
                <div>
                    <span className="error">Fecha incorrecta</span>
                </div>
            );
        }else{
            return null;
        }
    };

    const validaciones= (articulo)=>{
        const errorProducto=validarArticulo(articulo);
        const errorPrecio=validarPrecio(articulo);
        const errorCantidad=validarCantidad(articulo);
        const errorFecha=validarFecha(articulo);

        return {
            errorProducto,
            errorPrecio,
            errorCantidad,
            errorFecha,
        };
    };
    
    const { errorProducto, errorPrecio, errorCantidad, errorFecha } = validaciones(nuevoArticulo);

    return (
        <div className="container">
            <div className="titulo-container">
                <h1>Gastos diarios</h1>
            </div>
            <div className="agregar-articulos">
                <input
                    placeholder="Ingrese producto"
                    type="text"
                    value={nuevoArticulo.nombre}
                    onChange={(e) =>
                        setNuevoArticulo({
                            ...nuevoArticulo,
                            nombre: e.target.value,
                        })
                    }
                />
                {errorProducto}
                <input
                    placeholder="Ingrese precio"
                    type="number"
                    value={nuevoArticulo.precio}
                    onChange={(e) =>
                        setNuevoArticulo({
                            ...nuevoArticulo,
                            precio: e.target.value,
                        })
                    }
                />
                {errorPrecio}
                <input
                    placeholder="Ingrese cantidad"
                    type="number"
                    value={nuevoArticulo.cantidad}
                    onChange={(e) =>
                        setNuevoArticulo({
                            ...nuevoArticulo,
                            cantidad: e.target.value,
                        })
                    }
                />
                {errorCantidad}
                <span>Fecha compra</span>
                <input
                    type="date"
                    value={nuevoArticulo.fechaCompra}
                    onChange={(e) =>
                        setNuevoArticulo({
                            ...nuevoArticulo,
                            fechaCompra: e.target.value,
                        })
                    }
                />
                {errorFecha}
                <button onClick={agregarCarrito}>Agregar articulo</button>
            </div>
            <div className="container-compras">
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Fecha compra</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {compras.map((compra, index) => (
                            <tr key={index} className={compra.comprado ? "Comprado" : ""}>
                                <td>{compra.nombre}</td>
                                <td>{compra.fechaCompra}</td>
                                <td>${compra.precio}</td>
                                <td>{compra.cantidad} U</td>
                                <td>${compra.total}</td>
                                <td>
                                    <button onClick={() => eliminarArticulo(index)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListaCompras;
