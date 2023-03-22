import homebuttonImage from "../../homeButtonImage.png";
import pageLeftImage from "../HomePageButtonImages/homePageLeftImage.png";
import pageTopRightButtonImage from "../HomePageButtonImages/lessonPageTopRightImage.png"

import video1 from "./video1.mp4";
import image1 from "./image1.png";

import video2 from "./video2.mp4";
import image2 from "./image2.png";

import video3 from "./video3.mp4";
import image3 from "./image3.png";

var pageRenderMapSpeakingGroup9 = 
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
  
var videoRenderMapSpeakingGroup9 = 
	{
		introVideo: video1,
		videoElementMarginLeftValue: "28",
		videoElementMarginTopValue: "2"
	};
	
var buttonRenderMapSpeakingGroup9 = [
	{
		position: "fixed",
		cursor: "pointer",
		height: "15vh",
		width: "25vh",
		marginTopValue: "1%",
		marginLeftValue: "32%",
		video: video1,
		image: image1
	},
	{
		position: "fixed",
		cursor: "pointer",
		height: "15vh",
		width: "25vh",
		marginTopValue: "1%",
		marginLeftValue: "47%",
		video: video2,
		image: image2
	},
	{
		position: "fixed",
		cursor: "pointer",
		height: "15vh",
		width: "25vh",
		marginTopValue: "1%",
		marginLeftValue: "62%",
		video: video3,
		image: image3
	}	
	];	
	
export { pageRenderMapSpeakingGroup9, videoRenderMapSpeakingGroup9, buttonRenderMapSpeakingGroup9 };
