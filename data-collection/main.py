from collect_data import collect_data_and_format
from data_handling import store_stats_in_db

def main():
    
    json_data_obj = None
    json_data_obj = collect_data_and_format()
    
    ret_code = store_stats_in_db(json_data_obj)
    return ret_code

if __name__ == "__main__":
    main()
    

    