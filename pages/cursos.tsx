
import styles from "../styles/Cursos.module.css";
import { MenuHeader } from "../src/components/MenuHeader";

import axios from 'axios'

interface CursoProps {
    dados: Array<DadosCurso>
}

interface DadosCurso {
    id: number;
    email: string;
    first_name: string;
    avatar: string
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
                        <li>{curso.id}</li>
                        <li>{curso.first_name}</li>
                        <li>{curso.email}</li>
                        <li>50</li>
                        <li>2021-2022</li>
                        <li>10 dias</li>
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
        'https://reqres.in/api/users?page=1'
    )

    return {
        dados: response.data.data
    }
}