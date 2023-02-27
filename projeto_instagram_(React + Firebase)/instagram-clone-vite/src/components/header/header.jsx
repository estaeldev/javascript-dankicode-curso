import styles from './styles.module.scss'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'

export default function Header({user, setUser}) {
    
    function abrirModalCriarConta(event) {
        event.preventDefault()
        const modalCriarConta = document.querySelector('div[nome="modalCriarConta"]')
        modalCriarConta.style.display = 'block'        
    }
    
    function closeModalCriarConta() {
        const modalCriarConta = document.querySelector('div[nome="modalCriarConta"]')
        modalCriarConta.style.display = 'none'        
    }

    function criarConta(event) {
        event.preventDefault()
        const email = document.getElementById('emailCadastro').value
        const username = document.getElementById('usernameCadastro').value
        const senha = document.getElementById('passwordCadastro').value
        
        createUserWithEmailAndPassword(auth, email, senha).then(userCredential => {
            userCredential.user.displayName
            updateProfile(auth.currentUser, {displayName: username})
            const modalCriarConta = document.querySelector('div[nome="modalCriarConta"]')
            modalCriarConta.style.display = 'none'  
        }).catch(error => console.log(error.message))
    }

    function logar(event) {
        event.preventDefault()
        const email = document.getElementById('emailLogar').value
        const senha = document.getElementById('senhaLogar').value

        signInWithEmailAndPassword(auth, email, senha).then(userCredential => {
            setUser({nome: userCredential.user.displayName})
        }).catch(error => console.log(error.message))
    }

    return (
        <header>

                <div className={styles.modalCriarConta} nome='modalCriarConta'>
                    <div className={styles.formCriarConta}>
                        <div className={styles.closeModalCriar} onClick={closeModalCriarConta}>X</div>
                        <h2>Criar Conta</h2>
                        <form onSubmit={(event) => criarConta(event)}>
                            <input id='emailCadastro' type="text" placeholder='Seu e-mail...' />
                            <input id='usernameCadastro' type="text" placeholder='Seu username...' />
                            <input id='passwordCadastro' type="password" placeholder='Sua senha...' />
                            <button type='submit'>Criar Conta</button>
                        </form>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className=''>
                        <a href=''>
                            <img src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'></img>
                        </a>
                    </div>
                    
                    {
                        (user) ? 
                            <div className={styles.header__logadoInfo}>
                                <span>Olá, <strong>{user.nome}</strong> </span>
                                <a href="">Postar!</a>
                            </div> 
                        : 
                            <div className={styles.header__loginForm}>
                                <form onSubmit={(event) => logar(event)}>
                                    <input id='emailLogar' type="text" placeholder='Login...' />
                                    <input id='senhaLogar' type="password" placeholder='Senha...' />
                                    <button type='submit'>Logar</button>
                                </form>
                                <div className={styles.btn__criarConta}>
                                    <a href='' onClick={(event) => abrirModalCriarConta(event)}>
                                        Criar Conta
                                    </a>
                                </div>
                            </div>
                    }
                    
                </div>
        </header>
    )
}