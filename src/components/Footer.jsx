// Componente Footer: asegura que el return esté dentro de la función.
// Si antes veías el error "Return statement is not allowed here" es porque había una llave de cierre '}' antes del return,
// quedando el return fuera de la función. Esta versión lo corrige y añade el año dinámico.

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>© {year} Mi Proyecto React</p>
        </footer>
    );
}


