(async () => {
  try {
    const userData = await fetch("https://randomuser.me/api/?results=10");
    if (!userData.ok) {
      throw new Error(`API request failed with status: ${userData.status}`);
    }
    const data = await userData.json();
    const userContainer = document.getElementById("user-data");
    data.results.forEach((user) => {
      console.log(user);
      userContainer.innerHTML += `<img src="${user.picture.large}">`;
      userContainer.innerHTML += `<p>Name: ${user.name.first} ${user.name.last}</p>`;
      userContainer.innerHTML += ` <p>Email: ${user.email}</p> `;
      userContainer.innerHTML += ` <p>Phone: ${user.phone}</p> `;
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
})();
