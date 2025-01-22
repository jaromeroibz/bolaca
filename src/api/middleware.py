# In a new file middleware.py
def setup_cors_middleware(app):
    @app.before_request
    def handle_preflight():
        if request.method == "OPTIONS":
            res = Response()
            res.headers['Access-Control-Allow-Origin'] = '*'
            res.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
            res.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
            return res

# In app.py
from middleware import setup_cors_middleware
setup_cors_middleware(app)
