import axios from 'axios';
import assert from 'assert'

describe ('API test', () => {
    beforeEach(function (){
        this.timeout(5000);
    });
    it('AP test Get Daftar meja', async () => {
        try{
            const response = await axios.get('http://localhost:8070/api/ruangan');
            assert.strictEqual(response.status, 200);
            console.log('Response Data:', response.data);
        }catch(error){
            throw error;
        }
    });
})