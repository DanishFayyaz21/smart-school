export const defaultValuesLogin = {
   email: "",
   password: "",
};

export const defaultValuesAccount = (accountData) => {
   return {
      userName: accountData ? accountData.userName : "",
      email: accountData ? accountData.email : "",
      password: accountData ? accountData.password : "",
      confirmPassword: accountData ? accountData.confirmPassword : "",
      profileLink: accountData ? accountData.profileLink : "",
   };
};
export const defaultValuesPersonal = (personalData) => {
   return {
      firstName: personalData ? personalData.firstName : "",
      lastName: personalData ? personalData.lastName : "",
      country: personalData ? personalData.country : "Afghanistan",
      nationality: personalData ? personalData.nationality : "Afghan",
      gender: personalData ? personalData.gender : "",
      birthday: personalData ? personalData.birthday : "male",
   };
};
