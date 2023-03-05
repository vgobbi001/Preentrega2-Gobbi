


function calcularTotal(arr) {
    let resultado = 0;
    arr.forEach( producto => {
        resultado += producto.precio * producto.cantidad
        
    })
    return resultado;
}

const carritoCompra = []

const listaProductos = [{id:1, nombre:"Comida para gatos Royal canin 7.5kl", precio:12000, cantidad:0},
                        {id:2, nombre:"Piedras sanitarias de silica", precio:5500, cantidad:0},
                        {id:3, nombre:"Rascardor para gatos grande", precio:4000, cantidad:0},
                    ]

// una vez creado necesito recorrer la lista

let i = 0;

while (i < listaProductos.length) {
    console.log(listaProductos[i].id)
    console.log(listaProductos[i].nombre)
    console.log(listaProductos[i].precio)

    i++;
}

//ahora que el usuario me diga si quiere comprar algo


   

//si el producto existe lo agrgero al carrito de compras, el some dice si es verdadero y el find busca (push agrega)

do {

    let id = prompt("Ingrese el número del producto que desea comprar")


    if( !isNaN(id) ) 
    {
        console.log ("entramos al if")

        if(listaProductos.some( producto => producto.id == id)) {
            
            //estoy verificando que las cantidades ingresadas sean validas, despues le pregunto cuantas quiere.

            let cantidad = prompt("Cuantos desea llevar?")

             const producto = listaProductos.find (producto => producto.id == id)
             producto.cantidad = cantidad;
             carritoCompra.push( producto ) 

        } else {
            console.log("El número de producto ingresado no existe.")
        }

    }

    rta = prompt ("Desea seguir comprando? si/no")
    
} while (rta != "no")

//calcular total espera un arreglo para calcular total que es el arreglo de carrito de compra
console.log ("El total de su compra es de " + calcularTotal(carritoCompra))

