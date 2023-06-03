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
  // const navigate = useNavigate();

  return (
    <>
      {/* <div className="flex justify-center items-center flex-col">
        <img src={taskImage} className="h-96" alt="task-image" />
        <h1 className="text-2xl font-semibold dark:text-white">Welcome to Task Writer</h1>
        <div className="mt-4">
          <button onClick={() => navigate("/add-task")} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 font-semibold rounded-md">Add Task</button>
        </div>
      </div> */}
      <Hero />
      <Trial />
      <NewIdea />
      <Features />
      <Teams />
      <Portfolio />
      <Reviews />
      <Faq />
      <Subscribe />
      <DownloadApp />
    </>
  );
};

export default Home;