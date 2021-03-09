
import { Dropdown } from "react-bootstrap";
import Link from "next/link";
import styles from "../../styles/components/MenuHeader.module.css";

export function MenuHeader() {
    function onClickCurso() {
        console.log('teste')
    }
    return (
        <div className={styles.containerMenuHeader}>
            <i className="fa fa-home"></i>
            <Link href="/">Home
            </Link>
            <Dropdown>
                <Dropdown.Toggle variant="failed" id="dropdown-basic">
                    Gerenciar usuarios
            </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Adicionar usuario</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Listagem</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle variant="failed" id="dropdown-basic">
                    Cursos
            </Dropdown.Toggle>

                <Dropdown.Menu onClick={onClickCurso}>
                    <Dropdown.Item href="#/action-1">Adicionar curso</Dropdown.Item>
                    <Dropdown.Item >
                        <Link href="/Cursos">Listagem</Link>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle variant="failed" id="dropdown-basic">
                    Matricula
            </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Abrir nova matricula</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Listagem</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Matricular aluno</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}