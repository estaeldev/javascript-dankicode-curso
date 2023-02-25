import './App.css';
import {db} from './firebaseConfig.js'
import {useEffect, useState} from 'react'


export default function App() {

    const [user, setUser] = useState(null)

    useEffect(() => {

    }, [])


    return (
        <div className="App">

            <header>
                <div className='header__log'>
                    <a href=''>
                        <img src='https://www.instagram.com/static/imagens/web/mobile_nav_type_logo.png'></img>
                    </a>
                </div>
                
                

            </header>




        </div>
    )
}
