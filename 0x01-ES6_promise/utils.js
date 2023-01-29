export function uploadPhoto() {
	return Promise.resolve({
		'status': 200,
		'body': 'photo-profile-1'
	});
}


export function createUser() {
	return Promsise.resolve({
		'firstName': 'Guillaume',
		'lastName': 'Salva'
	});
}
