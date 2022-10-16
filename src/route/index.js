import { Route, Routes, } from "react-router-dom"
import NotFound from "../pages/NotFound"
import City from "../pages/City"
import CityDetails from "../pages/CityDetails"

const Views = () => {
  return (
    <Routes>
        <Route index element={<City/>} />
        <Route path="citydetails" element={<CityDetails/>} />
        <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default Views