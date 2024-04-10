import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const res = [];

  try {
    const userPromise = signUpUser(firstName, lastName);
    const uploadPromise = uploadPhoto(fileName);

    const [user, upload] = await Promise.all([userPromise, uploadPromise]);

    res.push({ status: 'fulfilled', value: user });
    res.push({ status: 'fulfilled', value: upload });
  } catch (err) {
    res.push({
      status: 'rejected',
      value: err.toString(),
    });
  }

  return res;
}
