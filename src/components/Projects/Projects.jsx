import "./projects.scss";
import news from './images/news.png'
import tensorflow from './images/tensorflow.png'
import personal from "./images/portfolio.png";
import Rotate from 'react-reveal/Rotate'
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';

export default function Projects() {
    const data = [
        {
          id: 1,
          name: "News",
          title: "News Site",
          img:
            news,
          link: "https://github.com/singhrujaan/NewsSite",
          desc:
            "News site using react- fetches an api from newsapi.org and displays top headlines from different categories",

        },
        {
          id: 2,
          name: "Image recognition",
          title: "Image Recognition using Tensorflow",
          img:
            tensorflow,
          link: "https://github.com/singhrujaan/Image-recognition-using-tensorflow",
          desc:
            "Image recognition backend using tensorflow, recognizes the input image and shows description of it",
          featured: true,
        },
        {
          id: 3,
          name: "Portfolio",
          title: "Personal Portfolio",
          img:
            personal,
          link: "https://github.com/singhrujaan/",
          desc:
            "Personal Portfolio site using react",
        },
      ];

    return (
        <div className="projects" id="projects">
            <h1 className="title mt-5"><Rotate top left cascade>Projects</Rotate></h1>
            <div className="container row">
                {data.map((item)=>(<div className="card col-sm-12 col-lg-4" key={item.id}>
                    <div className="img">
                    <Slide top><img src={item.img} alt={item.name}/></Slide>
                    </div>
                    <Flip bottom cascade>
                      <div className="title">
                        {item.title}
                    </div>
                    </Flip>
                    <Slide bottom><div className="desc">
                        {item.desc}
                    </div>
                    </Slide>
                    <button><a href={item.link} target='_blank' rel="noreferrer">GitHub</a></button>
                </div>))}
            </div>
        </div>
    );
}
