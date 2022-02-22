import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './views/Home'
import Explanation from './views/Explanation'
import Covid from './views/Covid'
import About from './views/About'

const AppRoutes = () => {
    return(
        <BrowserRouter>   
        <Routes>   
        <Route  path= "/"  element = {<Home />} />
        <Route  path= "/Explanation"  element = {<Explanation />} />
        <Route  path= "/Covid"  element = {<Covid />} />        
        <Route  path= "/About"  element = {<About />} />
        </Routes>  
        </BrowserRouter>
    )
}

export	default AppRoutes
