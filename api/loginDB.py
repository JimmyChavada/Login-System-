import mysql.connector

class UserDB:
    def __init__(self):
        self.connection = mysql.connector.connect(
            host="localhost",
            user="root",
            password="jimmyz123p",
            database="login_info"
        )
        self.cursor = self.connection.cursor()

    def execute_query(self, query, params=None):
        self.cursor.execute(query, params)
        self.connection.commit()

    def fetch_data(self, query, params=None):
        self.cursor.execute(query, params)
        result = self.cursor.fetchall()
        return result

    def close(self):
        self.cursor.close()
        self.connection.close()