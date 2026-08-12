"""No-cache static file server for EmotionChord (development only).

Python's `http.server` sends no Cache-Control header, so browsers apply
heuristic caching and may serve stale app.js / styles.css on refresh (the
version badge then shows an old value because the cached app.js overwrites it).

This handler adds `Cache-Control: no-cache, must-revalidate` to every response,
forcing the browser to revalidate each request (If-Modified-Since) so edits
always show up. Run via start.bat, or directly:

    uv run --no-project serve.py [port]
"""
import sys
import http.server


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, must-revalidate")
        self.send_header("Expires", "0")
        super().end_headers()


def main():
    port = 8000
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            print(f"Ignoring invalid port '{sys.argv[1]}', using {port}.")
    print(f"Serving '.' on port {port} (no-cache) ...")
    http.server.ThreadingHTTPServer(("", port), NoCacheHandler).serve_forever()


if __name__ == "__main__":
    main()
