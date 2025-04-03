import { ArtistCard, ArtistCardProps } from "../components/ArtistCard";
import "../styles/ArtistStats.css";

function ArtistStats(){

    const sample_artists: ArtistCardProps[] = [
        {name:"Kendrick Lamar", imageUrl: "https://i.scdn.co/image/ab6761610000e5eb39ba6dcd4355c03de0b50918"}, 
        {name: "J. Cole", imageUrl: "https://i.scdn.co/image/ab6761610000e5eb4b053c29fd4b317ff825f0dc"}, 
        {name: "Gunna", imageUrl: "https://i.scdn.co/image/ab6761610000e5ebb978b95b8e03351df8e103af"}
    ]

    return (
        <body>
            <div id="card-wrapper">
                <ArtistCard name="Kendrick Lamar" imageUrl="https://i.scdn.co/image/ab6761610000e5eb39ba6dcd4355c03de0b50918"/>
            </div>
        </body>
    );
}

export default ArtistStats;


/* 

<div className="card-wrapper">
            {sample_artists.map((artist, index)=>
                <ArtistCard key={index} name={artist.name} imageUrl={artist.imageUrl}/>
            )}
        </div> 


*/