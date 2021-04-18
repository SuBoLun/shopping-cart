import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

let mock_adapter = new MockAdapter(axios)

mock_adapter.onGet("/p").reply(200, {
    productList: [
        {  name: "apple", price: 10},
        {  name: "orange", price: 20}
    ]
})