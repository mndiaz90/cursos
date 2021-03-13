
import styles from "../styles/Cursos.module.css";
import { MenuHeader } from "../src/components/MenuHeader";

import axios from 'axios'

interface CursoProps {
    dados: Array<DadosCurso>
}

interface DadosCurso {
    id: number;
    Nome: string;
    ValorMensalidade: number;
    ValorMatricula: number;
    Periodo: string;
    Duracao: number;
}

export default function Cursos(props: CursoProps) {
    return (
        <>
            <MenuHeader />
            <div className='containerAllPages'>
                <h3>Listagem de cursos</h3>
                <div className={styles.textGridHeader}>
                    <span>#</span>
                    <span>Nome</span>
                    <span>Mensualidade</span>
                    <span>Valor da matricula</span>
                    <span>Periodo</span>
                    <span>Duracao</span>
                </div>
                {props.dados && props.dados.map((curso, index) => {
                    return <ul key={index} className={styles.gridCursos} >
                        <li>{index + 1}</li>
                        <li>{curso.Nome}</li>
                        <li>{curso.ValorMensalidade}</li>
                        <li>{curso.ValorMatricula}</li>
                        <li>{curso.Periodo}</li>
                        <li>{curso.Duracao == 1 ? curso.Duracao + ' mes' : curso.Duracao + ' meses'} </li>
                        <li>
                            <i className="fa fa-eye" style={{ marginRight: '5px' }}></i>
                            <i className="fa fa-pencil"></i>
                        </li>
                    </ul>
                })}
            </div>
        </>
    )
}

Cursos.getInitialProps = async () => {
    const response = await axios.get(
        'http://localhost:8080/cursos'
    )

    return {
        dados: response.data
    }
}