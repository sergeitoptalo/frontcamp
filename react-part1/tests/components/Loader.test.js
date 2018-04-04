import React from 'react';
import renderer from 'react-test-renderer';

import Loader from '../../src/client/components/Loader';

it('Loader should be rendered correctly', () => {
    const component = renderer.create(
        <Loader />
    )
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})
