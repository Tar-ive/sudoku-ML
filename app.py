from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This allows cross-origin requests

# Load the model
model = tf.keras.models.load_model('sudoku_solver_model.h5')

def preprocess_grid(grid):
    return np.array(grid).reshape(1, 9, 9, 1).astype('float32')

def postprocess_output(output):
    # Reshape the output to (9, 9, 9) and find the digit with highest probability for each cell
    reshaped = output.reshape(9, 9, 9)
    return np.argmax(reshaped, axis=2) + 1  # +1 because sudoku uses 1-9, not 0-8

@app.route('/solve', methods=['POST'])
def solve_sudoku():
    print("Received solve request")
    try:
        data = request.json
        print("Received data:", data)
        grid = data['grid']
        
        # Preprocess the grid
        input_data = preprocess_grid(grid)
        print("Preprocessed input shape:", input_data.shape)
        
        # Use the model to solve the Sudoku
        solved_output = model.predict(input_data)
        print("Model output shape:", solved_output.shape)
        print("Model output sample:", solved_output[0, :10])  # Print first 10 elements
        
        # Postprocess the output
        solved_grid = postprocess_output(solved_output)
        
        print("Solved grid shape:", solved_grid.shape)
        print("Solved grid:", solved_grid.tolist())
        return jsonify(solved_grid.tolist())
    except Exception as e:
        print("Error occurred:", str(e))
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)