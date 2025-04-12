import { useUser } from "@clerk/clerk-react";
import { Button } from "react-bootstrap";

function LinkSpotify(){
    const {user} = useUser();

    const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const redirect_uri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
    const scope = "user-read-private user-read-email user-top-read";

    const spotify_auth = () =>{
        const auth_url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirect_uri)}`;
        window.location.href = auth_url;
    }

    return (
        <>
            <h1>User Profile</h1>
            <p>Welcome, {user?.fullName || "Unknown User"}</p>
            <Button onClick={spotify_auth}>Link Spotify Account</Button>
        </>
    )

}

export default LinkSpotify;