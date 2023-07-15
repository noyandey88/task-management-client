/* eslint-disable jsx-a11y/img-redundant-alt */
import DownloadApp from '../downloadApp/DownloadApp';
import Faq from '../faq/Faq';
import Features from '../features/Features';
import Hero from '../hero/Hero';
import NewIdea from '../newIdea/NewIdea';
import Portfolio from '../portfolio/Portfolio';
import Reviews from '../reviews/Reviews';
import Subscribe from '../subscribe/Subscribe';
import Teams from '../teams/Teams';
import Trial from '../tiral/Trial';

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Features />
      <Trial />
      <Portfolio />
      <NewIdea />
      <Reviews />
      <Teams />
      <Faq />
      <Subscribe />
      <DownloadApp />
    </main>
  );
};

export default Home;