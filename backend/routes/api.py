from flask import Blueprint, jsonify, request
import joblib

api_blueprint = Blueprint('api', __name__)

@api_blueprint.route('/predict', methods=['POST'])
def predict():
    model = joblib.load('model.pkl')
    data = request.json
    prediction = model.predict([data['features']])
    return jsonify({'prediction': prediction.tolist()})
