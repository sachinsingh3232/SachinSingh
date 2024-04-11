import chatApp from '../assets/svg/projects/chatApp.jpeg'
import blogApp from '../assets/svg/projects/blogApp.jpeg'
import netflixClone from '../assets/svg/projects/netflixClone.jpeg'
import quizApp from '../assets/svg/projects/quizApp.jpeg'
import taskManager from '../assets/svg/projects/taskManager.JPG'
import foodDelivery from '../assets/svg/projects/foodDelivery.JPG'
import weatherApp from '../assets/svg/projects/weatherApp.PNG'
import sudoko from '../assets/svg/projects/sudoko.JPG'
import face from '../assets/svg/projects/face.JPG'


export const projectsData = [
    {
        id: 8,
        projectName: 'FaceDetector-Login',
        projectDesc: 'Face-Login',
        tags: ['ReactJs', 'FaceApi.js', 'NodeJs'],
        code: 'https://github.com/sachinsingh3232/Face-Login',
        demo: 'https://codebugged-ai-front.vercel.app/',
        image: face
    },
    {
        id: 1,
        projectName: 'RealTime ChatApp',
        projectDesc: 'Register and start chatting with registered users.Create group add friends , can remove users from group as well.',
        tags: ['React', 'NodeJs', 'Socket.io','MongoDB'],
        code: 'https://github.com/sachinsingh3232/ChatAppFrontend',
        demo: 'https://chat-app-frontend-omega.vercel.app',
        image: chatApp
    },
    {
        id: 2,
        projectName: 'Quiz App',
        projectDesc: 'Challenge yourself with a 10-minute timer and three lifelines, all powered by the robust MERN stack.',
        tags: ['React', 'NodeJs', 'MongoDB'],
        code: 'https://github.com/sachinsingh3232/litmusFrontend',
        demo: 'https://litmusfrontend.vercel.app/',
        image: quizApp
    },
    {
        id: 3,
        projectName: 'BlogApp',
        projectDesc: 'A full-stack Blog App where you can write your blogs with an image.',
        tags: ['React', 'NodeJs', 'MySQL'],
        code: 'https://github.com/sachinsingh3232/BlogApp',
        demo: 'https://bloga32.vercel.app/',
        image: blogApp
    },
    {
        id: 6,
        projectName: 'Food Delivery App',
        projectDesc: 'Food Delivery App using paypal.',
        tags: ['NextJs', 'JWT', 'Nodejs'],
        code: 'https://github.com/sachinsingh3232/NextJs_Food_Delivery_App',
        demo: 'https://food-delivery-app-green.vercel.app/',
        image: foodDelivery
    },
    {
        id: 4,
        projectName: 'Netflix Clone',
        projectDesc: 'User can sign Up and after login he/she can watch different movies and trailer .',
        tags: ['React', 'NodeJs', 'MongoDb'],
        code: 'https://github.com/sachinsingh3232/BlogApp',
        demo: 'https://netflixclone-frontend.vercel.app',
        image: netflixClone
    },
    {
        id: 5,
        projectName: 'TaskManager',
        projectDesc: 'This project is for task Management. You can add, update and delete tasks.',
        tags: ['React', 'bcryptjs', 'JWT'],
        code: 'https://github.com/sachinsingh3232/taskManager',
        demo: 'https://tm-theta.vercel.app/',
        image: taskManager
    },
    {
        id: 7,
        projectName: 'Sudoko Solver',
        projectDesc: 'Sudoko',
        tags: ['HTML', 'CSS', 'JS'],
        code: 'https://github.com/sachinsingh3232/Sudoku-Solver',
        demo: 'https://sudoku-solver-iota-indol.vercel.app/',
        image: sudoko
    },
    {
        id: 8,
        projectName: 'WeatherApp',
        projectDesc: 'Search city and get the weather details.',
        tags: ['React', 'google-maps-react', 'axios'],
        code: 'https://github.com/sachinsingh3232/WeatherApp',
        demo: 'https://weather32.vercel.app/',
        image: weatherApp
    }
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
