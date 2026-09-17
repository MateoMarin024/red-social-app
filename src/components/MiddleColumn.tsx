import { Post } from './Post';

export function MiddleColumn() {
  return (
    <div className="w3-col m7">
      
      {/* Caja para crear una nueva publicación */}
      <div className="w3-row-padding">
        <div className="w3-col m12">
          <div className="w3-card w3-round w3-white">
            <div className="w3-container w3-padding">
              <h6 className="w3-opacity">Social Media template by w3.css</h6>
              <p contentEditable={true} suppressContentEditableWarning={true} className="w3-border w3-padding">Status: Feeling Blue</p>
              <button type="button" className="w3-button w3-theme"><i className="fa fa-pencil"></i>  Post</button>
            </div>
          </div>
        </div>
      </div>

      {/* Reusando el componente Post para cada usuario de la plantilla */}
      <Post 
        avatar="https://www.w3schools.com/w3images/avatar2.png"
        name="John Doe"
        time="1 min"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        images={[
          "https://www.w3schools.com/w3images/lights.jpg",
          "https://www.w3schools.com/w3images/nature.jpg"
        ]}
      />

      <Post 
        avatar="https://www.w3schools.com/w3images/avatar5.png"
        name="Jane Doe"
        time="16 min"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />

      <Post 
        avatar="https://www.w3schools.com/w3images/avatar6.png"
        name="Angie Jane"
        time="32 min"
        content="Have you seen this? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        images={[
          "https://www.w3schools.com/w3images/nature.jpg"
        ]}
      />
      
    </div>
  );
}