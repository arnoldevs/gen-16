(async () => {
	try {
		const userData = await fetch("https://randomuser.me/api/?results=10");
		// Check if the request was successful
		if (!userData.ok) {
			// If not successful, throw an error with details
			throw new Error(`API request failed with status: ${userData.status}`);
		}
		const data = await userData.json();
		// Get the element with ID "user-data" where user information will be displayed
		const userContainer = document.getElementById("user-data");
		data.results.forEach((user) => {
			userContainer.innerHTML += `<img src="${user.picture.large}" alt="person image">`;
			userContainer.innerHTML += `<p>Name: ${user.name.first} ${user.name.last}</p>`;
			userContainer.innerHTML += ` <p>Email: ${user.email}</p> `;
			userContainer.innerHTML += ` <p>Phone: ${user.phone}</p> `;
		});
	} catch (error) {
		// If any errors occur during the process, log them to the console
		console.error("Error fetching user data:", error);
	}
})();
