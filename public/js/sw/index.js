self.addEventListener('fetch', function(event) {
	// TODO: respond to all requests with an html response
	// containing an element with class="a-winner-is-me".
	// Ensure the Content-Type of the response is "text/html"

	console.log("Caught a fetch!");
	event.respondWith(
		new Response("<h1 class="a-winner-is-me>HAYYY!</h1>", {
			headers: {'Content-Type': 'text/html'}
		})
	)

  console.log(event.request);
});