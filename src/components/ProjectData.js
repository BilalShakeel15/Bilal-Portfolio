import byteblog from "../projectMedia/byteblog.jpg";
import quizapp from "../projectMedia/Quiz app.jpg";
import palate from "../projectMedia/palate.jpg";
import news from '../projectMedia/newsapp.jpg'
import currency from '../projectMedia/currency.jpg'
import mealy from '../projectMedia/mealymoore.png'

const Palate='1hf7n_vRtnOFo10Zb1JY05sKScXyapLEw';
const ByteBlog='10aYS7_GMOQqNxanbgnnFpZ2_vmBq0FeU';
const QuizApp='1ReUXGnqE9_4uYwHXxV94-iwrse6K0Rz2';
const News='1Zoqp429s7f7b-AAfxxKZUKgkSQls978k';
const Currency='1N3zqPhjoXPB5_r0actz_mnHq20PYkOpf';
const Mealy='1htJon9XKfrstXVIrlEHugl726k6Unz9W';

const ProjectData = [
    {
        projId: 1,
        title: "Palate",
        projThumb: "Every Recipe Has a Story – Tell Yours on Palate!",
        projDetails: "Palate is a dynamic social platform for food enthusiasts, connecting home cooks and professional chefs to share, explore, and engage with recipes. Users can create and share their culinary masterpieces, discover diverse recipes, and interact through comments, likes, and shares.Built with .NET Core, SQL, and React.js, Palate offers a seamless, secure, and responsive experience, fostering creativity and community in the kitchen.",
        thumbImg: palate,
        vidUrl: Palate,
        techUsed: ["React", ".NET Core", "C#","SQL Server"],
        github:"https://github.com/BilalShakeel15/Palate-A-Social-Media-Recipe-App",
        
    },
    {
        projId: 2,
        title: "Byte Blog",
        projThumb: "Your voice, your blog – the world is listening!",
        projDetails:
            "ByteBlog is a feature-rich, full-stack blogging platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to create, manage, and engage with blogs seamlessly. The platform is designed for a smooth and responsive user experience, with robust backend support and secure authentication mechanisms.",
        thumbImg: byteblog,
        vidUrl: ByteBlog,
        techUsed: ["React", "Node.js", "MongoDB", "Express.js", "Bootstrap"],
        github:"https://github.com/BilalShakeel15/ByteBlog",
    },
    {
        projId: 3,
        title: "Quiz App",
        projThumb:
            "Random questions, real-time results, and endless fun!",
        projDetails:
            "The Quiz App is built with a .NET 8 Core C# backend and a React.js frontend. It features a question pool from which 5 random questions are selected for each quiz, stores participant data securely, and uses JWT authentication with role-based access for admins and users. The React.js frontend ensures smooth navigation and a user-friendly UI, with features like a timer, randomized questions, and result tracking. This app provides a seamless, interactive quiz experience.",
        thumbImg: quizapp,
        vidUrl: QuizApp,
        techUsed: ["React", ".NET Core", "SQL Server","Bootstrap"],
        github:"https://github.com/BilalShakeel15/Quiz-App",
    },
    {
        projId: 4,
        title: "News App",
        projThumb:
            "Bringing the world to your fingertips!",
        projDetails:
            "Built with React.js, this news app provides real-time updates from trusted sources, offering users the latest headlines across various categories. It fetches news data via a free API, displaying articles with author and source details. The app features a responsive design for seamless browsing on any device. Technologies used: React.js, free news API, and CSS for responsive design.",
        thumbImg: news,
        vidUrl: News,
        techUsed: ["React", ".NET Core", "SQL Server","Bootstrap"],
        github:"https://github.com/BilalShakeel15/Newsapp",
    },
    {
        projId: 5,
        title: "Currency Converter",
        projThumb:
            "Convert Currencies on the Go!",
        projDetails:
            "This currency converter app, built with HTML, CSS, and JavaScript, provides real-time exchange rates through an integrated API. It allows users to quickly convert currencies and see updated values. The app's simple and user-friendly design ensures a smooth experience on both desktop and mobile devices.",
        thumbImg: currency,
        vidUrl: Currency,
        techUsed: ["HTML", "CSS", "Javascript"],
        github:"https://github.com/BilalShakeel15/Currency-Converter",
    },
    {
        projId: 6,
        title: "Mealy-Moore Converter",
        projThumb:
            "Automated Mealy-Moore Machine Conversion in Python!",
        projDetails:
            "This Python project automates the conversion between Mealy and Moore machines. It allows users to input a Mealy machine and generates the corresponding Moore machine, or vice versa. The implementation utilizes basic Python structures like lists and tuples, providing an efficient and easy-to-understand solution for automating finite state machine conversions.",
        thumbImg: mealy,
        vidUrl: Mealy,
        techUsed: ["Python", "Graphviz"],
        github:"https://github.com/BilalShakeel15/Mealy-Moore-Machine",
    },
    
];

export default ProjectData;
