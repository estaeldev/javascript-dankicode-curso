import { addDoc, collection, doc, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import styles from './styles.module.scss'


export function Post({id, info}) {

    const [comentarios, setComentarios] = useState([])

    useEffect(() => {
        getDocs(collection(db, `posts/${id}/comentarios`)).then(snapshot => {
            setComentarios(snapshot.docs.map(comentario => {
                return {id: comentario.id, info: comentario.data()}
            }))
        })
    }, [])

    function comentar(event, id) {
        event.preventDefault()
        const comentario = document.getElementById(`comentario-${id}`)

        const documentRef = doc(db, 'posts', id)
        addDoc(collection(documentRef, 'comentarios'), {
            nome: info.username,
            comentario: comentario.value
        })

        comentario.value = ''

    }

    return (
        <div key={info.username} className={styles.postSingle}>
            <img src={info.url} alt="" />
            <span> <strong>{info.username}</strong> {info.titulo} </span>
            
            {
                comentarios.map(comentario => {
                    return (
                        <div key={comentario.id}>
                            <span>{comentario.info.nome}</span>
                            <span>{comentario.info.comentario}</span>
                        </div>
                    )
                })
            }
            
           
            <form onSubmit={event => comentar(event, id)}>
                <textarea id={`comentario-${id}`}></textarea>
                <button type='submit'>Comentar</button>
            </form>
        </div>
    )

}
