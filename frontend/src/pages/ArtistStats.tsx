import { ArtistCard } from "../components/ArtistCard";
import "../styles/ArtistStats.css";

function ArtistStats(){


    return (
        <>
            <div id="card-wrapper">
                <ArtistCard name="Kendrick Lamar" imageUrl="https://i.scdn.co/image/ab6761610000e5eb39ba6dcd4355c03de0b50918"/>
            </div>
        </>
            
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