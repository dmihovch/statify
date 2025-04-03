import "../styles/ArtistCard.css";


export type ArtistCardProps = {
    name: string;
    imageUrl: string;
};

export function ArtistCard({name,imageUrl}: ArtistCardProps){
    return ( 
        <div className="artist-card">
            <div className="artist-card-wrapper">
                <img src={imageUrl} alt={`${name}'s Spotify Profile Picture`} className="artist-card-image" />
                <p className="artist-card-name">{name}</p>
            </div>
        </div>
    );
}