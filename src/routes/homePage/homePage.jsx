import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

const homePage = () => {
  return (
    <div className='homePage'>
        <div className="textContainer">
            <div className="wrapper">
                <h1 className="title">Find real Estate & Get Your Dream Place</h1>
                <p>A modern real estate platform that simplifies finding, buying, and renting homes. Seamlessly connect with properties tailored to your lifestyle in just a few clicks.</p>
                <SearchBar />
                <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>Years of Experience</h2>
                    </div>
                    <div className="box">
                        <h1>200</h1>
                        <h2>Award Gained</h2>
                    </div>
                    <div className="box">
                        <h1>1200+</h1>
                        <h2>Property Ready</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="imgContainer">
            <img src="/bg.png" alt="buildings" />
        </div>
    </div>
  )
}

export default homePage