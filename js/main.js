

// Change Navbar styles on scroll
window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle('window-scroll', window.scrollY > 10);
});


// Show/Hide FAQ answer
const questions = document.querySelectorAll(".question");

questions.forEach(question => {
    question.addEventListener('click', () => {
        questions.forEach(q => {
            if(question !== q) {
                q.classList.remove('open');

                // Change Icon
                const i = q.querySelector(".question__icon i");
                i.className = "fa fa-plus";
            }
        });
        question.classList.toggle('open');

        // Change Icon
        const icon = question.querySelector(".question__icon i");
        if(icon.classList.contains("fa-plus")) {
            icon.className = "fa fa-minus";
        } else {
            icon.className = "fa fa-plus";
        }
    });
});


// show/hide nav menu
const menu = document.querySelector(".nav__items");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
    menu.style.display = "none";
    menuBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
});




// ========= Displaying All Courses
// Array of all courses
let courses = [
    course1 = {
        title: "Responsive Web Design And UI/UX",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quasi necessitatibus iure ex ullam eaque labore",
        image: "../images/course-1.jpg"
    },
    course2 = {
        title: "Web Design And Database For Beginners",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quasi necessitatibus iure ex ullam eaque labore",
        image: "../images/course-2.jpg"
    },
    course3 = {
        title: "Web Development, Become Full Stack",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quasi necessitatibus iure ex ullam eaque labore",
        image: "../images/course-3.jpg"
    },
    course4 = {
        title: "Graphic Design For Creative Learners",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quasi necessitatibus iure ex ullam eaque labore",
        image: "../images/course-4.jpg"
    },
    course5 = {
        title: "Learn Web Design From Scratch",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quasi necessitatibus iure ex ullam eaque labore",
        image: "../images/course-5.jpg"
    },
    course6 = {
        title: "Web Design With Three Projects",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quasi necessitatibus iure ex ullam eaque labore",
        image: "../images/course-6.jpg"
    },
    course7 = {
        title: "Web Development With CMS Project",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quasi necessitatibus iure ex ullam eaque labore",
        image: "../images/course-7.jpg"
    },
    course8 = {
        title: "Java Programming Language In 60 Days",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quasi necessitatibus iure ex ullam eaque labore",
        image: "../images/course-8.jpg"
    },
    course9 = {
        title: "Become A Front-End Developer",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quasi necessitatibus iure ex ullam eaque labore",
        image: "../images/course-9.jpg"
    },
    course10 = {
        title: "Responsive Web Design In 30 Days",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quasi necessitatibus iure ex ullam eaque labore",
        image: "../images/course-10.jpg"
    },
    course11 = {
        title: "Learn Programming Concept From Scratch",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quasi necessitatibus iure ex ullam eaque labore",
        image: "../images/course-11.jpg"
    },
    course12 = {
        title: "Data Visualization With Python",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quasi necessitatibus iure ex ullam eaque labore",
        image: "../images/course-12.jpg"
    },
]
    
function printCourses() {
    const coursesTag = document.querySelector(".js-class");

    for (course of courses) {
        
        coursesTag.innerHTML += `<article class="course">
            <div class="course__img">
                <img src=${course.image} alt="">
            </div>
            <div class="course__info">
                <h4>${course.title}</h4>
                <p>${course.desc}</p>
                <a href="#" class="btn btn-primary">Learn More</a>
            </div>
        </article>`;
        
    }
}
console.log(document.querySelector(".container__courses"));



if(document.querySelector(".container__courses").classList.contains("js-class")) {
    printCourses();
}
