import controller from '../controllers/comprasControl'

export default (app) => {
    app.post('/comprasModule/create', controller.create);
    app.post('/comprasModule/destroy', controller.destroy);
    app.get('/comprasModule/:id', controller.get);
    app.get('/comprasModule', controller.getAll);
    
}