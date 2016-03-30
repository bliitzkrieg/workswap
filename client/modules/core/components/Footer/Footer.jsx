import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Footer extends React.Component {

    getYear() {
        return new Date().getFullYear();
    }

    render() {
        return (
            <footer>
                <div className="container">
                    <Grid>
                        <Row>
                            <hr />
                            <Col lg={ 6 } md={ 6 } sm={ 6 } xs={ 12 }>
                                <ul className="list-inline footer-links">
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li className="footer-menu-divider">&sdot;</li>
                                    <li>
                                        <a href="/faq">FAQ</a>
                                    </li>
                                    <li className="footer-menu-divider">&sdot;</li>
                                    <li>
                                        <a href="/discover">Discover</a>
                                    </li>
                                    <li className="footer-menu-divider">&sdot;</li>
                                    <li>
                                        <a href="/contact">Contact</a>
                                    </li>
                                </ul>
                                <p className="copyright text-muted small">Copyright &copy; Workswap { this.getYear() }. All Rights Reserved</p>
                            </Col>
                            <Col lg={ 6 } md={ 6 } sm={ 6 } xs={ 12 }>
                                <img src="/images/workswap_green.png" alt="workswap" className="pull-right" height="50" />
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </footer>
        );
    }
}


export default Footer;