var s = require('./index.css');
var api = require('./api/userApi');
const globalAny:any = global;
api.getUsers().then((result:any) => {
	let usersBody = "";

	result.forEach((user:any) =>{
		usersBody += `<tr>
				<td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
				<td>${user.id}</td>
				<td>${user.firstName}</td>
				<td>${user.lastName}</td>
				<td>${user.email}</td>
				</tr>`
	});

	globalAny.document.getElementById('users').innerHTML = usersBody;

	const deleteLinks = globalAny.document.getElementsByClassName('deleteUser');

	// Must use array.from to create a real array from a DOM collection
	// getElementsByClassname only returns an "array like" object

	Array.from(deleteLinks, link => {
		link.onclick = function (event:any) {
			const element = event.target;
			event.preventDefault();
			api.deleteUser(element.attributes["data-id"].value);
			const row = element.parentNode.parentNode;
			row.parentNode.removeChild(row);
		};
	});
});
