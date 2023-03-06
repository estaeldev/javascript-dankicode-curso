import { addDoc, collection, doc, getDocs, orderBy, serverTimestamp } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import styles from './styles.module.scss'


export function Post({user, id, info}) {

    const [comentarios, setComentarios] = useState([])

    useEffect(() => {
        getDocs(collection(db, `posts/${id}/comentarios`)).then(snapshot => {
            setComentarios(snapshot.docs.map(comentario => {
                return {id: comentario.id, info: comentario.data()}
            }).sort((comentA, comentB) => comentB.info.timestamp > comentA.info.timestamp))
        })
    }, [])

    function comentar(event, id) {
        event.preventDefault()
        const comentario = document.getElementById(`comentario-${id}`)

        const documentRef = doc(db, 'posts', id)
        addDoc(collection(documentRef, 'comentarios'), {
            nome: user.nome,
            comentario: comentario.value,
            timestamp: serverTimestamp()
        }).finally(() => {
            window.location.href = '/'
            comentario.value = ''
        })

    }

    return (
        <div className={styles.postSingle}>
            <img src={info.url} alt="" />
            <span> <strong>{info.username}</strong> {info.titulo} </span>


            {
                (comentarios.length > 0) ?
                    <div className={styles.coments}>
                        <h2>Ultimos Comentarios:</h2>
                        {
                            comentarios.map(comentario => {
                                return (
                                    <div key={comentario.id} className={styles.comentSingle}>
                                        <span> <strong>{comentario.info.nome}</strong>: {comentario.info.comentario} </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                :
                    <span className={styles.comentsNotExist}>Não há comentarios!</span>
            }

            
            
            
           {
            (user) ? 
                <form onSubmit={event => comentar(event, id)}>
                    <textarea id={`comentario-${id}`}></textarea>
                    <button type='submit'>Comentar</button>
                </form>
            :
                <div></div>
           }

        </div>
    )

}
