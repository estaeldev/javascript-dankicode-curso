import StoriesCard from '../storiesCard'
import styles from './styles.module.scss'

export default function Stories() {
    return (
        <div className={styles.stories}>

            <div className={styles.center}>

                {
                    [1,2,3,4,5].map((value, index) => {
                        return (
                            <StoriesCard key={index} />
                        )
                    })
                }

            </div>

        </div>

    )
}