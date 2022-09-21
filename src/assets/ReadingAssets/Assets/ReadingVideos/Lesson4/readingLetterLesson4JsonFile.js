import video1 from "./video1.mp4";
import video2 from "./video2.mp4";
import video3 from "./video3.mp4";

var readingLetterLesson4VideosArray = [
    { previousButtonVisibility: "hidden", nextButtonVisibility: "visible", previousObjectPosition: null, nextObjectPosition: 1, previousVideo: null, currentVideo: video1, nextVideo: video2},
	{ previousButtonVisibility: "visible", nextButtonVisibility: "visible", previousObjectPosition: 0, nextObjectPosition: 2, previousVideo: video1, currentVideo: video2, nextVideo: video3},
	{ previousButtonVisibility: "visible", nextButtonVisibility: "hidden", previousObjectPosition: 1, nextObjectPosition: null, previousVideo: video2, currentVideo: video3, nextVideo: null}
]

export default readingLetterLesson4VideosArray;