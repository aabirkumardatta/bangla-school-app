import homebuttonImage from "../../homeButtonImage.png";
import pageLeftImage from "../HomePageButtonImages/homePageLeftImage.png";
import pageTopRightButtonImage from "../HomePageButtonImages/lessonPageTopRightImage.png"

import video1 from "./video1.mp4";
import image1 from "./image1.png";

var pageRenderMapSpeakingGroup4 = 
	{
		homePageLink: "/speakingHomePage",
		homePageButtonWidth: "12vh",
		homePageButtonHeight: "12vh",
		homePageButtonImage: homebuttonImage,
			
		pageTopRightButtonLink: "/speakingGroupFour",
		pageTopRightButtonWidth: "12vh",
		pageTopRightButtonHeight: "12vh",
		pageTopRightButtonImage: pageTopRightButtonImage,
		pageTopRightButtonVisibility: "visible",
		pageTopRightButtonCursor: "default",

		pageLeftImageWidth: "20%",
		pageLeftImageHeight: "20%",
		pageLeftImage: pageLeftImage,
	};
  
var videoRenderMapSpeakingGroup4 = 
	{
		introVideo: video1,
		videoElementMarginLeftValue: "28",
		videoElementMarginTopValue: "2"
	};
	
var buttonRenderMapSpeakingGroup4 = [
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
	
export { pageRenderMapSpeakingGroup4, videoRenderMapSpeakingGroup4, buttonRenderMapSpeakingGroup4 };
