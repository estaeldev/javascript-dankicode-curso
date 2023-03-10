import {IoEarth} from 'react-icons/io5'
import fotoPerfil from '../../resources/foto.jpg'
import foto from '../../resources/preview.png'
import styles from './styles.module.scss'

export default function FeedPost({nome, hora, mensagem}) {
    return (
        <div className={styles.feedPostSingle}>

            <div className={styles.feedPost__profile}>
                <img src={fotoPerfil} alt="" />
                <span> <strong>{nome}</strong> <br /> {hora}h <IoEarth /> </span>
            </div>
            
            <div className={styles.feedPost__content}>
                <p>{mensagem}</p>
                <img src={fotoPerfil} alt="" />
            </div>

        </div>
    )
}