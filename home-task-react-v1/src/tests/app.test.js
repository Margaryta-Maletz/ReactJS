import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../components/App/App';

describe('App', () => {
   it('render app by text', () => {
       const { asFragment } = render(<App />);
       screen.debug();
       expect(asFragment(<App />)).toMatchSnapshot();
   });
});
