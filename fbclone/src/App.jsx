import styles from './App.module.scss';
import Header from './components/header';
import Stories from './components/stories';
import fotoPerfil from './resources/foto.jpg'

function App() {

    return (
        <div className={styles.app}>

            <Header />
            <Stories />
            
            <div className={styles.feed}>

                <div className={styles.center}>
                    <div className={styles.feedTop}>
                        <img src={fotoPerfil} alt="" />
                        <input type="text" placeholder='No que você está pensando, Estael Meireles ?' />
                    </div>
                    <div className={styles.feedBottom}>
                        <div className={styles.feedBottom__video}>
                            <span>Video ao vivo</span>
                        </div>
                        <div className={styles.feedBottom__foto}>
                            <span>Foto/video</span>
                        </div>
                        <div className={styles.feedBottom__setimento}>
                            <span>Sentimento/atividade</span>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
    
}

export default App;
