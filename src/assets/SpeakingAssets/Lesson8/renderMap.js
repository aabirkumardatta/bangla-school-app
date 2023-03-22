import homebuttonImage from "../../homeButtonImage.png";
import pageLeftImage from "../HomePageButtonImages/homePageLeftImage.png";
import pageTopRightButtonImage from "../HomePageButtonImages/lessonPageTopRightImage.png"

import video1 from "./video1.mp4";
import image1 from "./image1.png";

import video2 from "./video2.mp4";
import image2 from "./image2.png";

var pageRenderMapSpeakingGroup8 = 
	{
		homePageLink: "/speakingHomePage",
		homePageButtonWidth: "12vh",
		homePageButtonHeight: "12vh",
		homePageButtonImage: homebuttonImage,
			
		pageTopRightButtonLink: "/speakingGroupTwo",
		pageTopRightButtonWidth: "12vh",
		pageTopRightButtonHeight: "12vh",
		pageTopRightButtonImage: pageTopRightButtonImage,
		pageTopRightButtonVisibility: "visible",
		pageTopRightButtonCursor: "default",

		pageLeftImageWidth: "20%",
		pageLeftImageHeight: "20%",
		pageLeftImage: pageLeftImage,
	};
  
var videoRenderMapSpeakingGroup8 = 
	{
		introVideo: video1,
		videoElementMarginLeftValue: "28",
		videoElementMarginTopValue: "2"
	};
	
var buttonRenderMapSpeakingGroup8 = [
	{
		position: "fixed",
		cursor: "pointer",
		height: "15vh",
		width: "25vh",
		marginTopValue: "1%",
		marginLeftValue: "38%",
		video: video1,
		image: image1
	},
	{
		position: "fixed",
		cursor: "pointer",
		height: "15vh",
		width: "40vh",
		marginTopValue: "1%",
		marginLeftValue: "52%",
		video: video2,
		image: image2
	}	
	];	
	
export { pageRenderMapSpeakingGroup8, videoRenderMapSpeakingGroup8, buttonRenderMapSpeakingGroup8 };
