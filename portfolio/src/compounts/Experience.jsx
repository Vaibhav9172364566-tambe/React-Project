
import C from '../../public/img/c.png'
import Bootstrap from '../../public/img/bootstrap.jpeg'
import Css from '../../public/img/css.jpeg'
import Git from '../../public/img/git.jpeg'
import Github from '../../public/img/github.png'
import Html from '../../public/img/html.png'
import Java from '../../public/img/java.jpeg'
import Mysql from '../../public/img/mysql.png'
import Python from '../../public/img/python.jpeg'
import SpringBoot from '../../public/img/springboot.png'
import Tailwindcss from '../../public/img/tailwindcss.jpeg'


function Experience() {
    const carditem = [
        { id: 1, logo: C, name: 'C' },
        { id: 2, logo: Bootstrap, name: 'Bootstrap' },
        { id: 3, logo: Css, name: 'CSS' },
        { id: 4, logo: Git, name: 'Git' },
        { id: 5, logo: Github, name: 'Github' },
        { id: 6, logo: Html, name: 'HTML' },
        { id: 7, logo: Java, name: 'Java' },
        { id: 8, logo: Mysql, name: 'MySQL' },
        { id: 9, logo: Python, name: 'Python' },
        { id: 10, logo: SpringBoot, name: 'SpringBoot' },
        { id: 11, logo: Tailwindcss, name: 'TailwindCSS' }
    ];


    return (

        <>

<div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
          I've more than 2 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {carditem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>



        </>
    )
}

export default Experience