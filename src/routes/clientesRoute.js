import controller from '../controllers/clientesControl'

export default (app) => {
    app.post('/clientes/create', controller.create);
    app.post('/clientes/destroy', controller.destroy);
    app.get('/clientes/:id', controller.get);
    app.get('/clientes', controller.getAll);
    
}