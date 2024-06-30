import axios from '@/configs/axios';

class UserCatalogueService {
  async getAll(payload, ...filers) {
    try {
      const response = await axios.get('/user/catalogue', {
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
  async create(payload) {
    try {
      const response = await axios.post('/user/catalogue', {
        name: payload.name,
        description: payload.description
      });

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

export default new UserCatalogueService();
