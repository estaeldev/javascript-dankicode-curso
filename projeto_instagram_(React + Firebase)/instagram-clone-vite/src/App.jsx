import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import Header from './components/header/header'
import { Post } from './components/post/post'
import { db, auth } from './firebase'
import styles from './styles.module.scss'

export default function App() {

    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState([])

    useEffect(() => {

        onAuthStateChanged(auth, value => {
            setUser({nome: value.displayName})
        })

        getDocs(collection(db, 'posts')).then(snapshot => {
                snapshot.docs.forEach(document => {
                setPosts([{id: document.id, info: document.data(snapshot)}])
            })
        })

    }, [])
 
    return (
        <div className={styles.app}>

            <Header user={user} setUser={setUser}></Header>

            {
                posts.map((post) => {
                    return (
                        <Post key={post.id} id={post.id} info={post.info}></Post>
                    )
                })
            }

        </div>
    )
}
