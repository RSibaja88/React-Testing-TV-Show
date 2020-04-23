import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import App from './App';


jest.mock('./api/fetchShow');
console.log("mockFetchShow: ", mockFetchShow);


test("App fetches data properly", async () => {
    const mockData = {
        id: '909346',
        image: { medium: "http://static.tvmaze.com/uploads/images/medium_landscape/132/332052.jpg" },
        name: 'Chapter Six: The Spy',
        number: 6,
        runtime: 60,
        season: 2,
        summary: '<p>Plot Summary</p>',
        url: "http://www.tvmaze.com/episodes/909346/stranger-things-2x06-chapter-six-the-spy"
    }
    mockFetchShow.mockResolvedValue(mockData);
    const { queryAllByText } = render(<App />);
    await waitFor(() => expect(queryAllByText(/summary/i)).toHaveLength(1));
    await waitFor(() => expect(queryAllByText(/image/i)).toHaveLength(0));
    })


