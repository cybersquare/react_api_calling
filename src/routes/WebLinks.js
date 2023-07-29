import { Link } from "react-router-dom"
import RouteData from "./RoutesData";

const WebRoutes = ()=>{
    return(
        <ul class='ul-nb'>
        {
            Object.keys(RouteData).map((routeName, index)=>{
                let route = RouteData[routeName];
                return(
                    <li>
                        <Link key={`web-link${index}`} to={route.path} className="link">
                            {route.menuText}
                        </Link>
                    </li>
                    );
            })
        }
        </ul>
    );
}

export default WebRoutes;