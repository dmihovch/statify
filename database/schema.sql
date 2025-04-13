CREATE TABLE IF NOT EXISTS users (
	clerk_id TEXT PRIMARY KEY,
	spotify_id TEXT,
	access_token TEXT NOT NULL,
	refresh_token TEXT NOT NULL,
	token_expiry INTEGER
);


CREATE TABLE IF NOT EXISTS stats (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	clerk_id TEXT NOT NULL,
	fetched_at INTEGER NOT NULL,
	data TEXT NOT NULL,
	FOREIGN KEY (clerk_id) REFERENCES users(clerk_id)
);

CREATE INDEX IF NOT EXISTS idx_stats_user_date
ON stats(clerk_id, fetched_at);