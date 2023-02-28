import { Link } from "react-router-dom";

export default function NotFound() {
  document.title = `Kasa - 404`
  return (
    <>
      <div className="notfound wrapper">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <Link to='/'>Retourner sur la page d’accueil</Link>
      </div>
    </>
  )
}
