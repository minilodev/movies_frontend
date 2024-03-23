import BannersCpn from "../HOME_CPN/BANNERS/banners";
import TrendingCpn from "../HOME_CPN/TRENDING/trending";
import TrailersCpn from "../HOME_CPN/TRAILERS/trailers";
import PopularCpn from "../HOME_CPN/POPULAR/popular";
import JoinCpn from "../HOME_CPN/JOIN/join";
import ProgressCpn from "../HOME_CPN/PROGRESS/progress";

const Home = () => {
    return (
        <>
            <BannersCpn />
            <TrendingCpn />
            <TrailersCpn />
            <PopularCpn />
            <JoinCpn />
            <ProgressCpn />
        </>
    );
}
export default Home;
