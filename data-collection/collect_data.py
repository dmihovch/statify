import spotipy
from spotipy.oauth2 import SpotifyOAuth
from dotenv import load_dotenv
import os
import spotipy.exceptions as err




def collect_data_and_format():
    load_dotenv()

    client_id = os.getenv("SPOTIFY_CLIENT_ID")
    client_secret = os.getenv("SPOTIFY_CLIENT_SECRET")
    redirect_uri = os.getenv("SPOTIFY_REDIRECT_URI")


    if not all([client_id,client_secret,redirect_uri]):
        return None

    scope = "user-library-read user-library-modify playlist-modify-private playlist-modify-public user-top-read user-read-playback-state user-modify-playback-state app-remote-control user-read-private streaming"
    #gives full control, might change later




    try:
        sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=client_id,client_secret=client_secret,redirect_uri=redirect_uri,scope=scope))
    except err.SpotifyException:
        return None
        

    try:
        top_tracks = sp.current_user_top_tracks(time_range="short_term")
        top_artists = sp.current_user_top_artists(time_range="short_term")
    except err.SpotifyException:
        return None
        
    

    tt = top_tracks['items']
    ta = top_artists['items']


    json_obj = {
        "top_tracks" : [],
        "top_artists": []
    }



    #maybe should add handling in case one of the fields is missing? Don't know how that would happen, but ig it wouldn't hurt

    for track in tt:
        
        track_entry = {
            "track_name" : track['name'],
            "artists": [artist['name'] for artist in track['artists']],
            "popularity": track['popularity'],
            "image": track['album']['images'][0]['url']
        }
        
        json_obj["top_tracks"].append(track_entry)


    for artist in ta:
        artist_entry = {
            "name" : artist['name'],
            "popularity": artist['popularity'],
            "followers": artist['followers']['total'],
            "genres": artist['genres'],
            "image": artist['images'][0]['url']
        }
        json_obj['top_artists'].append(artist_entry)
    
    return json_obj





