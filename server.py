import web

urls = (
    '/', 'index'
    )

app = web.application(urls, globals())

class index:
    def GET(self):
        return "This is a Python Server"
