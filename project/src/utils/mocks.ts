import { internet, name, datatype } from 'faker';
import { UserData } from 'src/types/user-data';

export const makeFakeUserData = (): UserData => ({
  id: datatype.number(),
  email: internet.email(),
  token: datatype.uuid(),
  avatarUrl: internet.avatar(),
  name: name.title(),
});
