import styles from './App.module.scss';
import Feed from './components/feed';
import FeedPost from './components/feedPost';
import Header from './components/header';
import Stories from './components/stories';


function App() {

    return (
        <div className={styles.app}>

            <Header />
            <Stories />
            <Feed />
            
            {
                [1,2,3,4,5].map((value, index) => {
                    return (
                        <FeedPost key={index} 
                            nome='Estael Meireles' 
                            hora='4' 
                            mensagem='Foto de perfil, estudando programação!!!' 
                        />
                    )
                })
            }
        
        </div>
    );
    
}

export default App;
