export function Audifono() {
  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img
          className="img-fluid"
          src="/public/img/audifono01.webp"
          alt="imagen audifono"
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-text-uppercase">Pro X2</h3>
        <p>Aca es un texto</p>
        <p className="fw-black text-primary  fs-3">$199</p>
        <button type="button" className="btn btn-dark w-100">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
