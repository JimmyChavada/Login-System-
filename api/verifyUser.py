import loginDB as db

# Initialize the UserDB instance
user_db = db.UserDB()


def check_existing(email, password): 
     data = user_db.fetch_data(f"SELECT email, password FROM login_info.login WHERE email='{email}' AND password='{password}' ")
     print(data)
     if data: 
          email = data[0][0]
          password = data[0][1]
          return True
     else: 
          return False
     


     return False


def check_existing_register(email, password): 
     data = user_db.fetch_data(f"SELECT email, password FROM login_info.login WHERE email='{email}' OR password='{password}' ")
     print(data)
     if data: 
          email = data[0][0]
          password = data[0][1]
          return True
     else: 
          return False
     



     
     
