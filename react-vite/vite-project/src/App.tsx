import Hero from "./assets/hero.jpg"
import { FaFacebook } from "react-icons/fa";
const App = () => {
  return (
    // <div className="bg-yellow-400 text-4xl p-14 font-bold text-center">Hello this is the kartik kumar</div>
    <div className="flex justify-center items-center h-screen bg-sky-100" >
      <div className="bg-pink-200 h-[500px] w-[500px] rounded-2xl px-5 py-5 space-y-5">
        <h1 className="text-center text-4xl  font-bold">my name is kartik kumar</h1>
        <img src={Hero} alt="Hero" className="h-[100px]"/>
        <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id et est cumque nam nulla obcaecati. Quae ipsam distinctio porro. Beatae accusamus quis dolorum labore amet voluptas facere dolorem, praesentium itaque?
        Debitis voluptas dignissimos rerum molestias. Voluptatibus est esse doloribus, quasi quibusdam itaque, beatae assumenda, laborum pariatur ea eveniet sunt voluptatem soluta alias magni voluptates! Numquam maxime ab quaerat dicta molestias.</p>

        <a href="https://www.facebook.com/" target="blank">
        <button className="text-2xl hover:bg-blue-500"><FaFacebook /></button>
        </a>
      </div>
    </div>
  )
}

export default App
