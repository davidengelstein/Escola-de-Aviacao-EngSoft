import React, { Component } from 'react';
import '../css/paginaDefault.css';
import { Link } from 'react-router-dom';
import Naveg from '../components/Naveg';
import { Card, Button } from 'react-bootstrap';

class paginaFunc extends Component {

  render() {
    return (
      <div>
        <Naveg/>
        <br/>
        <h1 className="pagina">Portal Funcionário </h1>
        <br/>
        <Card style={{ width: '18rem' }} className="dashboardFunc">
        <Card.Header as="h5">Cadastro Aluno</Card.Header>
        <Card.Body>
            <Card.Title>Realize o cadastro de um novo aluno aqui.</Card.Title>
            <Button variant="primary" href="/busca">Clique Aqui</Button>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="dashboardFunc">
        <Card.Header as="h5">Cadastro Instrutor</Card.Header>
        <Card.Body>
            <Card.Title>Realize o cadastro de um novo instrutor aqui.</Card.Title>
            <Button variant="primary" href="/busca">Clique Aqui</Button>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="dashboardFunc">
        <Card.Header as="h5">Consulta Aluno</Card.Header>
        <Card.Body>
            <Card.Title>Realize a consulta dos dados cadastrais de um aluno.</Card.Title>
            <Button variant="primary" href="/busca">Clique Aqui</Button>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="dashboardFunc">
        <Card.Header as="h5">Consulta Instrutor</Card.Header>
        <Card.Body>
            <Card.Title>Realize a consulta dos dados cadastrais de um instrutor.</Card.Title>
            <Button variant="primary" href="/busca">Clique Aqui</Button>
        </Card.Body>
        </Card>
      </div>
    );
  }
}

export default paginaFunc;