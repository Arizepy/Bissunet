# This page simply runs the server and nothing more. 
from app import create_app

app = create_app()

if __name__ == "__main__":
    app.run(debug=False)