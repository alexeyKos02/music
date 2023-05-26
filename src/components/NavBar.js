import React from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import "./NavBar.css"

const NavBar = () => {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row style={{marginLeft:"-5px"}}>
                <Col sm={3} className="navBar" style={{marginLeft:"5px"}}>
                    <Nav variant="pills" className="flex-column">
                        <div className="d">
                            <Nav.Item>
                                <Nav.Link eventKey="search">
                                    <div className="outline">
                                        <svg className="inline-svg-icon" width="25px" height="25px">
                                            <use xlinkHref="#search"></use>
                                        </svg>
                                    </div>
                                    <span>Поиск</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="home">
                                    <div>
                                        <svg width="25px" height="25px">
                                            <use className="newImg" xlinkHref="#new"></use>
                                        </svg>
                                    </div>
                                    <span>Главное</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="save">
                                    <div>
                                        <svg width="25px" height="25px">
                                            <use xlinkHref="#save"></use>
                                        </svg>
                                    </div>
                                    <span>Коллекция</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="settings">
                                    <div>
                                        <svg className="inline-svg-icon" width="25px" height="25px">
                                            <use xlinkHref="#settings"></use>
                                        </svg>
                                    </div>
                                    <span>Настройки</span>
                                </Nav.Link>
                            </Nav.Item>
                        </div>
                    </Nav>
                </Col>
                <Col sm={9} style={{marginLeft: "60px"}}>
                    <Tab.Content>
                        <Tab.Pane eventKey="search">
                        </Tab.Pane>
                        <Tab.Pane eventKey="home">kjh</Tab.Pane>
                        <Tab.Pane eventKey="save">Second tab content</Tab.Pane>
                        <Tab.Pane eventKey="settings">Second tab content</Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
};

export default NavBar;