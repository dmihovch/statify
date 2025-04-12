package handlers

import (
	"encoding/json"
	"net/http"
	"statify-backend/utils"
)

type code_payload struct {
	Code string `json:"code"`
}

func Spotify_callback_handler(writer http.ResponseWriter, request *http.Request) {
	if request.Method != http.MethodPost {
		http.Error(writer, "Method Not Allowed", http.StatusMethodNotAllowed)
		return
	}

	var payload code_payload
	if err := json.NewDecoder(request.Body).Decode(&payload); err != nil {
		http.Error(writer, "Invalid JSON", http.StatusBadRequest)
		return
	}

	token_data, err := utils.Exchange_spotify_code(payload.Code)
	if err != nil {
		http.Error(writer, "Spotify token exchange failed", http.StatusBadRequest)
		return
	}

	writer.Header().Set("Content-Type", "application/json")
	json.NewEncoder(writer).Encode(token_data)
}
