import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilLine } from 'phosphor-react';

export function Sidebar (){
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=350
            &q=50"></img>
            <div className={styles.profile}>
                <Avatar hasBorder src="https://github.com/cruzsud.png"/>
                <strong>Anderson Cruz</strong>
                <span>FullStack Developer</span>    
            </div>
           <footer>
                <a href="https://github.com/AndersonCruz" target="_blank" rel="noreferrer">
                    <PencilLine size="15"/>
                    Editar Seu Perfil
                </a>
           </footer>
        </aside>
        )
        
}
