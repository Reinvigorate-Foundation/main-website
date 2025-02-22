import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./common/Header"
import Footer from "./common/Footer"
import Home from "./pages/home"
import Volunteer from "./pages/volunteer"
import Donate from "./pages/donate"

import InitiativeRoutes from "./routes/InitiativeRoutes"
import InitiativeContextProvider from "/src/contexts/InitiativeContext"
import UtilContextProvider from "/src/contexts/UtilContext"

function App() {
  return (
    <>
	<BrowserRouter>
	    <InitiativeContextProvider>
		<UtilContextProvider>
		    <Header/>
		    <Routes>
				<Route path="/" element={<Home/>}></Route>
				<Route path="/initiative/*" element={<InitiativeRoutes/>} />
				<Route path="/volunteer" element={<Volunteer/>} />
				<Route path="/donate" element={<Donate/>} />
				<Route path="*" element={ <h1>404 Not Found</h1> }/>
		    </Routes>
		    <Footer/>
		</UtilContextProvider>
	    </InitiativeContextProvider>
	</BrowserRouter>
    </>
  )
}

export default App