from flask import redirect, request, session
from flask_admin import AdminIndexView
import urllib.parse

class MyAdminIndexView(AdminIndexView):
    def is_accessible(self):
        # Only allow access if the admin is authenticated (via a session flag)
        return session.get("admin_authenticated", False)

    def inaccessible_callback(self, name, **kwargs):
        # Redirect unauthorized users to your admin login page. Change codespaces url to domain in production
        login_url = "https://www.bolaca.cl" # "https://scaling-carnival-qwwrqg4745vhx4pr-3000.app.github.dev/login"
        # URL-encode the next parameter
        next_param = urllib.parse.quote(request.url)
        return redirect(f"{login_url}?next={next_param}")
