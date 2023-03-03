enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
}

type User = {
  username: string;
  role: ROLES
}

const nicoUser: User ={
  username: "Nicobyte",
  role: ROLES.ADMIN
}

console.log(nicoUser)
