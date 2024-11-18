import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Carrega as variaveis de ambiente
dotenv.config()

// Acessando as variáveis de ambiente
const ip = process.env.REACT_APP_IP;
const collection = process.env.REACT_APP_COLLECTION

// Definindo o "app" com a função express()
const app = express();

// Permitindo requisições de qualquer origem (ajuste conforme necessário)
app.use(cors());

// Conectando ao MongoDB remoto com o nome correto da coleção
mongoose.connect(`mongodb://${ip}/sth_smart`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conectado ao MongoDB");
}).catch(err => {
    console.log("Erro ao conectar ao MongoDB: ", err);
});

// Definindo o modelo de dados
const Dados = mongoose.model("Dados", new mongoose.Schema({
    recvTime: Date,
    attrName: String,
    attrType: String,
    attrValue: Number
}), `${collection}`);  // Nome da coleção

// Rota para obter o valor mais recente de "efficiency"
app.get("/efficiency", async (req, res) => {
    try {
        // Buscando o documento mais recente com "attrName" igual a "efficiency"
        const dados = await Dados.findOne({ attrName: "efficiency" })
            .sort({ recvTime: -1 });  // Ordena por "recvTime" (do mais recente para o mais antigo)

        if (dados) {
            // Respondendo com o valor de "attrValue" do documento mais recente
            res.json({ attrValue: dados.attrValue });
        } else {
            res.status(404).json({ error: "Nenhum dado de 'efficiency' encontrado" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
