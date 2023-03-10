import styles from './styles.module.scss'
import fotoPerfil from '../../resources/foto.jpg'
import {AiFillVideoCamera, AiOutlineFileImage, AiOutlineMeh} from 'react-icons/ai'

export default function Feed() {
    return (
        <div className={styles.feed}>

            <div className={styles.center}>
                <div className={styles.feedTop}>
                    <img src={fotoPerfil} alt="" />
                    <input type="text" placeholder='No que você está pensando, Estael Meireles ?' />
                </div>
                <div className={styles.feedBottom}>
                    <div className={`${styles.feedIcons} ${styles.video}`}>
                        <AiFillVideoCamera />
                        <span>Video ao vivo</span>
                    </div>
                    <div className={`${styles.feedIcons} ${styles.imagem}`}>
                        <AiOutlineFileImage />
                        <span>Foto/video</span>
                    </div>
                    <div className={`${styles.feedIcons} ${styles.emoji}`}>
                        <AiOutlineMeh />
                        <span>Sentimento/atividade</span>
                    </div>
                </div>
            </div>

        </div>
    )
}