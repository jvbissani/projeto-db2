import controller from '../controllers/recomendacaoControl';

export default (app) => {
    app.get('/recomendacoes', controller.getRecomendacoes);
};
