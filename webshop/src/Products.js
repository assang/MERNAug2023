import { useEffect, useState } from 'react';
import { Container, Row, Col, Card,Button } from 'react-bootstrap'
import axios from 'axios'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/products')
        .then((res) => {
            setProducts(res.data)
        })
    }, [])
    return (
        <Row>
            <Col>
            {
                products.map((product) => {
                    return <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{product.pname}</Card.Title>
                        <Card.Text>
                            {product.description}
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">{product.price}</Button>
                    </Card.Body>
                </Card>
                })
            }
                
            </Col>
        </Row>
    )
}

export default Products;