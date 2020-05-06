from flask import Flask, render_template, url_for, request
import mysql.connector
from mysql.connector import errorcode
from classfile import *

app = Flask(__name__)

@app.route("/", methods=['GET','POST'])
def home():
    
    if request.method == 'POST' and 'email1' in request.form and 'password1' in request.form:
        email1 = request.form['email1']
        password1 = request.form['password1']
        if query_data(table='users', column1='email', key1=email1, column2='password', key2=password1):
            print('yes')
        else:
            print('no')
        status=False
    elif request.method == 'POST' and 'username2' in request.form and 'email2' in request.form and 'password2' in request.form:
        username2 = request.form['username2']
        password2 = request.form['password2']
        email2 = request.form['email2']
        user = User(username = username2, email = email2, password = password2)
        status = user.register()
    else:
        status=False
    return render_template("home-page.html", status=status)


