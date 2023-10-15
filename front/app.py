from starlette.responses import FileResponse
from starlette.requests import Request
from starlette.applications import Starlette
from starlette.staticfiles import StaticFiles
import uvicorn
from fastapi.middleware.gzip import GZipMiddleware


def root(request: Request) -> FileResponse:
    return FileResponse("dist/moretech/index.html")


app = Starlette()
app.add_route("/", root, methods=["GET"])
app.mount("/", StaticFiles(directory="dist/moretech"))
app.add_middleware(GZipMiddleware, minimum_size=1000)

if __name__ == "__main__":
    uvicorn.run(
        app,
        host="0.0.0.0",
        port=80,
        proxy_headers=True,
    )
