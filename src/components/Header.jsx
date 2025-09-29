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
      </div>
    </header>
  );
}
