import React, {useState} from 'react';

const menuItems = ['Home', 'Profile', 'Order History', 'Sign out'];

/*export default function NavBar() {
    /!*const {
        status,
        availableConnectTypes,
        availableInstallTypes,
        connect,
        install,
        disconnect,
    } = useWallet()

    const [menuOpen, setMenuOpen] = useState(false);

    const handleBtnClick = () => {
        setMenuOpen(!menuOpen)
    };


    return (
        <Container>

            <UlStyled>
                <LiStyled><Link to="/create-new-nft">Create</Link></LiStyled>
                <LiStyled><a href="#">Explore</a></LiStyled>
                <LiStyled><a href="#">Charts</a></LiStyled>
                <LiStyled><a href="#">Resources</a></LiStyled>
                <ButtonStyled onClick={handleBtnClick}>
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.728 8.62207C11.8303 7.79187 12.5444 6.47278 12.5444 4.98981C12.5444 2.48401 10.5057 0.445312
                        7.9997 0.445312C5.4939 0.445312 3.4552 2.48401 3.4552 4.98981C3.4552 6.47278 4.16913 7.79187 5.27143
                        8.62207C2.32013 9.72986 0.213867 12.5804 0.213867 15.9141H1.62012C1.62012 12.3962 4.48206 9.53448 7.99988
                         9.53448C11.5175 9.53448 14.3795 12.3962 14.3795 15.9141H15.7857C15.7855 12.5804 13.6795 9.72986 10.728
                         8.62207ZM4.86145 4.98981C4.86145 3.25928 6.26917 1.85156 7.9997 1.85156C9.73023 1.85156 11.1379 3.25928
                          11.1379 4.98981C11.1379 6.72034 9.73023 8.12823 7.9997 8.12823C6.26917 8.12823 4.86145 6.72034 4.86145
                          4.98981Z" fill="white"/>
                    </svg>
                </ButtonStyled>
                <Transition unique reset items={menuOpen} from={{
                        opacity: 0,
                        height: 0,
                        transform: 'translateY(-10%)',
                    }} enter={{
                        opacity: 1,
                        height: 'auto',
                        transform: 'translate(0%)',
                    }}
                            leave={{opacity: 0}}>
                    {item =>
                        item &&
                        (props => (
                            <MenuDropDown style={props} className="menu">
                                {status === WalletStatus.WALLET_NOT_CONNECTED && (
                                    <>
                                        {availableInstallTypes.map((connectType) => (
                                            <MenuItem className="menuItem">
                                                <ButtonDropDown
                                                    key={`install-${connectType}`}
                                                    onClick={() => install(connectType)}>
                                                    Install Terra Wallet
                                                </ButtonDropDown>
                                            </MenuItem>
                                        ))}
                                        {availableConnectTypes.map((connectType) => (
                                            <MenuItem className="menuItem">
                                                <ButtonDropDown key={`connect-${connectType}`}
                                                                onClick={() => connect(connectType)}>
                                                    Connect {connectType}
                                                </ButtonDropDown>
                                            </MenuItem>
                                        ))}
                                    </>)}
                                {status === WalletStatus.WALLET_CONNECTED && (
                                    <MenuItem className="menuItem">
                                        <ButtonDropDown color="white" background="#A7A7FF"
                                                        secondBackground="#bcbcff"
                                                        onClick={() => disconnect()}>
                                            Disconnect
                                        </ButtonDropDown>
                                    </MenuItem>
                                )}
                            </MenuDropDown>
                        ))
                    }
                </Transition>
                <ButtonStyled>
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.6923 1.38452H2.30769C1.03522 1.38452 0 2.41974 0 3.69221V12.3076C0 13.5801 1.03522 14.6153 2.30769 14.6153H13.6923C14.9648 14.6153 16 13.5801 16 12.3076V3.69221C16 2.41974 14.9648 1.38452 13.6923 1.38452ZM15.0769 9.38453H11.6923C10.9288 9.38453 10.3077 8.7634 10.3077 7.9999C10.3077 7.2364 10.9288 6.61528 11.6923 6.61528H15.0769V9.38453ZM15.0769 5.69221H11.6923C10.4198 5.69221 9.38463 6.72743 9.38463 7.9999C9.38463 9.27237 10.4198 10.3076 11.6923 10.3076H15.0769V12.3076C15.0769 13.0711 14.4558 13.6922 13.6923 13.6922H2.30769C1.54422 13.6922 0.923063 13.0711 0.923063 12.3076V3.69221C0.923063 2.92874 1.54419 2.30758 2.30769 2.30758H13.6923C14.4558 2.30758 15.0769 2.92871 15.0769 3.69221V5.69221Z"
                            fill="white"/>
                        <path
                            d="M12.3074 7.53857H11.692C11.4371 7.53857 11.2305 7.74523 11.2305 8.00011C11.2305 8.25501 11.4371 8.46164 11.692 8.46164H12.3074C12.5623 8.46164 12.7689 8.25498 12.7689 8.00011C12.7689 7.7452 12.5623 7.53857 12.3074 7.53857Z"
                            fill="white"/>
                    </svg>
                </ButtonStyled>
            </UlStyled>
        </Container>
    )
*!/
    <NavItem icon={<PlusIcon/>}/>
    <NavItem icon={<BellIcon/>}/>
    <NavItem icon={<MessengerIcon/>}/>

    <NavItem icon={<CaretIcon/>}>
        <DropdownMenu></DropdownMenu>
    </NavItem>
}*/

export default function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    );
}
