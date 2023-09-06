import "./Banner.scss";
import BannerImg from "../../../assets/headphones.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
          "Discover Your Digital World at G Store Your Ultimate Destination for Cutting-Edge Electronics!"
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="bannerImg" />
      </div>
    </div>
  );
};

export default Banner;
