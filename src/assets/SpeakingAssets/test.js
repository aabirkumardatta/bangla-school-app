import homebuttonImage from "../homeButtonImage.png";
import pageLeftImage from "./HomePageButtonImages/homePageLeftImage.png";
import video1 from "./Lesson1/1.mp4";

var pageRenderMap = 
	{
		homePageLink: "/speakingHomePage",
		homePageButtonWidth: "12vh",
		homePageButtonHeight: "12vh",
		homePageButtonImage: homebuttonImage,
			
		pageTopRightButtonLink: "/speakingGroupOne",
		pageTopRightButtonWidth: "12vh",
		pageTopRightButtonHeight: "12vh",
		pageTopRightButtonImage: homebuttonImage,
		pageTopRightButtonVisibility: "visible",
		pageTopRightButtonCursor: "default",

		pageLeftImageWidth: "20%",
		pageLeftImageHeight: "20%",
		pageLeftImage: pageLeftImage,
	};
  
var videoRenderMap = 
	{
		introVideo: video1,
		videoElementMarginLeftValue: "28",
		videoElementMarginTopValue: "2"
	};
	
export { pageRenderMap, videoRenderMap };
