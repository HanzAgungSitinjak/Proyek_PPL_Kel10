const axios = require('axios');
const { expect } = require('chai');

describe('Testing API Mengambil Data Ruangan', () => {
  it('should fetch room data successfully', async () => {
    try {
      const apiUrl = 'http://localhost:8070/api/ruangan';

      const response = await axios.get(apiUrl);

      expect(response.status).to.equal(200);
      expect(response.data).to.be.an('object');
      expect(response.data).to.have.property('status', 'success');
      expect(response.data).to.have.property('data');

      const responseData = response.data.data;

      expect(responseData).to.be.an('object');
      expect(responseData).to.have.property('current_page', 1);
      expect(responseData).to.have.property('total');

      const roomData = responseData.data;

      expect(roomData).to.be.an('array');
      expect(roomData.length).to.be.greaterThan(0);

      const firstRoom = roomData[0];

      expect(firstRoom).to.have.property('id');
      expect(firstRoom).to.have.property('cover');
      expect(firstRoom).to.have.property('meja');
      expect(firstRoom).to.have.property('description');
      expect(firstRoom).to.have.property('status');
      

    } catch (error) {
      throw new Error(error.response ? error.response.data : error.message);
    }
  });
});
