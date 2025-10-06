export default function Header() {
  return (
    <header className="bg-primary text-white text-text-center p-3 header">
      <div className="container-xl row justify-content-center justify-content-between">
        <div className="col-8  col-md-3">
          <a href="index.html">
            <img
              className="img-fluid"
              src="/public/img/Logitech-G-cyan-01.png"
              alt="imagen de Logo"
            />
          </a>
        </div>
        <nav className="col-md-6 mt-5 d-flex align-items-center justify-content-center">
          <div className="carrito">
            <img className="img-fluid" src="/public/img/carrito.png" alt="imagen de carrito" />
            <div id="carrito" className="bg-white p-3">
              {
                /* Aqui se renderizan los productos que se agregan al carrito */
                isEmpty ? (
                  <p className="text-center">El carrito esta vacio</p>
                ) : (
                  <>
                    <table>
                      <thead>
                        <tr>
                          <th>imagen</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>imagen</th>
                        </tr>
                      </thead>
                    </table>
                    <tbody>
                      {CaretPosition.map(audifono => (
                        <tr key={audifono.id}>
                          <td>
                            <img className="img-fluid" src={`/public/img/${audifono.imagen}.webp`} alt={audifono.nombre} />
                          </td>
                          <td>{audifono.nombre}</td>
                          <td className="fw-bold">{audifono.precio}</td>
                          <td className="flex align-items-center gap-4">
                            <button type="button" className="btn btn-dark">
                              onClick={() => increaseQuantity(audifono.id)}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </>
                )
              }
            </div>
          </div>
        </nav>
      </div >
    </header >
  );
}
