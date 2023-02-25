import { useState, useEffect } from 'react'
import { db } from './firebase'
import styles from './styles.module.scss'

export default function App() {

    const [user, setUser] = useState(null)

    useEffect(() => {
        console.log(db);
    }, [])

    return (
        <div className={styles.app}>

            <header>
                <div className={styles.content}>
                    <div className=''>
                        <a href=''>
                            <img src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'></img>
                        </a>
                    </div>
                    
                    {
                        (user) ? 
                            <div>Estael Meireles</div> 
                        : 
                            <div className={styles.header__loginForm}>
                                <form>
                                    <input type="text" placeholder='Login...' />
                                    <input type="password" placeholder='Senha...' />
                                    <button type='submit'>Logar</button>
                                </form>
                            </div>
                    }

                    

                </div>
            </header>


        </div>
    )
}
