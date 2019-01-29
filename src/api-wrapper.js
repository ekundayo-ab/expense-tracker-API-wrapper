const axios = require('axios');

const init = (token, url) => {
  const api = axios.create({
    baseURL: `${url}/api`,
    responseType: 'json',
    headers: { 'Authorization': token },
    withCredentials: true
  });

  const getAllExpenses = async () => {
    const response = await api.get('/expenses');
    return response.data;
  }

  const addExpense = async () => {
    const response = await api.post('/expenses', expense);
    return response.data;
  }

  const getExpense = async (id) => {
    const response = await api.get(`/expenses/${id}`);
    return response.data;
  }

  const updateExpense = async (expense) => {
    const response = await api.put(`/expenses/${id}`, expense);
    return response.data;
  }

  const deleteExpense = async (id) => {
    const response = await api.delete(`/expenses/${id}`);
    return response.data;
  }

  return {
    getAllExpenses,
    getExpense,
    updateExpense,
    deleteExpense
  }
};

const ApiWrapper = { init }
module.exports = ApiWrapper;
