import React, { createContext, useState } from "react";


export const ArticleContext = createContext();

export const ArticleProvider = ( props ) => {

    const [article, setArticle] = useState([
        {id:1,category:'Tourism', title:'AMRITSAR: GOLDEN CITY, HOLY CITY', image:'../images/amritsar.jpg', text:"The biggest attraction in Amritsar is, of course, Harmandir Sahib, more popularly known as the Golden Temple. Amritsar evolved around the Golden Temple, attending upon the vast hordes of pilgrims who flocked to it, and still do. The city is, in fact, named after the tank by which Guru Ram Dass cited his headquarters.", date:'March 10, 2022'},
    
        {id:2,category:'Tourism', title:'Madhya pradesh : The heart of incredible india', image:'../images/mp.jpg', text:"Madhya Pradesh can be described as the best state of the nation when it comes to the diversity of its tourism destinations.Madhya Pradesh is known as the “Heart of India” because of a lot many things that it has to offer. It has been home to cultural and spiritual heritage of almost all the religions. Innumerable monuments, intricately carved temples, stupas, forts and palaces are dotted all over the State. ", date:'March 10, 2022'},
    
    
        {id:3,category:'Tourism', title:'Spiti:The Dark Adventure', image:'../images/spiti.jpg', text:"The term Spiti means 'The Middle Land', as Spiti Valley separates India from Tibet. Scantily populated, Spiti is an adventure lover’s paradise, with a number of trekking trails that tourists can choose from. All of these treks start from Kaza (Spiti’s capital from where you make your base camp) to various peaks from where you can get panoramic views of the Himalayan mountains.", date:'March 12, 2022'},
    
    
        {id:4,category:'Tourism', title:'Jammu:the city of temples', image:'../images/raghunath-temple.jpg', text:"Jammu is justly famous for its temples. In fact it is known as the city of temples and the every fame of its tends to overshadow its palaces, forts, forests and powerful ziarats. If Bahu Mata is the presiding deity of Jammu, the dargah of Peer Budhan Ali Shah is the other shrine that protects Jammuites.", date:'March 14, 2022'},
    
        {id:5,category:'Fitness', title:'Calisthenics', image:'../images/cali.jpg', text:"It is an art form of using your own bodyweight as a means to maximize human power and athletic ability..Squats, push-ups, lunges, crunches, dips, jumping jacks, broad jumps, handstands-yep, all calisthenics.", date:'March 14, 2022'},

        {id:6,category:'Fitness', title:'Balance Fitness', image:'../images/download.jpg', text:"A balanced diet is a diet that contains differing kinds of foods in certain quantities and proportions so that the requirement for calories, proteins, minerals, vitamins and alternative nutrients is adequate and a small provision is reserved for additional nutrients to endure the short length of leanness.", date:'March 14, 2022'},

        {id:7,category:'Fitness', title:'Sprint', image:'../images/sprint.jpg', text:"If you want an efficient way to burn calories, increase your cardiovascular and muscular endurance, and take your physical fitness to the next level, then consider adding sprints and intervals to your workout routine.", date:'March 11, 2022'},

        {id:8,category:'Technology', title:'Blockchain: The Crypt-Analysis', image:'../images/block.jpg', text:"A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format.", date:'March 16, 2022'},

        {id:9,category:'Technology', title:'Cyber Security: The Future Ahead', image:'../images/home-img3.jpg', text:"Cyber security is the application of technologies, processes and controls to protect systems, networks, programs, devices and data from cyber attacks. It aims to reduce the risk of cyber attacks and protect against the unauthorised exploitation of systems, networks and technologies.", date:'March 16, 2022'},

        {id:10,category:'Technology', title:'Artificial Intelligence', image:'../images/ai.jpg', text:"Artificial intelligence (AI) is a wide-ranging branch of computer science concerned with building smart machines capable of performing tasks that typically require human intelligence.At its core, AI is the branch of computer science that aims to answer Turing's question in the affirmative.", date:'March 16, 2022'},

        {id:11,category:'Bollywood', title:'Vicky Kaushal-Katrina Kaif Look Madly In Love,', image:'../images/vk.jpg', text:"Vicky Kaushal and Katrina Kaif, who got married last year in a hush-hush ceremony, are undoubtedly one of the most loved and stylish couples in Bollywood. On Saturday night, Vicky-Katrina stepped out for dinner with their families. The couple was spotted by paparazzi holding hands,they looked head over heels in love with each other.", date:'March 16, 2022'},

        {id:12,category:'Bollywood', title:'The Kashmir Files', image:'../images/kf.jpg', text:"The Kashmir Files is a 2022 Indian Hindi-language drama film written and directed by Vivek Agnihotri. Produced by Zee Studios, the film is based on the exodus of Kashmiri Hindus during the Kashmir Insurgency. It stars Anupam Kher, Darshan Kumar, Mithun Chakraborty and Pallavi Joshi.", date:'March 16, 2022'},

        {id:13,category:'Bollywood', title:'John Abraham in Attack', image:'../images/attack.jpg', text:"Attack: Part 1 is an upcoming Indian Hindi-language science fiction action thriller film directed by Lakshya Raj Anand, who co-wrote the film with Sumit Batheja and Vishal Kapoor, based on a story by John Abraham, who stars in the film alongside Jacqueline Fernandez and Rakul Preet Singh.", date:'March 16, 2022'},

        {id:14,category:'Food', title:'kaladi kulcha', image:'../images/kk.jpg', text:"Kaladi​ is a traditional ripened cheese product indigenous to Udhampur, Jammu province of Jammu and Kashmir state of India.It is a very dense cheese that is usually sautéd in its own fat and salted while serving. Kaladi’s are usually made from cow’s or buffalo’s milk", date:'June 29, 2011'},

        {id:15,category:'Food', title:'Masala Dosa', image:'../images/default.jpg', text:"This classic Masala dosa recipe makes perfectly light, soft and crispy crepes stuffed with a savory, wonderfully spiced potato and onion filling. It might take a bit of time to make delicious hotel style masala dosa, but with my step-by-step instructions and photos I promise it will be easier than you think and is so worth the effort!", date:'March 16, 2022'},

        {id:16,category:'Food', title:'Amritsari Kulche', image:'../images/kulche.jpg', text:"One of the best Indian snacks cum breakfast options out there is Chole kulche! Originated from the Punjab region, this dish is loved all over the country and is now making its way in the west too.", date:'September 25, 2016'},

        {id:17,category:'Fitness', title:'Aerobic', image:'../images/aerobic1.jpg', text:"Aerobics is a form of physical exercise that combines rhythmic aerobic exercise with stretching and strength training routines with the goal of improving all elements of fitness.", date:'March 16, 2022'},

        {id:18,category:'', title:'', image:'', text:"October", date:'March 21, 2019'},
    
    ])

    return (
        <ArticleContext.Provider value={ [article,setArticle] }>
            { props.children }
        </ArticleContext.Provider>
    )

}