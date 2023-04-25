const express = require('express');

const app = express();
const PORT = 3000;

app.use((req, res) => {

});

app.listen(PORT, (err) => {
	if (err) {
		console.error(err);
		return;
	}

	console.log(`Listening on :${PORT}`);
});
