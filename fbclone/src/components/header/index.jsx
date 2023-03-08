import { FaAlignJustify, FaFacebook, FaSearch } from 'react-icons/fa'
import { HiPlusSm } from 'react-icons/hi'
import styles from './styles.module.scss'

export default function Header() {
    return (
        <div className={styles.header}>

            <div className={styles.center}>
                <div className={styles.headerLeft}>
                    <div className={styles.logoFb}> <FaFacebook /> </div>
                    <div className={styles.searchFb}> <FaSearch /> </div>
                    <div className={styles.menuFb}> <FaAlignJustify /> </div>
                </div>

                <div className={styles.headerRight}>
                    <div className={styles.plusBtn}> <HiPlusSm size={25}/> </div>
                </div>
            </div>

        </div>
    )
}
