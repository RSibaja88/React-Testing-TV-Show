import React from 'react';
import {render} from '@testing-library/react';
import Episodes from './Episodes';

test("Episodes render without issue", () => {
    render(<Episodes episodes={[]}/>)
}) 