let baseUrl = "http://13.82.6.102:8000/" 

export const endPoints = {
    auth_user: baseUrl + 'api/Authentication/login',
    dashboard: baseUrl +'SMPLService/getallcompanyassessment',
    companyAssesment: baseUrl +'api/SMPLService/getallcompanyassessment',
    vaidateEmail: baseUrl + 'api/Authentication/validateemailuser',
    subscription : baseUrl +'SMPLService/getallsubscription',
    companyUdate: baseUrl +'SMPLService/updateorgprofile',
    companyById: baseUrl +'SMPLService/getcompanyidbyid',
    accessorLogin: baseUrl + 'api/Authentication/AssessorLoginWithCompanyId',
    changePassword: baseUrl + 'api/Authentication/ChangePassword',
    createNew: baseUrl + 'api/Authentication/createuser',
    getAllCountry: baseUrl + 'SMPLService/getallcountry',
    getAllUsers: baseUrl + 'SMPLService/getallcompanyusermaster',
    saveUser: baseUrl + 'SMPLService/save',
    subscriptionById: baseUrl +'SMPLService/Getlevelsubscriptiontypeid',
    getCitybyId: baseUrl + '/SMPLService/getallcity',
    deleteAssesment: baseUrl +'SMPLService/deleteaseesmentdetails',
    deleteUser: baseUrl + 'SMPLService/deletecopmanyuser',
    lockUser: baseUrl + 'SMPLService/suspendcopmanyuser',
    unlockUser: baseUrl + 'SMPLService/updatesuspendcopmanyuser'

}

