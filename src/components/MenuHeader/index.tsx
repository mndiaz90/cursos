
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import Link from "next/link";
import styles from "../../../styles/components/MenuHeader.module.css";

export function MenuHeader() {
    return (
        <div className={styles.containerMenuHeader}>
            <title>Matriculas</title>
            <i className="fa fa-home"></i>
            <Link href="/">Home </Link>

            <Dropdown as={ButtonGroup}>
                <Button >
                    <Link href='/usuarios'>Gerenciar usuarios</Link>
                </Button>

                <Dropdown.Toggle split id="dropdown-split-basic" />

                <Dropdown.Menu>
                    <Dropdown.Item >
                        <Link href="/gerenciarusuario">Adicionar usuario</Link>
                    </Dropdown.Item>
                    <Dropdown.Item >
                        <Link href="/usuarios">Listagem</Link>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={ButtonGroup}>
                <Button >
                    <Link href='/cursos'>Cursos</Link>
                </Button>

                <Dropdown.Toggle split id="dropdown-split-basic" />

                <Dropdown.Menu>
                    <Dropdown.Item>
                        <Link href="/gerenciarcurso">Adicionar curso</Link>
                    </Dropdown.Item>
                    <Dropdown.Item >
                        <Link href="/cursos">Listagem</Link>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={ButtonGroup}>
                <Button >
                    <Link href='/matriculas'>Matriculas</Link>
                </Button>

                <Dropdown.Toggle split id="dropdown-split-basic" />

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Abrir nova matricula</Dropdown.Item>
                    <Dropdown.Item >
                        <Link href="/matriculas">Listagem</Link>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Matricular aluno</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}