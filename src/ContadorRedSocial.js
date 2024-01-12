import React, {useState} from "react";

const Contador = () => {
    const [likes, setLikes]= useState(0);
    const [liked, setLiked]= useState(false);

    const manejarMeGustas = ()=>{
        if(!liked){
            setLikes(likes+1);
            setLiked(true);
        }else{
            setLikes(likes-1);
            setLiked(false);
        };
    };

    return (
        <div>
            <h1>Likes: {likes}</h1>
            <p>{liked ? 'Ya le distes me gusta' : 'Dale me gusta'}</p>
            <button onClick={manejarMeGustas}>Me gusta</button>
        </div>
    );
};
export default Contador;