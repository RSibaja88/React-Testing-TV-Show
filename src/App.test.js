import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import App from './App';


jest.mock('./api/fetchShow');
console.log("mockFetchShow: ", mockFetchShow);


test("App fetches data and renders properly", async () => {
    const mockData = {
        id: '123',
        image: { medium: 'medium_image'},
        name: 'name',
        season: 3,
        number: 2,
        summary: '<p>Summary</p>',
        runtime: 20
    }
    mockFetchShow.mockResolvedValue(mockData);
    const { queryAllByText } = render(<App />);
    await waitFor(() => expect(queryAllByText(/summary/i)).toHaveLength(1));
    await waitFor(() => expect(queryAllByText(/image/i)).toHaveLength(0));
    })


