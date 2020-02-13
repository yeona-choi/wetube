// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const EDIT_PROFILE = "/edit-profile";   /////
const CHANGE_PASSWORD = "/change-password"; ////
const USER_DETAIL = "/:id";


// Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";   //express가 : 값을 보면 변하는 값이라고 알아차림.
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

//  Object 생성
const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: (id) => {
        if (id) {
            return `/users/${id}`;
        } else {
            return USER_DETAIL;
        }
    },
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: (id) => {
        if (id) {
            return `/videos/${id}`;
        } else {
            return VIDEO_DETAIL;
        }
    },
    editVideo: EDIT_VIDEO,
    deleteVideo: DELETE_VIDEO
};

export default routes;