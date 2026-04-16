"""
Project: Simple Blog (Experiment-5)
Name: Krishika Sinha
Date: 2026
"""

from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Temporary storage (no database)
posts = []


# HOME - Display all posts
@app.route('/')
def index():
    return render_template('index.html', posts=posts)


# CREATE POST
@app.route('/create', methods=['GET', 'POST'])
def create():
    if request.method == 'POST':
        title = request.form['title']
        content = request.form['content']

        posts.append({
            'id': len(posts),
            'title': title,
            'content': content
        })

        return redirect(url_for('index'))

    return render_template('create.html')


# EDIT POST
@app.route('/edit/<int:id>', methods=['GET', 'POST'])
def edit(id):
    post = posts[id]

    if request.method == 'POST':
        post['title'] = request.form['title']
        post['content'] = request.form['content']
        return redirect(url_for('index'))

    return render_template('edit.html', post=post)


# DELETE POST
@app.route('/delete/<int:id>')
def delete(id):
    posts.pop(id)

    # Reassign IDs after deletion
    for i, post in enumerate(posts):
        post['id'] = i

    return redirect(url_for('index'))


if __name__ == '__main__':
    app.run(debug=True)