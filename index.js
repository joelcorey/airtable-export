var fs = require('fs');

const getAPI = async () => {
	const res = await fetch(`https://api.airtable.com/v0/${process.env.BASE_ID}/${process.env.TABLE_ID}`, {
		method: "GET",
		withCredentials: true,
		headers: {
			"Authorization": `Bearer ${process.env.AIRTABLE_API_KEY_READ_ONLY}`,
			"Content-Type": "application/json"
		}
	})

	if (res.ok) {
		const data = await res.json();

		// manually change output file name here if you want
		fs.writeFile ("data.json", JSON.stringify(data), function(err) {
			if (err) throw err;
			console.log('complete');
		}
	);
	}

	if (res.status != 200) {
		console.log(res)
	}
};

getAPI();
