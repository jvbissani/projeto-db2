
import redis from 'redis';
const client = redis.createClient();

const recomendacaoController = {
    getRecomendacoes: async (req, res) => {
        try {
            // Lógica para recuperar dados da base relacional e orientada a documentos

            // Suponhamos que você tenha obtido dados como `recomendacoes` a partir da lógica acima

            // Armazenar no Redis
            client.set('recomendacoes', JSON.stringify(recomendacoes), (err, reply) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Erro ao armazenar dados no Redis.' });
                }
                return res.status(200).json(recomendacoes);
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao obter recomendações.' });
        }
    },
};

export default recomendacaoController;
