import { REGISTER } from '.';
import falcorModel from '../model/falcorModel';

async function register(newUserModel) {
  await falcorModel
    .call(['register'], [newUserModel])
    .then(result => result);

  const newUserId = await falcorModel.getValue(['register', 'newUserId']);

  let registrationResult = null;
  if (newUserId === 'INVALID') {
    const errorRes = await falcorModel.getValue('register.error');
    registrationResult = { registrationError: errorRes };
  } else if (newUserId) {
    registrationResult = { registrationSuccess: true };
  }

  return registrationResult;
}

export default (newUserInfo) => {
  let result = null;
  if (newUserInfo) {
    result = register(newUserInfo);
  }

  return {
    type: REGISTER,
    payload: result,
  };
};
