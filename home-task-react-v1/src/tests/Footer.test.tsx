import React from "react";
import { render } from '@testing-library/react';
import { Footer } from '../components/Footer/';

describe('make snapshot', () => {
    it('renders', () => {
        const { container } = render(<Footer />);
        expect(container).toMatchSnapshot();
    });
});
