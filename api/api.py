from flask import Flask, jsonify
from flask_cors import CORS
import loginDB as db

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize the UserDB instance
user_db = db.UserDB()

@app.route('/')
def index(): 
    return 'index page'

@app.route('/send-data')
def send_data(): 
    # Fetch data from the User table
    data = user_db.fetch_data("SELECT * FROM login")
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
