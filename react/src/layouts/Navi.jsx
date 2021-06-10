import React, { useState } from 'react'
import { Button, Menu, Container } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedOut from './SignedOut'
import Signedin from './Signedin'

export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(true);

    function handleSignOut() {
        setIsAuthenticated(false);
    }
    const handleSignIn = () => {
        setIsAuthenticated(true);
    }

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
                        <CartSummary />
                        {isAuthenticated 
                        ? <Signedin signOut={handleSignOut}/> 
                        : <SignedOut signIn={handleSignIn}/>}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}