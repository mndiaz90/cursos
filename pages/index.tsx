
import styles from '../styles/Home.module.css'
import Dashboard from './dashboard'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (

    <div className={styles.container}>
      <Dashboard />
    </div>

  )
}
