# sudoku-ML
Building a NN model and teaching it how to play sudoku. 
# Sudoku Solver using Machine Learning

![Sudoku Solver](https://github.com/Tar-ive/sudoku-ML/blob/main/sudoku.png)

## Project Overview

This project implements a Sudoku solver using machine learning techniques, specifically employing a deep learning model to solve Sudoku puzzles. The solver is built using TensorFlow and Keras, and it's designed to learn the patterns and rules of Sudoku through training on a large dataset of puzzles.

## Features

- Custom Gym environment for Sudoku
- Convolutional Neural Network (CNN) model for Sudoku solving
- Sudoku puzzle generator for creating training data
- Training pipeline with callbacks for monitoring progress
- Evaluation and visualization of model performance
- Ability to solve new Sudoku puzzles using the trained model

## Requirements

- Python 3.7+
- TensorFlow 2.x
- Gymnasium
- NumPy
- Matplotlib

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/sudoku-solver-ml.git
   cd sudoku-solver-ml
   ```

2. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

## Usage

1. To train the model:
   ```
   python train_model.py
   ```

2. To solve a Sudoku puzzle:
   ```
   python solve_sudoku.py path/to/your/puzzle.txt
   ```

## Project Structure

- `sudoku_env.py`: Contains the Sudoku Gym environment
- `model.py`: Defines the CNN model architecture
- `data_generator.py`: Implements Sudoku puzzle generation
- `train_model.py`: Script for training the model
- `solve_sudoku.py`: Script for solving Sudoku puzzles using the trained model
- `utils.py`: Utility functions for data preprocessing and visualization

## Model Architecture

The current model uses a Convolutional Neural Network (CNN) architecture:

- Input layer: 9x9x1 (representing the Sudoku grid)
- Multiple Conv2D layers with ReLU activation
- Flatten layer
- Dense layer
- Reshape layer to 9x9x9 (representing possible digits for each cell)
- Softmax activation for final output

## Results

The model achieves an accuracy of X% on the test set. It can solve easy to medium difficulty Sudoku puzzles reliably, but may struggle with more complex puzzles.

## Future Improvements

- Implement data augmentation for increased training data diversity
- Experiment with more complex architectures (e.g., residual connections)
- Use curriculum learning, starting with easier puzzles
- Implement a custom loss function that penalizes invalid Sudoku solutions
- Try different optimization algorithms and learning rate schedules

## Contributing

Contributions to improve the solver are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
