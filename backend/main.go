package main

import (
	"log"
	"net/http"
	"os"
	"statify-backend/db"
	"statify-backend/handlers"

	"github.com/joho/godotenv"
	"github.com/rs/cors"
)

func main() {
	_ = godotenv.Load()

	db_path := os.Getenv("SPOTIFY_DB_PATH")
	site_url := os.Getenv("SITE_URL")
	db.Init_db(db_path)

	mux := http.NewServeMux()
	mux.HandleFunc("/api/spotify/callback", handlers.Spotify_callback_handler)

	handler := cors.New(cors.Options{
		AllowedOrigins:   []string{site_url},
		AllowCredentials: true,
		AllowedMethods:   []string{"GET", "POST"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
	}).Handler(mux)

	port := os.Getenv("PORT")

	log.Println("Server Running on http:localhost:" + port)
	log.Fatal(http.ListenAndServe(":"+port, handler))
}
