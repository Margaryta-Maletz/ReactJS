import React from "react";
import { render } from '@testing-library/react';
import { Footer } from '../components/Footer/';

describe('make snapshot', () => {
    test('renders', () => {
        const { asFragment } = render(<Footer />);
        expect(asFragment).toMatchSnapshot();
    });
});
