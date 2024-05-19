import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const projects = [
  {
    name: 'Attack on Wall',
    description: 'Attack on Wall is a 3d tower defense mobile game with isometic view and lpow poly graphics',
    image: 'Cup.png'
  },
  {
    name: 'Fruit Catcher',
    description: 'A 2d Friut Catcher Web Game',
    image: 'Cup.png'
  },
  {
    name: 'Echoes of the Forgotten',
    description: 'A 2.5d Puzzle Platformer Adventure Game for PC',
    image: 'Cup.png'
  },
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <Container>
      <h2>Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4}>
            <Card>
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Projects;
