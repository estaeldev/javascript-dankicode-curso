import styles from './styles.module.scss'


export function Post({id, info}) {

    function comentar(event, id) {
        event.preventDefault()
        console.log(id);
    }

    return (
        <div key={info.username} className={styles.postSingle}>
            <img src={info.url} alt="" />
            <span> <strong>{info.username}</strong> {info.titulo} </span>
            <form onSubmit={event => comentar(event, id)}>
                <textarea></textarea>
                <button type='submit'>Comentar</button>
            </form>
        </div>
    )

}
