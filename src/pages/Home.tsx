import img from '../assets/img/img_2.png';

// import Link
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
        <div className="flex flex-col justify-center items-center w-[90%] lg:w-1/3 py-14 bg-white rounded-xl">
            <img src={img} width={200} alt="" />
            <h1 className="text-[48px] text-[#9bbf9d] tracking-wider font-semibold my-4">Quizz App</h1>
            <p className="max-w-[440px] leading-relaxed mb-4">Relevez le challenge !</p>
            <p className="max-w-[440px] leading-relaxed mb-4">Connaissez-vous réellement Ecotree ?</p>

            <Link to={'/quizz'} className="h-[60px] bg-primary-green hover:bg-[#304b31] px-8 rounded-full transition flex items-center text-lg font-medium outline-none text-white">
                Commencer le quizz
            </Link>
        </div>
    </>
  )
}

export default Home