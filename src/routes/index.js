import ClientesRoute from "../routes/clientesRoute";
import ComprasRoute from "../routes/comprasRoute";

function Routes(app) {
    ClientesRoute(app)
    ComprasRoute(app)
}

export default Routes;