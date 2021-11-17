import React from "react";
import { render } from '@testing-library/react';
import { Footer } from '../components/Footer/';

describe('make snapshot', () => {
    test('renders', () => {
        const { container } = render(<Footer />);
        expect(container).toMatchSnapshot();
    });
});
