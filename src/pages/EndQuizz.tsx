import { Link } from 'react-router-dom';


import girl from '../assets/img/woman-reading-book-under-the-tree.gif'

const EndQuizz = () => {
  return (
    <>
        <div className="flex flex-col justify-center items-center w-[90%] lg:w-2/3 py-14 bg-white rounded-xl">
            <img src={girl} width={450} alt="" />
            <h1 className="text-[48px] text-[#9bbf9d] tracking-wider font-semibold my-4">Merci d'avoir joué au quizz !</h1>
            <p className="leading-relaxed mb-4">Vous pouvez cliquer sur le bouton ci-dessous pour revenir à la page d'accueil</p>
            <p className="leading-relaxed mb-4">A bientôt !</p>

            <Link to={'/'} className="h-[60px] bg-primary-green hover:bg-[#304b31] px-8 rounded-full transition flex items-center text-lg font-medium outline-none text-white">
                Revenir à l'accueil
            </Link>
        </div>
    </>
  )
}

export default EndQuizz