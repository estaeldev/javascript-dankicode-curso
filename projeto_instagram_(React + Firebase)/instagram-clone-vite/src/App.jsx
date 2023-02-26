import { useState, useEffect } from 'react'
import Header from './components/header/header'
import { db } from './firebase'
import styles from './styles.module.scss'

export default function App() {

    const [user, setUser] = useState(null)

    useEffect(() => {
        
    }, [])

    return (
        <div className={styles.app}>

            <Header user={user} setUser={setUser}></Header>


        </div>
    )
}
