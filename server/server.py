from flask import Flask, jsonify, request
from mock_data import contacts
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///contacts.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=True)
    phone_number = db.Column(db.String(15), nullable=True)



# App routes
@app.route('/view_contacts', methods=['GET'])
def view_contacts():
    contacts = Contact.query.all()
    contacts_data = [{'id': contact.id, 'name': contact.name, 'phone_number': contact.phone_number} for contact in contacts]
    print(contacts)
    return jsonify({'contacts': contacts_data})

@app.route('/add_contact', methods=['POST'])
def add_contact():
    data = request.get_json()
    new_contact = Contact(name=data['name'], phone_number=data['number'])
    db.session.add(new_contact)
    db.session.commit()
    return jsonify({'message': 'Contact added successfully'})

@app.route('/delete_contact/<int:contact_id>', methods=['DELETE'])
def delete_contact(contact_id):
    contact = Contact.query.get(contact_id)
    if contact:
        db.session.delete(contact)
        db.session.commit()
        return jsonify({'message': 'Contact deleted successfully'})
    else:
        return jsonify({'message': 'Contact not found'})

# @app.route("/data", methods=['GET'])
# def get_contacts():
#     return jsonify({"contacts": contacts})

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)