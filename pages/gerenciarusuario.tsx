import { ChangeEvent, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { MenuHeader } from "../src/components/MenuHeader";
import Link from "next/link";

export default function GerenciarUsuario() {
    const [dataNacimento, setDataNacimento] = useState(new Date().toISOString().substring(0, 10))

    function onChangeData(e: ChangeEvent<HTMLDataElement>) {
        setDataNacimento(e.target.value)
    }
    return (
        <>
            <MenuHeader />
            <div className="containerAllPages">
                <div className="containerFormGerenciar">
                    <i className="fa fa-arrow-left"></i>
                    <Link href="/usuarios">Voltar a listagem</Link>
                </div>

                <Form className="containerFormGerenciar">
                    <h4>Registre um novo aluno</h4>
                    <Form.Group as={Row} controlId="formNameUser">
                        <Form.Label column sm="2">
                            Nome
                            <code className="highlighter-red">*</code>
                        </Form.Label>

                        <Col sm="10">
                            <Form.Control required placeholder="Digite um nome" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formCPFUser" >
                        <Form.Label column sm="2">
                            CPF
                            <code className="highlighter-red">*</code>
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control required placeholder="000.000.00-00" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formRGUser">
                        <Form.Label column sm="2">
                            RG
                            <code className="highlighter-red">*</code>
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control required placeholder="Digite um RG" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formTelUser">
                        <Form.Label column sm="2">
                            Telefone
                            <code className="highlighter-red">*</code>
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control required placeholder="Digite um telefone" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formDateBornUser">
                        <Form.Label column sm="2">
                            Data de nascimento
                            <code className="highlighter-red">*</code>
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control required type="date" value={dataNacimento} onChange={onChangeData} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formUsername">
                        <Form.Label column sm="2">
                            User
                            <code className="highlighter-red">*</code>
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control required placeholder="Digite um nome de usuario" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formEmailUser">
                        <Form.Label column sm="2">
                            E-mail
                            <code className="highlighter-red">*</code>
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control required type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formBasicPassword">
                        <Form.Label column sm="2">
                            Password
                            <code className="highlighter-red">*</code>
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control required type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <Button variant="primary" type="submit" block>
                        Cadastrar
                    </Button>

                </Form>
            </div>
        </>
    )
}