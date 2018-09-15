import React from 'react';
import { Link } from 'gatsby'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import styles from '@/assets/style/module/Header.module.css'

const communityLinks = {
  doscom: [
    {
      type: 'website',
      url: 'https://doscom.org'
    }, {
      type: 'github',
      url: 'https://github.com/doscom'
    }, {
      type: 'instagram',
      url: 'https://instagr.am/doscomedia'
    }
  ],
  tealinuxOS: [
    {
      type: 'website',
      url: 'https://tealinuxos.org',
    }, {
      type: 'github',
      url: 'https://github.com/tealinuxos'
    }
  ]
}

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="light" light expand="md">
        <Container>
          <Link to="/" className="navbar-brand">
            Pinguin Dinus
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <a href="http://pinguin.dinus.ac.id/iso" className="nav-link">
                  All ISO
                </a>
              </NavItem>

              {
                Object.keys(communityLinks).map((key) => (
                  <UncontrolledDropdown key={key} className={styles.navLink} nav inNavbar>
                    <DropdownToggle nav caret>
                      { key }
                    </DropdownToggle>
                    <DropdownMenu right>
                      {
                        communityLinks[key].map((link, index) => (
                          <DropdownItem key={index} onClick={() => window.open(link.url, '_blank') }>
                            {link.type}
                          </DropdownItem>
                        ))
                      }
                    </DropdownMenu>
                  </UncontrolledDropdown>
                ))
              }

            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
