import homebuttonImage from "../../homeButtonImage.png";
import pageLeftImage from "../HomePageButtonImages/homePageLeftImage.png";
import pageTopRightButtonImage from "../HomePageButtonImages/lessonPageTopRightImage.png"

import video1 from "./video1.mp4";
import image1 from "./image1.png";

var pageRenderMapSpeakingGroup3 = 
	{
		homePageLink: "/speakingHomePage",
		homePageButtonWidth: "12vh",
		homePageButtonHeight: "12vh",
		homePageButtonImage: homebuttonImage,
			
		pageTopRightButtonLink: "/speakingGroupThree",
		pageTopRightButtonWidth: "12vh",
		pageTopRightButtonHeight: "12vh",
		pageTopRightButtonImage: pageTopRightButtonImage,
		pageTopRightButtonVisibility: "visible",
		pageTopRightButtonCursor: "default",

		pageLeftImageWidth: "20%",
		pageLeftImageHeight: "20%",
		pageLeftImage: pageLeftImage,
	};
  
var videoRenderMapSpeakingGroup3 = 
	{
		introVideo: video1,
		videoElementMarginLeftValue: "28",
		videoElementMarginTopValue: "2"
	};
	
var buttonRenderMapSpeakingGroup3 = [
	{
		position: "fixed",
		cursor: "pointer",
		height: "15vh",
		width: "40vh",
		marginTopValue: "1%",
		marginLeftValue: "45%",
		video: video1,
		image: image1
	}	
	];	
	
export { pageRenderMapSpeakingGroup3, videoRenderMapSpeakingGroup3, buttonRenderMapSpeakingGroup3 };
