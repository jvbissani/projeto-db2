const {ServerApiVersion} = require("mongodb");
const MongoClient = require( 'mongodb' ).MongoClient;

const uri = "mongodb+srv://murilojrp:murilo@cluster0.73wlmwu.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connectToMongoDB() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        return client; // Retorna o cliente para ser usado em outras partes do código
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
        throw error;
    }
}

async function closeMongoDBConnection() {
    try {
        await client.close();
        console.log("Conexão com o MongoDB fechada.");
    } catch (error) {
        console.error('Erro ao fechar a conexão com o MongoDB:', error);
    }
}

module.exports = {
    connectToMongoDB,
    closeMongoDBConnection
};


