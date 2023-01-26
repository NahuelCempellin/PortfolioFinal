import kmk1 from '../../assets/kmkland.jpeg'
import kmk2 from '../../assets/kmkcard.jpeg'
import kmk3 from '../../assets/kmkres.jpeg'
import kmk4 from '../../assets/kmkweb.jpeg'

import coall1 from '../../assets/coally.jpeg'


import galu1 from '../../assets/galuhome.jpeg'
import galu2 from '../../assets/galulight.jpeg'
import galu3 from '../../assets/galulog.jpeg'
import galu4 from '../../assets/galures.jpeg'


import creditCard from '../../assets/creditcard.jpeg'

import dash1 from '../../assets/dashl.jpeg'
import dash2 from '../../assets/dashboard.jpeg'

import portfolio from '../../assets/portfolio.jpeg'




export const Data=[
    {
        name:'Kenmukan web',
        projectType:'Freelance',
        images:{
            image1:kmk1,
            image2:kmk2,
            image3:kmk3,
            image4:kmk4,
        },
        tasks:'create page layout, perform frontend logic. Deploy',
        technologies:['Next.js','Styled.jsx','Javascript'],
        date:'08/20/2022',
        link:'https://kenmukan.vercel.app/',
        text:'It is a project still in development, where I am developing a web page for my martial arts dojo, with the idea of ​​attracting more students to the institution and spreading the word about the art of Japanese fencing.',
        client:{
            clientName:'Kenmukan kyokai',
            clientTestimony:'',
        }
    },
    {
        name:'Collaboration in Coally',
        projectType:'As contractor',
        images:{
            image1:coall1,
            image2:'',
            image3:'',
            image4:'',
        },
        tasks:'Frontend development based on a figma design. Bug fixes.',
        technologies:['React','Redux','Css','Material Ui'],
        date:'11-03-2022',
        link:'https://coally.com/home-coally',
        text:'Project in which I collaborate. My designated tasks were to develop programming logic, frontend development from a figma design, and bug fixes reported by the QA area.',
        client:{
            clientName:'Coally',
            clientTestimony:'',
        }
    },
    {
        name:'Galu pet hotel',
        projectType:'Freelance',
        images:{
            image1:galu1,
            image2:galu2,
            image3:galu3,
            image4:galu4,
        },
        tasks:'Frontend layout design - programming logic',
        technologies:['React','Vite','Tailwind-css','Redux','Javascript'],
        date:'12-09-2022',
        link:'',
        text:'Project in development, in which I made the design of the page and the programming logic.',
        client:{
            clientName:'Galu pet hotel',
            clientTestimony:'',
            
        }
    },
    {
        name:'Credit card generator',
        projectType:'Practice',
        images:{
            image1:creditCard,
            image2:'',
            image3:'',
            image4:'',
        },
        tasks:'Frontend development practice.',
        technologies:['React','Redux','Styled-components'],
        date:'08-08-2023',
        link:'https://credit-card-smoky.vercel.app',
        text:'Practice of frontend mentor.',
        client:{
            clientName:'John Doe',
            clientTestimony:'',
        }
    },
    {
        name:'Admin dashboard',
        projectType:'Practice',
        images:{
            image1:dash1,
            image2:dash2,
            image3:'',
            image4:'',
        },
        tasks:'',
        technologies:['React','Redux','Styled-components'],
        date:'08-09-2022',
        link:'https://switchermaster.vercel.app',
        text:'Frontend mentor practice',
        client:{
            clientName:'Practice',
            clientTestimony:'',
            date:'',
        }
    },
    {
        name:'First portfolio',
        projectType:'Practice',
        images:{
            image1:portfolio,
            image2:'',
            image3:'',
            image4:'',
        },
        tasks:'Frontend development',
        technologies:['Next.js','Styled.jsx'],
        date:'07-01-2022',
        link:'https://portfolio-mu-lovat-51.vercel.app',
        text:'My first portfolio developed after ending my studies',
        client:{
            clientName:'',
            clientTestimony:'',
            date:'',
        }
    },
]