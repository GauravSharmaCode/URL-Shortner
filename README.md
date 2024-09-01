# URL Shortner

This is a small project. Make a URL Shortner Service that takes a valid URL and returns a shortend URL, redirecting the user to the previously provided/input URL. 

This also keeps track of total visits/clicks on the URL.


## Routes

POST / URL - Generates a new short URL and returns the shortend URL in the format example.com/random-id

GET/:id - Redirects the user to original URL

GET/URL/analytics/:id - Returns the clicks for the provided URL short id.

