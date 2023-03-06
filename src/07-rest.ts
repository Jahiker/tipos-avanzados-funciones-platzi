import { User, ROLES } from './01-enum';

const currentUser: User = {
  username: 'jakered',
  role: ROLES.CUSTOMER,
};

export const checkAdminRole = (): boolean => {
  if (currentUser.role === 'admin') {
    return true;
  }

  return false;
};

const rta = checkAdminRole();
console.log('🚀 ~ file: 07-rest.ts:17 ~ rta:', rta);

export const checkRole = (role1: string, role2: string): boolean => {
  if (currentUser.role === role1) {
    return true;
  }

  if (currentUser.role === role2) {
    return true;
  }

  return false;
};

const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log('🚀 ~ file: 07-rest.ts:32 ~ rta2:', rta2);

export const checkRoleV2 = (roles: string[]): boolean => {
  if (roles.includes(currentUser.role)) {
    return true;
  }

  return false;
};

const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
console.log('🚀 ~ file: 07-rest.ts:47 ~ rta3:', rta3);

export const checkRoleV3 = (...roles: string[]): boolean => {
  if (roles.includes(currentUser.role)) {
    return true;
  }

  return false;
};

const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log('🚀 ~ file: 07-rest.ts:54 ~ rta4:', rta4);
