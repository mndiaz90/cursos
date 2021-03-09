import Link from "next/link";
import { Card, CardColumns, ListGroup, ProgressBar } from "react-bootstrap";
import { MenuHeader } from "../src/components/MenuHeader";

export default function Dashboard() {
    return (
        <>
            <MenuHeader />
            <div className="containerAllPages" style={{ width: '100%' }}>

                <p style={{ fontWeight: 600, marginBottom: '5px' }}>Total de cursos: 65</p>
                <span>50% dos cursos tem inscricoes abertas agora | <Link href="/matriculas">Ver matriculas</Link></span>
                <ProgressBar now={50} />

                <hr />

                <p style={{ fontWeight: 600, marginBottom: '5px' }}>Total de inscricoes feitas: 65</p>
                <span>50% das inscricoes estao pagas agora </span>
                <ProgressBar now={50} />

                <br />

                <CardColumns>
                    <Card
                        bg="primary"
                        text='dark'
                        style={{ width: '18rem' }}
                        className="mb-2"
                    >
                        <Card.Header style={{ color: 'white' }}>Gerenciar alunos</Card.Header>
                        <Card.Body >
                            <ListGroup variant="flush" style={{ borderRadius: '5px' }}>
                                <ListGroup.Item style={{ cursor: 'pointer' }}>
                                    <i className="fa fa-plus"></i>Adicionar aluno
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <i className="fa fa-list"></i>Ver listagem
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>

                    <Card
                        bg="primary"
                        text='dark'
                        style={{ width: '18rem' }}
                        className="mb-2"
                    >
                        <Card.Header style={{ color: 'white' }}>Gerenciar cursos</Card.Header>
                        <Card.Body >
                            <ListGroup variant="flush" style={{ borderRadius: '5px' }}>
                                <ListGroup.Item style={{ cursor: 'pointer' }}>
                                    <i className="fa fa-plus"></i>Adicionar curso
                                </ListGroup.Item>
                                <ListGroup.Item style={{ cursor: 'pointer' }}>
                                    <i className="fa fa-list"></i>Ver listagem
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>

                    <Card
                        bg="primary"
                        text='dark'
                        style={{ width: '18rem' }}
                        className="mb-2"
                    >
                        <Card.Header style={{ color: 'white' }}>Gerenciar matriculas</Card.Header>
                        <Card.Body >
                            <ListGroup variant="flush" style={{ borderRadius: '5px' }}>
                                <ListGroup.Item style={{ cursor: 'pointer' }}>
                                    <i className="fa fa-plus"></i>Matricular aluno
                                </ListGroup.Item>
                                <ListGroup.Item style={{ cursor: 'pointer' }}><
                                    i className="fa fa-list"></i>Ver listagem
                                </ListGroup.Item>
                                <ListGroup.Item style={{ cursor: 'pointer' }}>
                                    <i className="fa fa-plus"></i>Abrir nova matricula
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </CardColumns>

            </div>
        </>
    )
}