import About from "../components/About/About";
import Login from "../pages/auth/login/Login";
import Signup from "../pages/auth/signup/Signup";

const RouteData = {
    login: {
        path: "/",
        component: Login,
        menuText:"Login",
        isPrivate: false
    },
    signup: {
        path: "/signup",
        component: Signup,
        menuText:"Sign Up",
        isPrivate: false
    },
    about: {
        path: "/about",
        component: About,
        menuText:"About Us",
        isPrivate: false
    },
}

export default RouteData;