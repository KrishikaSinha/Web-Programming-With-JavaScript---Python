from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

contacts = []


# HOME
@app.route('/')
def index():
    search = request.args.get('search', '')
    
    if search:
        filtered = [c for c in contacts if search.lower() in c['name'].lower() or search in c['phone']]
    else:
        filtered = contacts

    return render_template('index.html', contacts=filtered)


# ADD CONTACT
@app.route('/add', methods=['GET', 'POST'])
def add():
    if request.method == 'POST':
        name = request.form['name']
        phone = request.form['phone']
        email = request.form['email']

        if name and phone and email:
            contacts.append({
                'id': len(contacts),
                'name': name,
                'phone': phone,
                'email': email
            })

        return redirect(url_for('index'))

    return render_template('add_contact.html')


# EDIT CONTACT
@app.route('/edit/<int:id>', methods=['GET', 'POST'])
def edit(id):
    contact = contacts[id]

    if request.method == 'POST':
        contact['name'] = request.form['name']
        contact['phone'] = request.form['phone']
        contact['email'] = request.form['email']
        return redirect(url_for('index'))

    return render_template('edit_contact.html', contact=contact)


# DELETE CONTACT
@app.route('/delete/<int:id>')
def delete(id):
    contacts.pop(id)

    for i, c in enumerate(contacts):
        c['id'] = i

    return redirect(url_for('index'))


if __name__ == '__main__':
    app.run(debug=True)