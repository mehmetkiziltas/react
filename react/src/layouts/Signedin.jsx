import React from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'

export default function Signedin({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src=""/>
                <Dropdown pointing="top left" text="Mehmet">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
