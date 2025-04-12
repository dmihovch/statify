import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function SpotifyCallback(){
    const [params] = useSearchParams();
    const code = params.get("code");
    const nav = useNavigate();

    useEffect(()=>{
        const send_code_to_backend = async () => {
            if(!code){
                return;
            }

            await fetch("http://localhost:8080/api/spotify/callback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({code})
            });
            nav("/user-profile");
        };
        send_code_to_backend();
    }, [code,nav]);

    return <p>Linking Spotify Account</p>;
}
export default SpotifyCallback;