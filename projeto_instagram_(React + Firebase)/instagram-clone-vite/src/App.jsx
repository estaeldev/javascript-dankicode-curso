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
            if(value) {
                setUser({nome: value.displayName})
            }
        })

        getDocs(collection(db, 'posts')).then(snapshot => {
            setPosts(snapshot.docs.map(post =>  {
                return {id: post.id, info: post.data()}
            }))
        })

    }, [])
 
    return (
        <div className={styles.app}>

            <Header user={user} setUser={setUser}></Header>

            {
                posts.map((post) => {
                    return (
                        <Post key={post.id} user={user} id={post.id} info={post.info}></Post>
                    )
                })
            }

        </div>
    )
}
