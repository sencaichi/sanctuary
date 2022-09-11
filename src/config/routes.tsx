import About from "../components/about";
import IRoute from "../interface/route";

const routes: IRoute[] = [
  {
    path: "/about",
    name: "About",
    component: About,
    exact: true,
  }
]

export default routes;
