import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import CreateClient from "../pages/CreateClient";

import Home from "../pages/Home";

function Navegation() {
  return (
    <div className="m-10 flex items-center justify-center">
      <span className="relative z-0 inline-flex shadow-sm rounded-md">
        <Link to={"/"}>
          <button
            type="button"
            className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
          >
            manage Clients
          </button>
        </Link>

        <Link to={"/create"}>
          <button
            type="button"
            className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
          >
            Create client
          </button>
        </Link>
      </span>
    </div>
  )
}

const MainRoutes = ()=>{
  return(
    <BrowserRouter>
      <Navegation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateClient />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes