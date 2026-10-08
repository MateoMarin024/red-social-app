import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Feed() {
  const navigate = useNavigate();
  
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Mateo Marín',
      avatar: 'https://www.w3schools.com/w3images/avatar2.png',
      time: 'Hace 5 min',
      content: '¡Integrando todas las tareas y requerimientos para asegurar ese 5.0 en la Red Social con toda la actitud! 🚀🔥',
      image: 'https://www.w3schools.com/w3images/lights.jpg',
      likes: 5,
      liked: false,
      shares: 2,
      showComments: false,
      commentText: '',
      commentsList: [
        { id: 101, author: 'Alejandra', text: '¡Eso va a quedar excelente, amor!' }
      ]
    },
    {
      id: 2,
      author: 'Alejandra',
      avatar: 'https://www.w3schools.com/w3images/avatar5.png',
      time: 'Hace 20 min',
      content: 'Disfrutando de un buen café y revisando los últimos detalles de desarrollo web en Medellín. ☕💻',
      image: 'https://www.w3schools.com/w3images/nature.jpg',
      likes: 14,
      liked: false,
      shares: 4,
      showComments: false,
      commentText: '',
      commentsList: [
        { id: 102, author: 'Mateo Marín', text: '¡Totalmente de acuerdo!' }
      ]
    }
  ]);
  
  const [newPostText, setNewPostText] = useState('');

  // Crear nueva publicación con ID único
  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostText.trim()) return;

    const newPost = {
      id: Date.now(),
      author: 'Mateo Marín',
      avatar: 'https://www.w3schools.com/w3images/avatar2.png',
      time: 'Justo ahora',
      content: newPostText,
      image: '',
      likes: 0,
      liked: false,
      shares: 0,
      showComments: false,
      commentText: '',
      commentsList: []
    };

    setPosts([newPost, ...posts]);
    setNewPostText('');
  };

  // Manejar Likes
  const handleLike = (id: number) => {
    setPosts(posts.map(post => {
      if (post.id === id) {
        const liked = !post.liked;
        return {
          ...post,
          liked,
          likes: liked ? post.likes + 1 : post.likes - 1
        };
      }
      return post;
    }));
  };

  // Manejar Compartir (con alerta y contador actualizado)
  const handleShare = (id: number) => {
    setPosts(posts.map(post => {
      if (post.id === id) {
        return { ...post, shares: post.shares + 1 };
      }
      return post;
    }));
    alert('¡Publicación compartida con éxito!');
  };

  // Alternar Comentarios
  const toggleComments = (id: number) => {
    setPosts(posts.map(post => {
      if (post.id === id) {
        return { ...post, showComments: !post.showComments };
      }
      return post;
    }));
  };

  const handleCommentInputChange = (id: number, text: string) => {
    setPosts(posts.map(post => {
      if (post.id === id) {
        return { ...post, commentText: text };
      }
      return post;
    }));
  };

  const handleAddComment = (id: number, e: React.FormEvent) => {
    e.preventDefault();
    setPosts(posts.map(post => {
      if (post.id === id) {
        if (!post.commentText.trim()) return post;
        const newComment = {
          id: Date.now(),
          author: 'Mateo Marín',
          text: post.commentText
        };
        return {
          ...post,
          commentsList: [...post.commentsList, newComment],
          commentText: ''
        };
      }
      return post;
    }));
  };

  return (
    <div className="w3-light-grey" style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Navbar Superior */}
      <div className="w3-top">
        <div className="w3-bar w3-theme-d2 w3-left-align w3-large" style={{ backgroundColor: '#2196F3', color: 'white' }}>
          <a onClick={() => navigate('/feed')} className="w3-bar-item w3-button w3-padding-large w3-theme-d4" style={{ backgroundColor: '#0d8aee', cursor: 'pointer' }}>
            <i className="fa fa-home w3-margin-right"></i>Beat Social
          </a>
          <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Inicio / Actualizar" style={{ cursor: 'pointer' }}>
            <i className="fa fa-globe"></i>
          </a>
          <a onClick={() => navigate('/profile')} className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Perfil" style={{ cursor: 'pointer' }}>
            <i className="fa fa-user"></i>
          </a>
          <a onClick={() => alert('Bandeja de mensajes')} className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Mensajes" style={{ cursor: 'pointer' }}>
            <i className="fa fa-envelope"></i>
          </a>
          <a onClick={() => { localStorage.removeItem('usuario'); navigate('/login'); }} className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-red" title="Salir" style={{ cursor: 'pointer' }}>
            <i className="fa fa-sign-out"></i> Salir
          </a>
        </div>
      </div>

      {/* Contenedor Principal */}
      <div className="w3-container" style={{ maxWidth: '1400px', marginTop: '80px', marginLeft: 'auto', marginRight: 'auto' }}>
        <div className="w3-row">
          
          {/* Columna Izquierda: Perfil */}
          <div className="w3-col m3">
            <div className="w3-card w3-round w3-white">
              <div className="w3-container">
                <h4 className="w3-center">Mi Perfil</h4>
                <p className="w3-center">
                  <img src="https://www.w3schools.com/w3images/avatar2.png" className="w3-circle" style={{ height: '106px', width: '106px' }} alt="Avatar" />
                </p>
                <hr />
                <p><i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i> Frontend Dev, Zolvyx</p>
                <p><i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> Medellín, Colombia</p>
              </div>
            </div>
            <br />
          </div>

          {/* Columna Central: Muro y Creación de Posts */}
          <div className="w3-col m7">
            
            <div className="w3-row-padding">
              <div className="w3-col m12">
                <div className="w3-card w3-round w3-white">
                  <div className="w3-container w3-padding">
                    <h6 className="w3-opacity">¿Qué estás pensando?</h6>
                    <form onSubmit={handleCreatePost}>
                      <input 
                        type="text" 
                        value={newPostText}
                        onChange={(e) => setNewPostText(e.target.value)}
                        placeholder="Comparte algo con la comunidad..." 
                        className="w3-input w3-border w3-padding"
                        style={{ marginBottom: '10px', borderRadius: '4px' }}
                      />
                      <button type="submit" className="w3-button" style={{ backgroundColor: '#2196F3', color: 'white' }}>
                        <i className="fa fa-pencil"></i> Publicar
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Listado de Publicaciones */}
            {posts.map((post) => (
              <div key={post.id} className="w3-container w3-card w3-white w3-round w3-margin" style={{ paddingBottom: '12px' }}>
                <br />
                <img src={post.avatar} alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: '50px', height: '50px' }} />
                <span className="w3-right w3-opacity">{post.time}</span>
                <h4>{post.author}</h4><br />
                <hr className="w3-clear" />
                <p>{post.content}</p>
                
                {post.image && (
                  <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
                    <div className="w3-col m12">
                      <img src={post.image} style={{ width: '100%' }} alt="Post image" className="w3-margin-bottom" />
                    </div>
                  </div>
                )}

                {/* Estadísticas de reacciones */}
                <div className="w3-row w3-small w3-text-grey" style={{ padding: '4px 0', borderBottom: '1px solid #ddd' }}>
                  <div className="w3-col s6">
                    <i className="fa fa-thumbs-up w3-text-blue"></i> {post.likes} Me gusta
                  </div>
                  <div className="w3-col s6 w3-right-align">
                    {post.commentsList.length} comentarios &bull; {post.shares} veces compartido
                  </div>
                </div>

                {/* Botones de acción estilo Facebook */}
                <div className="w3-row" style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between' }}>
                  <button 
                    type="button" 
                    onClick={() => handleLike(post.id)}
                    className="w3-button w3-white w3-hover-light-grey" 
                    style={{ flex: 1, color: post.liked ? '#2196F3' : '#555', fontWeight: 'bold' }}
                  >
                    <i className="fa fa-thumbs-up"></i> Me gusta
                  </button>
                  
                  <button 
                    type="button" 
                    onClick={() => toggleComments(post.id)}
                    className="w3-button w3-white w3-hover-light-grey" 
                    style={{ flex: 1, color: '#555', fontWeight: 'bold' }}
                  >
                    <i className="fa fa-comment"></i> Comentar
                  </button>

                  <button 
                    type="button" 
                    onClick={() => handleShare(post.id)}
                    className="w3-button w3-white w3-hover-light-grey" 
                    style={{ flex: 1, color: '#555', fontWeight: 'bold' }}
                  >
                    <i className="fa fa-share"></i> Compartir
                  </button>
                </div>

                {/* Sección Comentarios */}
                {post.showComments && (
                  <div className="w3-container" style={{ marginTop: '10px', background: '#f0f2f5', padding: '10px', borderRadius: '8px' }}>
                    {post.commentsList.map((c: any) => (
                      <div key={c.id} style={{ background: 'white', padding: '8px 12px', borderRadius: '15px', marginBottom: '6px', fontSize: '14px' }}>
                        <strong>{c.author}: </strong>
                        <span>{c.text}</span>
                      </div>
                    ))}

                    <form onSubmit={(e) => handleAddComment(post.id, e)} style={{ display: 'flex', marginTop: '10px' }}>
                      <input 
                        type="text" 
                        value={post.commentText}
                        onChange={(e) => handleCommentInputChange(post.id, e.target.value)}
                        placeholder="Escribe un comentario..." 
                        className="w3-input w3-border"
                        style={{ flex: 1, marginRight: '8px', borderRadius: '20px', padding: '6px 12px', fontSize: '14px' }}
                      />
                      <button type="submit" className="w3-button" style={{ backgroundColor: '#2196F3', color: 'white', borderRadius: '20px', padding: '6px 16px' }}>
                        Enviar
                      </button>
                    </form>
                  </div>
                )}
              </div>
            ))}

          </div>

          {/* Columna Derecha: Eventos */}
          <div className="w3-col m2">
            <div className="w3-card w3-round w3-white w3-center">
              <div className="w3-container">
                <p><strong>Próximos Eventos:</strong></p>
                <img src="https://www.w3schools.com/w3images/forest.jpg" alt="Forest" style={{ width: '100%' }} />
                <p><strong>Entrega Proyecto Final</strong></p>
                <p>Miércoles, 7:00 PM</p>
              </div>
            </div>
            <br />
          </div>

        </div>
      </div>
    </div>
  );
}