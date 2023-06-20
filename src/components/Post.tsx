import styles from './Post.module.css';
import { Comments } from './Comments';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author {
    name: string;
    avatarUrl: string;
    role: string
}

interface Content {
    type : 'paragraph' | 'link';
    content : string;
}

interface PostProps{
    author: Author;
    publishedAt: Date;
    content: Content[];
}



export  function Post({ author, publishedAt, content } : PostProps) {

    const publishedAtForm = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR});
    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true});

    const [comments, setComments] = useState([
        'Post muito bacana, hein?!',
      
    ]);

    const [newCommentText, setNewCommentText] = useState('');


    function handerCreatNewComment(event: FormEvent) {
        event.preventDefault();
        //const newCommentText = event.target.comment.value;  
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {

        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);    
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {

        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteComment(commentToDelete : string) {
        const commensWithoutDeleteOne = comments.filter(comment =>{
            return comment !== commentToDelete;
        })
        setComments(commensWithoutDeleteOne);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                   <Avatar hasBorder src={author.avatarUrl}/>
                   <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                   </div>
                </div>
                <time title={publishedAtForm} dateTime={publishedAt.toISOString()}>{publishedDateRelativeNow}</time>
            </header>

            <div className={styles.contents}>
    
                {content.map(line =>{
                    if(line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>;
                    }else if (line.type === 'link'){
                         return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handerCreatNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    onChange={handleNewCommentChange} 
                    name="comment" 
                    className={styles.commentArea} 
                    placeholder='Deixe seu comentário'
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type="submit" disabled={newCommentText.length==0}>
                        Publicar
                    </button> 
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment =>{
                    return (
                        <Comments 
                            key={comment} 
                            content={comment}
                            onDeleteComment={deleteComment}
                         />
                    )
                  }
                )}
            </div>
        </article>
      )
      
}