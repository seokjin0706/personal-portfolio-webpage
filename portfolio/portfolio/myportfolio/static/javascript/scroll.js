// //aboutme 메뉴 클릭 시, container_about 태그로 이동
// function aboutmeClickEvent(){
//     document.querySelector('#aboutme').addEventListener('click',e=>{
//         document.querySelector('.container_about').scrollIntoView({behavior:'smooth'});
//     });
// }


// //skills 메뉴 클릭 시, container_skills 태그로 이동
// function skillsClickEvent(){
//     document.querySelector('#skills').addEventListener('click',e=>{
//         document.querySelector('.container_skills').scrollIntoView({behavior:'smooth'});
//     });
// }

// //project 메뉴 클릭 시, container_project 태그로 이동
// function projectClickEvent(){
//     document.querySelector('#project').addEventListener('click',e=>{
//         document.querySelector('.container_project').scrollIntoView({behavior:'smooth'});
//     });
// }


// //contact 메뉴 클릭 시, container_contact 태그로 이동
// function contactClickEvent(){
//     document.querySelector('#contact').addEventListener('click',e=>{
//         document.querySelector('.container_contact').scrollIntoView({behavior:'smooth'});
//     });
// }

function init(){
    document.querySelector('#aboutme').addEventListener('click',e=>{
        document.querySelector('.container_about').scrollIntoView({behavior:'smooth'});
    });

    document.querySelector('#skills').addEventListener('click',e=>{
        document.querySelector('.container_skills').scrollIntoView({behavior:'smooth'});
    });

    document.querySelector('#project').addEventListener('click',e=>{
        document.querySelector('.container_project').scrollIntoView({behavior:'smooth'});
    });

    document.querySelector('#contact').addEventListener('click',e=>{
        document.querySelector('.container_contact').scrollIntoView({behavior:'smooth'});
    });
}

init()

