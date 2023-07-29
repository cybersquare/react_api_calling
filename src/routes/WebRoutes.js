import { Route, Routes } from "react-router-dom"
import RouteData from "./RoutesData";

const WebRoutes = ()=>{
    return(
        <Routes>
        {
            Object.keys(RouteData).map((routeName, index)=>{
                console.log(`Route name: ${routeName}`)
                console.log(`Route index: ${index}`)
                let route = RouteData[routeName];
                console.log("Route");
                console.log(route);
                return(<Route key={`web-route${index}`} path={route.path} element={<route.component/>}/>);
            })
        }
        </Routes>
    );
}

export default WebRoutes;