export const API_ROUTER = {
    ACCOUNT: {
        GET_GROUP_LIST: 'account/auth/groups',
        GROUP_ADD: 'account/auth/group/add',
        GROUP_UPDATE: 'account/auth/group/update/',
        GROUP_DETAIL: 'account/auth/group/detail/',
        DELETE_GROUP: 'account/auth/group/delete/',
        GET_PERMISSION_LIST: 'account/auth/permissions',
        LOGIN: '/auth/login',
        GET_GROUP_PERMISSION_LIST: 'account/auth/group-permissions',
        REFRESH_TOKEN:'auth/refresh-token'
    },
    REGISTER:{
        REGISTER_FORM: 'auth/register',
        SEND_OTP:'auth/otp',
        VERIFY:'auth/verify'

    },
    PASSWORD:{
        OTP_FORGOT_PASSWORD:'auth/otp-forgot-password',
        FORGOT_PASSWORD:'auth/forgot-password',
        CHANGE_PASSWORD:'auth/change-password',
    },

    //User

    USER: {
        PROFILE: '/v1/api/admin/profile',
        EDIT_PROFILE: 'api/edit-profile'
    },
    PRODUCT: {
        CREATE: '/v1/api/admin/products/create',
        UPDATE: '/v1/api/admin/products/update',
        UPDATE_STATUS: '/v1/api/admin/products/update-status',
        SEARCH: '/v1/api/user/products-no-auth/find-all-and-search-condition/',
        DELETE: '/v1/api/admin/products/delete/',
        DETAIL: '/v1/api/admin/products/get-detail/',
    },
};
