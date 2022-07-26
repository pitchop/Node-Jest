const axios = require('axios')
const api = require('../api')

jest.mock('axios');

test('Should mock external api', async () => {
    const apiResp = {
        data: {
            "API": "AdoptAPet",
            "Description": "Resource to help get pets adopted",
            "Auth": "apiKey",
            "HTTPS": true,
            "Link": "https://www.adoptapet.com/public/apis/pet_list.html",
            "Category": "Animals"
        }
    }
    axios.get.mockResolvedValue(apiResp);
    // axios.get = jest.fn().mockResolvedValue(apiResp);
    // axios.get.mockImplementation(() => Promise.resolve(apiResp))
    const data = await api.getPubicAPIs()
    expect(data).toEqual(apiResp.data)
    // stub
    expect(axios.get).toHaveBeenCalledTimes(1);
    api.getUserProfileIntrenal = jest.fn().mockResolvedValue({})
});