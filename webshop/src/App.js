import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'
import Products from './Products';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>1 of 1</Col>
      </Row>
      <Products />
  </Container>
  );
}

export default App;
