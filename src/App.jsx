import { Route, Routes } from 'react-router-dom'
import { Stake, Home } from './pages'
import { StakeContainer } from './components'
function App() {
  const path ={
    home:"/",
    stake:"/stake",
    reward:"/reward"

  }

  return (
    <>
        <div>
          <Routes>
            <Route path={path.stake} element={<StakeContainer />}>
            <Route index element={<Stake/>} />
            </Route>
            <Route path={path.home} element={<Home/>} />
          </Routes>
        </div>
    </>
  )
}

export default App
