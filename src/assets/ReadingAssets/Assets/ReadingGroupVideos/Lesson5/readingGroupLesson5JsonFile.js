import video1 from "./video1.mp4";
import video2 from "./video2.mp4";
import video3 from "./video3.mp4";
import video4 from "./video4.mp4";
import video5 from "./video5.mp4";
import video6 from "./video6.mp4";

var readingGroupLesson5VideosArray = [
    { previousButtonVisibility: "hidden", nextButtonVisibility: "visible", previousObjectPosition: null, nextObjectPosition: 1, previousVideo: null, currentVideo: video1, nextVideo: video2},
	{ previousButtonVisibility: "visible", nextButtonVisibility: "visible", previousObjectPosition: 0, nextObjectPosition: 2, previousVideo: video1, currentVideo: video2, nextVideo: video3},
	{ previousButtonVisibility: "visible", nextButtonVisibility: "visible", previousObjectPosition: 1, nextObjectPosition: 3, previousVideo: video2, currentVideo: video3, nextVideo: video4},
	{ previousButtonVisibility: "visible", nextButtonVisibility: "visible", previousObjectPosition: 2, nextObjectPosition: 4, previousVideo: video3, currentVideo: video4, nextVideo: video5},
	{ previousButtonVisibility: "visible", nextButtonVisibility: "visible", previousObjectPosition: 3, nextObjectPosition: 5, previousVideo: video4, currentVideo: video5, nextVideo: video6},
	{ previousButtonVisibility: "visible", nextButtonVisibility: "hidden", previousObjectPosition: 4, nextObjectPosition: null, previousVideo: video5, currentVideo: video6, nextVideo: null}
]

export default readingGroupLesson5VideosArray;