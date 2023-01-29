import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();

  return Promise.all([photo, user])
    .then((value) => {
      const profile = value[0].body;
      const first = value[1].firstName;
      const last = value[1].lastName;

      console.log(
        `${profile} ${first} ${last}`,
      );
    })
    .catch(() => console.log('Signup system offline'));
}
