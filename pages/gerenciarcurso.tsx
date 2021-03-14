import { ChangeEvent, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { MenuHeader } from "../src/components/MenuHeader";
import Link from "next/link";
import axios from 'axios';

interface DadosCurso {
    id: number;
    Nome: string;
    ValorMensalidade: number;
    ValorMatricula: number;
    Periodo: string;
    Duracao: number;
    Descricao: string;
}

export default function GerenciarCurso() {
    const [dados, setDados] = useState<DadosCurso>({
        id: 0,
        Nome: "",
        ValorMensalidade: 0,
        ValorMatricula: 0,
        Periodo: "matutino",
        Duracao: 0,
        Descricao: "",
    });

    function onChangeData(evt: ChangeEvent<HTMLInputElement>) {
        const value = evt.target.value;
        setDados({
            ...dados,
            [evt.target.name]: value
        });
    }

    function onClickCadastrar(evt) {
        evt.preventDefault()

        axios.post(
            'http://localhost:8080/curso/create', dados
        ).then((response) => {
            if (response.data.error)
                return alert('Curso nao cadastrado!')
            alert('Curso cadastrado con sucesso!')
            evt.target.form.reset();
        }, (error) => {
            alert(error)
        });
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
                    <h4>Registre um novo curso</h4>
                    <Form.Group as={Row} controlId="formNameUser">
                        <Form.Label column sm="2">
                            Nome
                            <code className="highlighter-red">*</code>
                        </Form.Label>

                        <Col sm="10">
                            <Form.Control name="Nome" onChange={onChangeData} required placeholder="Digite um nome" />
                            <Form.Text className="text-muted">
                                Escolha um nome que seja representativo para o curso.
                            </Form.Text>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formMensalCurso" >
                        <Form.Label column sm="2">
                            Mensalidade
                            <code className="highlighter-red">*</code>
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control name="ValorMensalidade" type="number" onChange={onChangeData} required placeholder="Digite o valor da mensalidade" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formValorMatric" >
                        <Form.Label column sm="2">
                            Valor da matricula
                            <code className="highlighter-red">*</code>
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control name="ValorMatricula" type="number" onChange={onChangeData} required placeholder="Digite o valor da taxa de inscricao" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                        <Form.Label column sm="2">
                            Periodo
                            <code className="highlighter-red">*</code>
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control as="select" name="Periodo" onChange={onChangeData}>
                                <option>matutino</option>
                                <option>vespertino</option>
                                <option>noturno</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formDuracaoCurso" >
                        <Form.Label column sm="2">
                            Duracao
                            (meses)
                            <code className="highlighter-red">*</code>
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="number" name="Duracao" onChange={onChangeData} required placeholder="Quantos meses dura este curso?" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                        <Form.Label column sm="2">Descricao</Form.Label>
                        <Col sm="10">
                            <Form.Control as="textarea" name="Descricao" onChange={onChangeData} rows={3} />
                        </Col>
                    </Form.Group>
                    <Button onClick={onClickCadastrar} variant="primary" type="submit" block>
                        Cadastrar
                    </Button>

                </Form>
            </div>
        </>
    )
}