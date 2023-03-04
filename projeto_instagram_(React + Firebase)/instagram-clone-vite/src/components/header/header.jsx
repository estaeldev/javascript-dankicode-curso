import styles from './styles.module.scss'
import { auth, storage, db } from '../../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from 'react'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

export default function Header({user, setUser}) {
    
    const [progress, setProgress] = useState(0)
    const [file, setFile] = useState(null)
    
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
            window.location.href = '/'
        }).catch(error => console.log(error.message))
    }

    function abrirModalUpload(event) {
        event.preventDefault()
        const modalUpload = document.querySelector('div[nome="modalUpload"]')
        modalUpload.style.display = 'block'   
    }

    function closeModalUpload(event) {
        event.preventDefault()
        const modalUpload = document.querySelector('div[nome="modalUpload"]')
        modalUpload.style.display = 'none'   

    }

    function loggout(event) {
        event.preventDefault()
        signOut(auth).then(value => {
            setUser(null)
            window.location.href = '/'
        })
    }

    async function uploadPost(event) {
        event.preventDefault()
        const tituloUpload = document.getElementById('tituloUpload').value

        const storageRef = ref(storage, `images/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on('state_changed', snapshot => {
            const progressTime = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            setProgress(progressTime)
        }, error => alert(error), () => {
            getDownloadURL(uploadTask.snapshot.ref).then(url => {
                addDoc(collection(db, 'posts/'), {
                    titulo: tituloUpload,
                    url: url,
                    username: user.nome,
                    timestamp: serverTimestamp()
                })
            })
            setProgress(0)
            setFile(null)
            document.querySelector('div[nome="modalUpload"]').reset()
        })
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

                <div className={styles.modalUpload} nome='modalUpload'>
                    <div className={styles.formUpload}>
                        <div className={styles.closeModalUpload} onClick={closeModalUpload}>X</div>
                        <h2>Fazer Upload</h2>
                        <form onSubmit={(event) => uploadPost(event)}>
                            <progress id='progressUpload' value={progress}></progress>
                            <input id='tituloUpload' type="text" placeholder='Nome da sua foto...' />
                            <input onChange={(event) => setFile(event.target.files[0])} id='uploadFile' type="file" />
                            <button type='submit'>Postar no Instagram</button>
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
                                <a onClick={(event => abrirModalUpload(event))} href="">Postar!</a>
                                <a href="" onClick={event => loggout(event)}>Deslogar</a>
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