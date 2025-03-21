import sqlite3 as sql
import json

def store_stats_in_db(stats_obj_json):
    
    
    if stats_obj_json == None:
        return 1
    
    ret_code = 0
    conn = None
    try:
        conn = sql.connect("../database/spotify_stats.db")
        cursor = conn.cursor()
        
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS stats (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                json_data TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP            
            )
        """)
        
        cursor.execute("INSERT INTO stats (json_data) VALUES (?)", (json.dumps(stats_obj_json),))
        
        conn.commit()
    
    except sql.Error as e:
        print("SQL error:",e)
        ret_code = 1
        
    finally:
        if conn:
            conn.close()
        return ret_code
    
    
