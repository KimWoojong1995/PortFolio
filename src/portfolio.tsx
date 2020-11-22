import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'Woojong',
	title: 'Front-End 개발자 김우종입니다.',
	subTitle: "스스로 학습하며 업무에서 실력을 발휘하는 개발자",
	role: "'생각을 코드로, 상상을 현실로'",
	resumeLink: "https://github.com/KimWoojong1995/Resume",
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};

export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: 'https://github.com/KimWoojong1995',
	tstory: 'https://woojong-develop.tistory.com/',
	email: 'woojong1995@gmail.com',
	// facebook: 'https://www.facebook.com/profile.php?id=100003901670157',
	// twitter: "Your twitter link",
	// instagram: "https://www.instagram.com/woo_j2",
	// medium: 'Your medium link',
	// stackoverflow: 'Your stackoverflow link'
};

export const skills = {
	title: emoji("Skills ⚡"),
	// subTitle: "subtitle for skill",
	describeSkills: [
		// emoji("✔ describe first"),
		// emoji("✔ describe second"),
		// emoji("✔ describe third"),
		// emoji("✔ describe forth"),
		// emoji("✔ describe fifth"),
	],
	// IMPORTANT
	// You need to find className for font-awesome icon
	// Go to https://fontawesome.com/ and search icon
	lists: [
		{fontAwesome: "fab fa-html5", text: "HTML5", proficiency: 80},
		{fontAwesome: "fab fa-css3-alt", text: "CSS3", proficiency: 70},
		{fontAwesome: "fab fa-js", text: "JS", proficiency: 70},
		{fontAwesome: "fab fa-react", text: "React", proficiency: 60},
		{fontAwesome: "fab fa-node", text: "Node.js", proficiency: 30},
		{fontAwesome: "fab fa-github", text: "Git", proficiency: 20},
		{fontAwesome: "fas fa-database", text: "MySQL", proficiency: 20},
	],
	view: true
};

export const experience = {
	title: "Experience",
	lists: [
		{ 
			date: "2020.09~2020.10",
			company: "eat around / 지붕 뚫은 친구들",
			role: "여행 스타트업 / Front-End",
		},
		{
			date: "2020.06~2020.10",
			company: "구공팩토리 4기",
			role: "코딩 부트캠프 / Front-End",
		},
		{ 
			date: "2014.10~2020.03",
			company: "나노다이아몬드",
			role: "Diamond 개발 회사 / 주임",
		},
	],
	view: true
}

export const openSourceProjects = {
	title: emoji("Open Source Projects 💻"),
	view: false
}

export const projects = {
	title: emoji("Projects 💻"),
	subTitle: "",
	lists: [
		{
			title: "Project1",
			desc: "very very very very very very very very very very very very very long very long description for clamp testing",
			url: "#"
		},
		{
			title: "Project2",
			desc: "description",
			url: "#"
		}
	],
	view: true
}

export const achievements = {
	title: emoji("Achievements And Certifications 🏆"),
	subTitle: "subtitle for achievement",
	lists: [
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Achievement...😥",
			desc: "I'll try harder!"
		},
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Certification...😥",
			desc: "I'll try harder!"
		},
	],
	view: false
};

export const blogs = {
	title: emoji("Blog 📰"),
	subTitle: "",
	lists: [
		{
			title: "T story",
			desc: "",
			url: "https://woojong-develop.tistory.com/"
		},
		// {
		// 	title: "Your post2",
		// 	desc: "Description",
		// 	url: "#"
		// },
	],
	view: false
}

export const contactInfo = {
	title: "Contact To Me!",
	subTitle: "📞 010-5551-5479",
	introduce: emoji(""),
	view: true
}