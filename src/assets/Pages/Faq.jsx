import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import Footer from '../Components/Footer';

const Faq = () => {
    return (
        <>
           <Navbar/> <div className="bg-light py-5">
                <Container>
                    <h2 className="mb-4 text-center">Frequently Asked Questions</h2>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What is Fashionista?</Accordion.Header>
                            <Accordion.Body>
                                Fashionista is a modern online fashion store offering a wide selection of apparel and accessories for men, women, and kids. We focus on quality, style, and customer satisfaction.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How can I track my order?</Accordion.Header>
                            <Accordion.Body>
                                Once your order is shipped, you will receive a confirmation email with a tracking number and link to follow the status of your shipment in real-time.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What payment methods are accepted?</Accordion.Header>
                            <Accordion.Body>
                                We accept all major credit and debit cards, PayPal, and select mobile wallet options. All payments are securely processed.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What is your return policy?</Accordion.Header>
                            <Accordion.Body>
                                We offer a 14-day return policy for unused and unworn items in original packaging. To start a return, contact our support team with your order number.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Do you offer international shipping?</Accordion.Header>
                            <Accordion.Body>
                                Yes, we ship to most countries worldwide. International shipping fees and delivery times vary by location and will be shown at checkout.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </div>

           <Footer/>
        </>
    );
};

export default Faq;