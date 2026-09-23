import { useState } from 'react';

interface PostProps {
  id: number; // Clave para solucionar el error del ID único en listas
  avatar: string;
  name: string;
  time: string;
  content: string;
  images?: string[];
}

export function Post({ id, avatar, name, time, content, images }: PostProps) {
  // Estados para manejar la interactividad del post
  const [likes, setLikes] = useState<number>(15);
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [comments, setComments] = useState<string[]>([
    "¡Excelente publicación bro!",
    "Me encanta esta temática."
  ]);
  const [newComment, setNewComment] = useState<string>("");
  const [showComments, setShowComments] = useState<boolean>(false);

  // Función para manejar el Like (incrementar/decrementar y cambiar color)
  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  // Función para agregar un nuevo comentario
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() === "") return;
    setComments([...comments, newComment]);
    setNewComment("");
  };

  // Función de compartir
  const handleShare = () => {
    alert(`¡Post #${id} compartido con éxito en tu muro!`);
  };

  return (
    <div className="w3-container w3-card w3-white w3-round w3-margin" key={id}><br />
      <img src={avatar} alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: '60px' }} />
      <span className="w3-right w3-opacity">{time}</span>
      <h4>{name}</h4><br />
      <hr className="w3-clear" />
      <p>{content}</p>

      {/* Renderizado de imágenes si existen */}
      {images && images.length > 0 && (
        <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
          {images.map((img, index) => (
            <div key={index} className="w3-half">
              <img src={img} style={{ width: '100%' }} alt="Post content" className="w3-margin-bottom" />
            </div>
          ))}
        </div>
      )}

      {/* Contador dinámico de Likes y Comentarios */}
      <button 
        type="button" 
        onClick={handleLike} 
        className={`w3-button w3-margin-bottom ${hasLiked ? 'w3-theme' : 'w3-theme-d1'}`}
      >
        <i className="fa fa-thumbs-up"></i>   {likes} {hasLiked ? 'Liked' : 'Like'}
      </button>

      <button 
        type="button" 
        onClick={() => setShowComments(!showComments)} 
        className="w3-button w3-theme-d2 w3-margin-bottom"
      >
        <i className="fa fa-comment"></i>   {comments.length} Comentarios
      </button>

      <button 
        type="button" 
        onClick={handleShare} 
        className="w3-button w3-theme-d1 w3-margin-bottom w3-right"
      >
        <i className="fa fa-share"></i>   Compartir
      </button>

      {/* Sección desplegable de comentarios */}
      {showComments && (
        <div className="w3-container w3-light-grey w3-padding w3-round w3-margin-bottom">
          <form onSubmit={handleAddComment} style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
            <input 
              type="text" 
              className="w3-input w3-border w3-round" 
              placeholder="Escribe un comentario..." 
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button type="submit" className="w3-button w3-theme">Comentar</button>
          </form>

          {comments.map((comment, idx) => (
            <div key={idx} className="w3-container w3-white w3-round w3-margin-top w3-padding-small w3-border">
              <p style={{ margin: '0', fontSize: '14px' }}><strong>Usuario:</strong> {comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}