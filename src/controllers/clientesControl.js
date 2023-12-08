import Clientes from '../models/clientes';

const clientesController = {

  create: async (req, res) => {
    try {
      const novoItem = await Clientes.create(req.body);
      return res.status(201).json(novoItem);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar o item.' });
    }
  },

  destroy: async (req, res) => {
    try {
      await Clientes.destroy(req.body.id);
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao destruir o item.' });
    }
  },

  get: async (req, res) => {
    const { clienteId } = req.params; // Supondo que você esteja passando o ID do cliente como parte da URL

    try {
      const cliente = await Clientes.findByPk(clienteId); // Supondo que seu modelo de cliente tenha um campo chamado 'id'

      if (!cliente) {
        return res.status(404).json({ error: 'Cliente não encontrado.' });
      }

      return res.status(200).json(cliente);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao obter o cliente.' });
    }
  },

  getAll: async (req, res) => {
    try {
      const todosItens = await Clientes.findAll();
      return res.status(200).json(todosItens);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Erro ao obter todos os itens.' });
    }
  },
};

export default clientesController;
