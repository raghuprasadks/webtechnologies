$(document).ready(function(){
	var totalusers;
	$("button").click(function(){
		$.get("https://jsonplaceholder.typicode.com/users",function(users,status){
			console.log(users)
		console.log(users.length)
		totalusers=users.length
		console.log(status)
		$('span').text(totalusers);
		$.each(users,function(i,user){
			console.log(i)
			//name,email,city,website,company name

		$('table').append(`<tr><td>${user.name}</td><td>${user.email}</td><td>${user.address.city}</td><td>${user.website}</td><td>${user.company.name}</td></tr>`)
		})
	})
})
})