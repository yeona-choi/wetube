import routes from "../routes";
import Video from "../models/Video";
//export const home = (req, res) => res.send('Home');

// async : js가 우릴 기다리게 해줌.  (await은 async와 같이쓰임.)
export const home = async (req, res) => {
    try {
        const videos = await Video.find({}); // DB에 있는 모든 Video를 가져올동안 기다려라 
        throw Error("### Erroor ###");
        res.render('home', { pageTitle: "Home", videos });
        //=> res.render('home', { pageTitle: "Home" });
    } catch (error) {
        console.log(error);
        res.render('home', { pageTitle: "Home", videos: [] });
    }
};

export const search = (req, res) => {
    //console.log(req.query.term);
    //const searchingBy = req.query.term => const {} = req;
    const {
        query: { term: searchingBy }
    } = req;                                    //searchingBy : searchingBy === searchingBy
    res.render('search', { pageTitle: "Search", searchingBy, videos });
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
    console.log(newVideo);
    //res.render('upload', { pageTitle: "Upload" }); //test
    // To Do: Upload and save video
    res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = (req, res) => res.render('videoDetail', { pageTitle: "VideoDetail" });
export const editVideo = (req, res) => res.render('editVideo', { pageTitle: "EditVideo" });
export const deleteVideo = (req, res) => res.render('deleteVideo', { pageTitle: "DeleteVideo" });


