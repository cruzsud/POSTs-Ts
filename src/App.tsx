
import { Header } from './components/Header';
import { Post }  from './components/Post';
import { Sidebar } from './components/Sidebar';
import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
         avatarUrl: 'https://github.com/cruzsud.png',
         name: 'Anderson Cruz',
         role: 'FullStack Developer',
    },
    content: [
      {type: 'paragraph', content :'Fala galeraa!'},
      {type: 'paragraph', content :'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz Ignite.'},
      {type: 'paragraph', content :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non commodi possimus, quaerat dignissimos asperiores id odio quis cumque ratione ea ipsa voluptate laboriosam iste neque similique molestiae aperiam, nihil necessitatibus!'},
      {type: 'link', content :'https://github.com/cruzsud/cartaoCredito'}
   ], 
    publishedAt: new Date('2023-02-03 11:22:00'),
  },
  {
    id: 2,
    author: {
         avatarUrl: 'https://github.com/diego3g.png',
         name: 'Diego Cruz',
         role: 'Ceo @Rocketseat',
    },
    content: [
      {type: 'paragraph', content :'Boa Tarde, Pessoal'},
      {type: 'paragraph', content :'Projeto novo aindo do forno. É um projeto que fiz Ignite.'},
      {type: 'paragraph', content :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non commodi possimus, quaerat dignissimos asperiores id odio quis cumque ratione ea ipsa voluptate laboriosam iste neque similique molestiae aperiam, nihil necessitatibus!'},
      {type: 'link', content :'https://github.com/cruzsud/cartaoCredito'}
   ], 
    publishedAt: new Date('2023-04-03 13:22:00'),
  }
]

// Componentes REACT 
export function App() {
 
  return (
      <div>
        <Header/>
        <div className={styles.wrapper}>  
          <aside><Sidebar/></aside>
          <main>
            { posts.map(post => {
                  return (
                    <Post 
                      key={post.id}
                      author={post.author} 
                      content={post.content} 
                      publishedAt={post.publishedAt}
                    />
                  )
                }
              )
            }
          </main>
        </div>
      </div>  
  )
}

