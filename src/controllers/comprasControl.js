import comprasModule from '../models/compras';

const comprasController = {

  create: async (req, res) => {
    try {
      const novoItem = await comprasModule.create(req.body);
      return res.status(201).json(novoItem);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar o item.' });
    }
  },

  destroy: async (req, res) => {
    try {
      await comprasModule.destroy(req.body.id);
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao destruir o item.' });
    }
  },

  get: async (req, res) => {
    try {
      const item = await comprasModule.findById(req.params.id);
      if (!item) {
        return res.status(404).json({ error: 'Item não encontrado.' });
      }
      return res.status(200).json(item);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao obter o item.' });
    }
  },

  getAll: async (req, res) => {
    try {
      const todosItens = await comprasModule.findAll();
      return res.status(200).json(todosItens);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao obter todos os itens.' });
    }
  },
};

export default comprasController;
