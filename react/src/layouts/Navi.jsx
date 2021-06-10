import React from 'react'
import { Button, Menu, Container } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedOut from './SignedOut'
import Signedin from './Signedin'

export default function Navi() {
    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />

                    <Menu.Menu position='right'>
                        <CartSummary></CartSummary>
                        <SignedOut></SignedOut>
                        <Signedin></Signedin>
                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}