import spotipy
from spotipy.oauth2 import SpotifyOAuth
from dotenv import load_dotenv
import os



load_dotenv()

client_id = os.getenv("SPOTIFY_CLIENT_ID")
client_secret = os.getenv("SPOTIFY_CLIENT_SECRET")
redirect_uri = os.getenv("SPOTIFY_REDIRECT_URI")


scope = "user-library-read user-library-modify playlist-modify-private playlist-modify-public user-top-read user-read-playback-state user-modify-playback-state app-remote-control user-read-private streaming"
#gives full control, might change later


oauth = (
    client_id,
    client_secret,
    redirect_uri,
    scope
)


sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=client_id,client_secret=client_secret,redirect_uri=redirect_uri,scope=scope))

top_tracks = sp.current_user_top_tracks(time_range="short_term")
top_artists = sp.current_user_top_artists(limit=1, time_range="short_term")


print(top_artists['items'][0]['genres'])


'''
for idx, track in enumerate(top_tracks['items']):
    print(f"{idx+1}. {track['name']} by {track['artists'][0]['name']}")
    
    
print("TOP ARTISTS")
for id, artist in enumerate(top_artists['items']):
    print(f"{id+1}.",artist['name'])
'''