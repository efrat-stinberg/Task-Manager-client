import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5090';

export default {
  getTasks: async () => {
    console.log('getTasks');
    const result = await axios.get('/items'); 
    return result.data;
  },

  addTask: async (name) => {
    console.log('addTask', name);
    const result = await axios.post('/items', { name }); 
    return result.data;
  },

  setCompleted: async (id, isComplete) => {
    console.log('setCompleted', { id, isComplete });
    const result = await axios.put(`/items/${id}`, { isComplete });
    return result.data;
  },

  deleteTask: async (id) => {
    console.log('deleteTask');
    const result = await axios.delete(`/items/${id}`); 
    return result.data;
  }
};
