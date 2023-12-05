import { Link, useRouteError } from "react-router-dom"
const Error = () => {
  const error = useRouteError();

  return <div>
    <h1>Error {error.status}</h1>
    <h3>{error.statusText}</h3>
    <Link to="/">Return to Home</Link>
    </div>
}
export default Error 