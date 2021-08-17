import React, { Component } from 'react';
import { BiggerButton, Button } from '../Components/Button';
import { StyledLink } from '../Components/Link';

export default class DemoJSS extends Component {
    render() {
        return (
            <div>
                <Button primary>Add to cart</Button>
                {/* <BiggerButton>Click me!</BiggerButton> */}
                <StyledLink>Click</StyledLink>
            </div>
        )
    }
}
