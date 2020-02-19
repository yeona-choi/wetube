import routes from "../routes";
import Video from "../models/Video";
//export const home = (req, res) => res.send('Home');

// async : js가 우릴 기다리게 해줌.  (await은 async와 같이쓰임.)
export const home = async (req, res) => {
    try {
        const videos = await Video.find({}).sort({ _id: -1 }); // DB에 있는 모든 Video를 가져올동안 기다려라 
        //throw Error("### Erroor ###");
        res.render('home', { pageTitle: "Home", videos });
        //=> res.render('home', { pageTitle: "Home" });
    } catch (error) {
        console.log(error);
        res.render('home', { pageTitle: "Home", videos: [] });
    }
};

export const search = async (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    let videos = [];
    try {
        videos = await Video.find({
            title: { $regex: searchingBy, $options: "i" }
        });
    } catch (error) {
        console.log(error);
    }
    res.render("search", { pageTitle: "Search", searchingBy, videos });
};
//export const videos = (req, res) => res.render('videos', { pageTitle: "Videos" });
export const getUpload = (req, res) => res.render('upload', { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
    const {
        //body, file
        body: { title, description },
        file: { path }
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    })
    //console.log(newVideo);
    //res.render('upload', { pageTitle: "Upload" }); //test
    // To Do: Upload and save video
    res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        res.render('videoDetail', { pageTitle: video.title, video });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
}
export const getEditVideo = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
    } catch (error) {
        res.redirect(routes.home);
    }
};

export const postEditVideo = async (req, res) => {
    const {
        params: { id },
        body: { title, description }
    } = req;
    try {
        await Video.findOneAndUpdate({ _id: id }, { title, description });
        res.redirect(routes.videoDetail(id));
    } catch (error) {
        res.redirect(routes.home);
    }
};
export const deleteVideo = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        await Video.findOneAndRemove({ _id: id });
    } catch (error) {
        console.log(error);
    }
    res.redirect(routes.home);
}


