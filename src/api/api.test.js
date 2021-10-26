import {testData} from '../testData';
import axios from 'axios';
import { api } from '.';


jest.mock('axios');

describe("Api call tests", () => {
    let todos;

    beforeAll(() => {
        todos = testData;
    })

    test('Should fetch todos(with Promise)', () => {
        const response = { data: todos }
        axios.get.mockResolvedValue(response);
        return api.fetchTodo().then(data => expect(data).toEqual(todos));
        //        return api.fetchTodo().then(data => expect(data).toEqual(todos))
    });
})