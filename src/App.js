import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col>
            <Quotes />
          </Col>
          <Col>
            <Calculator />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
