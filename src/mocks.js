import moment from "moment";

export const user = {
    id: 1,
    name: 'Dan Morton',
    title: 'Technology Consultant - Software Engineering',
    company: 'West Monroe partners',
    profileImage: 'https://avatars0.githubusercontent.com/u/10928036?s=460&v=4',
    email: 'dmorton@wmp.com',
    linkedin: 'https://www.linkedin.com/in/dan-morton-a10a83101',
    github: 'https://github.com/dmorton2297',
    summary: 'I am a software engineer out of Chicago IL. I am a huge fan of Javascript. You can typically find me writing React. I work professionally as a technology consultant at West Monroe Partners.',
    tags: ['Javascript', 'React', 'Angular', 'Node', 'Hooks'],
    projects: [
        {
            id: 1,
            name: 'Streamline',
            description: 'Task management software with integrated ML to analyze/predict task estimation.',
            images: []
        }
    ]
};

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
export const projects = [
    {
        id: 1,
        name: 'News Wesbite',
        description: lorem,
        github: 'http://google.com',
        image: 'gs://pres-demo.appspot.com/project1.png',
        projectLink: 'http://google.com',
        createdAt: moment().format(),
        updatedAt: moment().format(),
        tags: ['Tag1', 'Tag2', 'Tag3']
    },
    {
        id: 2,
        name: 'Spoof News Wesbite',
        description: lorem,
        github: 'http://google.com',
        image: 'gs://pres-demo.appspot.com/project2.png',
        projectLink: 'http://google.com',
        createdAt: moment().format(),
        updatedAt: moment().format(),
        tags: ['Tag1', 'Tag2', 'Tag3']
    },
    {
        id: 3,
        name: 'News Wesbite',
        description: lorem,
        github: 'http://google.com',
        image: 'gs://pres-demo.appspot.com/project3.png',
        projectLink: 'http://google.com',
        createdAt: moment().format(),
        updatedAt: moment().format(),
        tags: ['Tag1', 'Tag2', 'Tag3']
    }
]