"use client";
import { useState } from "react";

export default function Home() {

  const [menuOpen, setMenuOpen]=useState(false);
  const [messageInput, setMessageInput]=useState('');

  const [messages, setMessages]=useState([
	{ role: 'assistant', content: 'How can I help you learn more about Ankit and his Resume ?' }
]);

	const submitForm = async (e) =>{
		e.preventDefault();
		let newMessages= [...messages,{role : 'user', content: messageInput}]
		setMessages(newMessages);
		setMessageInput('');
		const apiMessage=await fetch(
			'/api',
			{
				method: 'POST',
				headers:{
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({messages:newMessages})
			}	
		).then(res=>res.json());
		setMessages([...newMessages,{role:'system',content:apiMessage.message}]);
	}

  const customData = {
    name: "ANKIT PURI",
    contact: {
      linkedIn: "LinkedIn URL",
      phone: "+91 9113414206",
      email: "ankitpuri829@gmail.com",
      github: "GitHub URL",
    },
    skills: [
      "Python", "C++", "C", "JAVA(Basics)", "SQL", 
      "Frontend - HTML, CSS", 
      "English, Hindi – All professional proficiency or above"
    ],
    experience: [
      {
        role: "Research Based (Machine Learning)",
        company: "Compsoft Technologies",
        location: "Bengaluru, Karnataka",
        duration: "08/2023 - 10/2023",
        responsibilities: [
          "Led the advancement and deployment of an automated parking system harnessing state-of-the-art technology, merging OpenCV and YOLOv8, to streamline parking management processes.",
          "This innovative solution efficiently monitors and tallies available parking spaces, concurrently tracking parked vehicles.",
          "Cuts manual inspection time by a remarkable 70%, thereby optimizing workforce productivity.",
          "Elevates the user experience by simplifying the task of locating parking spaces, leading to enhanced customer contentment."
        ]
      },
      {
        role: "Web Developer",
        company: "Immensphere",
        location: "Bengaluru, Karnataka",
        duration: "08/2022 - 10/2022",
        responsibilities: [
          "Crafted captivating personal portfolio websites for clients, employing cutting-edge frontend technologies such as HTML, CSS.",
          "These websites showcase their unique talents, achievements, and experiences, leaving a lasting impression on visitors."
        ]
      }
    ],
    education: [
      {
        degree: "Bachelor of Engineering",
        field: "Computer Science and Engineering",
        institution: "Dayananda Sagar Academy of Technology and Management",
        location: "Bengaluru, Karnataka",
        duration: "2020 - 2024",
        gpa: "7.9"
      },
      {
        degree: "className - 12th",
        institution: "Guru Gobind Singh Public School",
        location: "Bokaro, Jharkhand",
        duration: "2019 - 2020",
        percentage: "80.8%"
      },
      {
        degree: "className - 10th",
        institution: "Guru Gobind Singh Public School",
        location: "Bokaro, Jharkhand",
        duration: "2017 - 2018",
        percentage: "76%"
      }
    ],
    projects: [
      "Food Ordering Application: Using Java in Android Studio, Made a Food Ordering Application. (06/2023)",
      "Netflix Clone Website: Using HTML, CSS and JavaScript, Made a Netflix Clone Website. (05/2023)",
      "Gadget Rental Application: Using .NET Framework, Made a Gadget Rental Application. (02/2022)"
    ],
    certifications: [
      "Introduction to C++ by Coding Ninjas",
      "Web Development by Verzeo",
      "Introduction to Python Programming By Tequed Labs"
    ],
    others: [
      "3* (star) Coder on CodeChef https://www.codechef.com/users/top_l_percent",
      "Ranked - 5362 (All India rank) out of more than 5 Lakh Competitors in, IICC(INNOVATE INDIA CODING CHAMPIONSHIP)"
    ]
  };

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  }


  return (
    <>
      <header>
		<a href="#" className="logo-holder">
			<div className="logo">
				<img src="./imgs/robot.jpg" alt="Mr Robot"/>
			</div>
			<div className="logo-text">Top_1_Percent </div>
		</a>
		<nav>
			<ul id="menu" className={menuOpen ? "active": ""}>
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#skills">Skills</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
				<li>
					<a href="mailto:ankitpuri829@gmail.com" className="button">Contact Me</a>
				</li>
			</ul>
			<a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10"/> 
        </svg>
			</a>
		</nav>
	</header>
	<main>
		<section className="hero container">
			<div className="hero-blue">
				<div>
					<h1><small>Hi I'm</small>
						Ankit Puri
					</h1>
					<p>A skilled Computer Science and Engineering graduate with a strong proficiency in Python, C++, and frontend development, boasting notable experience in machine learning and web development.
						<span>I'm interested in AI topics which is why I also add things like ChatGPT into my projects these days.
						</span>
					</p>
					<div className="call-to-action">
						<a href="https://drive.google.com/file/d/1dFRTMX5yyZqI91h4VQUKYHxmgiCIlgvb/view?usp=drive_link" className="button black">
							View Resume
						</a>
						<a href="mailto:ankitpuri829@gmail.com" className="button white">
							Contact Me
						</a>
					</div>
					<div className="social-links">
						<a href="https://github.com/ankitpuri-P">
							<img src="./imgs/github.png" alt="GitHub" width="48" />
						</a>
						<a href="https://www.linkedin.com/in/ankitpuri12/">
							<img src="./imgs/linkedin.png" alt="LinkedIn" width="48" />
						</a>
						<a href="https://leetcode.com/u/top_1_percent/">
							<img src="./imgs/leetcode.png" alt="Leetcode" width="48" />
						</a>
						<a href="https://www.codechef.com/users/top_l_percent">
							<img src="./imgs/Codechef.png" alt="Codechef" width="48" />
						</a>
					</div>
				</div>
			</div>
			<div className="hero-yellow">
				<img src="./imgs/Ankit_photo.png" alt="Ankit Puri" width="100%" />
			</div>
		</section>
		<section className="logos container">
			<div className="marquee">
				<div className="track">
					<img src="./imgs/html.png" alt="HTML" width="128" />
					<img src="./imgs/css.png" alt="CSS" width="128" />
					<img src="./imgs/javascript.png" alt="JS" width="128" />
					<img src="./imgs/sass.png" width="128" alt="Sass" />
					<img src="./imgs/vscode.png" width="128" alt="VS Code" />
					<img src="./imgs/python.png" width="128" alt="Python" />
					<img src="./imgs/c++.png" alt="C++" width="128" />
					<img src="./imgs/sql.png" alt="SQL" width="128" />
					<img src="./imgs/ml.jpg" alt="ML" width="128" />
					<img src="./imgs/html.png" alt="HTML" width="128" />
					<img src="./imgs/css.png" alt="CSS" width="128" />
					<img src="./imgs/javascript.png" alt="JS" width="128" />
					<img src="./imgs/sass.png" width="128" alt="Sass" />
					<img src="./imgs/vscode.png" width="128" alt="VS Code" />
					<img src="./imgs/python.png" width="128" alt="Python" />
					<img src="./imgs/c++.png" alt="C++" width="128" />
					<img src="./imgs/sql.png" alt="SQL" width="128" />
					<img src="./imgs/ml.jpg" alt="ML" width="128" />
				</div>
			</div>
		</section>
		<section id="skills" className="skills container">
			<h2>
				<small>About Me</small>
				Skills
			</h2>
			<div className="holder-blue">
				<div className="left-column">
					<h3>Frontend</h3>
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
					</ul>
					<h3>Backend</h3>
					<ul>
						<li>Node.js</li>
						<li>SQL</li>
						<li>Python</li>
						<li>C++</li>
						<li>C</li>
					</ul>
				</div>
				<div className="right-column">
					<h3>A bit about me</h3>
					<p>
						Hi, I'm Ankit Puri, a Computer Science and Engineering graduate with a knack for developing innovative tech solutions. I have a strong foundation in Python, C++, and frontend technologies like HTML and CSS.
					</p>
					<p>
						My recent work at Compsoft Technologies involved leading the creation and deployment of an automated parking system using OpenCV and YOLOv8, which significantly optimized parking management. Prior to that, I developed personal portfolio websites for clients at Immensphere, showcasing their achievements with modern web design techniques.
					</p>
					<p>
						I'm passionate about AI and machine learning, which has driven me to work on projects such as a Food Ordering Application and a Netflix Clone Website. Additionally, I've achieved a 3-star rating on CodeChef and ranked 5362 in the Innovate India Coding Championship, highlighting my competitive coding skills.
					</p>
				</div>
				
			</div>
		</section>
		<section className="work-experience container">
			<h2>
				<small>Recent</small>
				Work Experience
			</h2>
			<div className="jobs">
				<article>
					<figure>
						<div>
							<img src="./imgs/compsoft.jpg" alt="Workplace 1 - Compsoft Technologies" width="100%" />
							<figcaption>
								Workplace - 1 : Compsoft Technologies
							</figcaption>
						</div>
					</figure>
					<h3>Research Intern in ML</h3>
					<div>2023</div>
					<p>Worked on different Machine learning models for object detection.</p>
				</article>
				<article>
					<figure>
						<div>
							<img src="./imgs/immens.jpg" alt="Workplace 2 - Immensphere" width="100%" />
							<figcaption>
								Workplace - 2 : Immensphere
							</figcaption>
						</div>
					</figure>
					<h3>Web Developer Intern</h3>
					<div>2022</div>
					<p>Crafted captivating personal portfolio websites for clients, employing cutting-edge frontend technologies such as HTML, CSS and JavaScript.</p>
				</article>
			</div>
		</section>
		<section id="projects" className="bento container">
			<h2>
				<small>
					Previous
				</small>
				Completed Projects
			</h2>
			<div className="bento-grid">
				<a href="#" className="bento-item">
        <video src="./imgs/Food.mp4" alt="Food" width="100%" autoPlay muted loop></video>
				</a>
				<a href="#" className="bento-item">
					<img src="./imgs/Parking.png" alt="parking" width="100%" />
				</a>
				
				<a href="#" className="bento-item">
					<img src="./imgs/gadget_rental.jpg" alt="Gadget" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imgs/pc.jpg" alt="gadget" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imgs/port.png" alt="portfolio" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imgs/Netflix.jpg" alt="Netflix" width="100%" />
				</a>
			</div>
		</section>
		<section className="chatbot container">
			<h2>
				<small>
					Talk to me
				</small>
				Chatbot
			</h2>
			<div className="chatbot-blue">
				<div className="chat-info">
					<h3>Azure AI Chatbot</h3>
					<p>I've put together a chatbot here which knows all my skills, work experience and has a copy of my CV/Resume. You can use it to ask questions about me to get a better idea of who I am and what I've done.</p>
					<p>You can also download my resume here if you want to take a look at it.  I'm currently looking for new opportunities so if you have a project you think I'd be a good fit for, please get in touch!</p>
					<a href="https://drive.google.com/uc?export=download&id=1dFRTMX5yyZqI91h4VQUKYHxmgiCIlgvb" className="button black" download="Ankit_Puri_Resume.pdf">Download Resume</a>

				</div>
				<div className="chat-box">
					<div className="scroll-area">
						<ul id="chat-log">
							{messages.map((message,index)=>(
								<li key={index} className="${message.role}">
									<span className={'avatar'}>
										{message.role === 'user' ? 'You' : 'AI'}
									</span>
									<div className="message">{message.content}</div>
								</li>
							))}
						
						</ul>
					</div>
					<form onSubmit={submitForm} className="chat-message">
						<input type="text" placeholder="Hey Ankit, what skills are you best at?" value={messageInput} on onChange={e =>
							setMessageInput(e.target.value)
						}/>
						<button className="button black">Send</button>
					</form>
				</div>
			</div>
		</section>

      </main>
    </>
  );
}
