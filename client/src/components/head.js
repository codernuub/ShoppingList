import React from 'react';
import {
    NavbarBrand,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';


class Head extends React.Component {
    state = {
        isOpen: false
    }

    toggle = () => {

        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md" fixed={'top'}> {/*md - medium */}

                    <NavbarToggler onClick={this.toggle} />

                    <NavbarBrand style={{ color: "#ffa803" }}>Shopping List</NavbarBrand>

                    <Collapse isOpen={this.state.isOpen}  navbar>
                        <Nav className="ml-auto"  navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Setting</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

}

export default Head;
