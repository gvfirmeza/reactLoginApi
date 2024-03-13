from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

db = {
    "users": []
}

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({"error": "Nome de usuário e senha são obrigatórios"}), 400

    for user in db['users']:
        if user['username'] == username:
            return jsonify({"error": "Nome de usuário já está em uso"}), 400

    db['users'].append({"username": username, "password": password})
    return jsonify({"message": "Usuário registrado com sucesso"}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({"error": "Nome de usuário e senha são obrigatórios"}), 400

    for user in db['users']:
        if user['username'] == username and user['password'] == password:
            return jsonify({"message": "Login bem-sucedido"}), 200

    return jsonify({"error": "Credenciais inválidas"}), 401

if __name__ == '__main__':
    app.run(debug=True)
