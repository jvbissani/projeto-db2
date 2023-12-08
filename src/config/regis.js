import redis from 'redis';

const REDIS_PORT = 6379;
const client = redis.createClient(REDIS_PORT);

client.on('connect', () => {
    console.log('Conectado ao Redis!');
});

client.on('error', (err) => {
    console.error('Erro ao conectar ao Redis:', err);
});

export default client;
