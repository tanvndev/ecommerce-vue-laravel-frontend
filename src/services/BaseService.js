import axios from '@/configs/axios';

class BaseService {
  async changeStatus(payload) {
    try {
      const response = await axios.put('/dashboard/changeStatus', payload);

      return {
        success: true,
        messages: response.messages
      };
    } catch (error) {
      let messages = error.response ? error.response.messages : 'Unexpected error occurred';
      return {
        success: false,
        messages: messages
      };
    }
  }
  async changeStatusAll(payload) {
    try {
      const response = await axios.put('/dashboard/changeStatusMultiple', payload);

      return {
        success: true,
        messages: response.messages
      };
    } catch (error) {
      let messages = error.response ? error.response.messages : 'Unexpected error occurred';
      return {
        success: false,
        messages: messages
      };
    }
  }

  async getOne(endpoint, id) {
    try {
      const response = await axios.get(`${endpoint}/${id}`);

      return {
        success: true,
        messages: response.messages,
        data: response.data
      };
    } catch (error) {
      let messages = error.response ? error.response.messages : 'Unexpected error occurred';
      return {
        success: false,
        messages: messages
      };
    }
  }

  async getAll(endpoint, payload, ...filers) {
    try {
      const response = await axios.get(`${endpoint}`, {
        params: { ...payload, ...filers }
      });

      return {
        success: true,
        messages: response.messages,
        data: response.data
      };
    } catch (error) {
      let messages = error.response ? error.response.messages : 'Unexpected error occurred';
      return {
        success: false,
        messages: messages
      };
    }
  }
  async create(endpoint, payload) {
    try {
      const response = await axios.post(`${endpoint}`, payload);

      return {
        success: true,
        messages: response.messages
      };
    } catch (error) {
      let messages = error.response ? error.response.data.messages : 'Unexpected error occurred';
      return {
        success: false,
        messages: messages
      };
    }
  }

  async update(endpoint, id, payload) {
    try {
      const response = await axios.put(`${endpoint}/` + id, payload);

      return {
        success: true,
        messages: response.messages
      };
    } catch (error) {
      let messages = error.response ? error.response.data.messages : 'Unexpected error occurred';
      return {
        success: false,
        messages: messages
      };
    }
  }
  async deleteOne(endpoint, id) {
    try {
      const response = await axios.delete(`${endpoint}/` + id);

      return {
        success: true,
        messages: response.messages
      };
    } catch (error) {
      let messages = error.response ? error.response.messages : 'Unexpected error occurred';
      return {
        success: false,
        messages: messages
      };
    }
  }

  async deleteMultiple(payload) {
    try {
      const response = await axios.delete('/dashboard/deleteMultiple', { data: payload });
      return {
        success: true,
        messages: response.messages
      };
    } catch (error) {
      let messages = error.response ? error.response.messages : 'Unexpected error occurred';
      return {
        success: false,
        messages: messages
      };
    }
  }
}

export default new BaseService();
