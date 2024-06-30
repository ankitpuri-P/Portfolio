import { OpenAIClient, AzureKeyCredential } from '@azure/openai';
import { NextResponse } from 'next/server';
import Cors from 'cors';

// Define Constants
const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const modelDeploymentName = "Jarvis";

const cors = Cors({
    methods: ['GET', 'HEAD', 'POST'],
    origin: 'https://ankitpuri-p.github.io/Portfolio/' // Replace with your actual GitHub Pages URL
  });

  function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
  }

const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://ankitpuri-p.github.io/Portfolio/' // Replace with your actual GitHub Pages URL
    : '';

export async function POST(req,res) {
    try {
        // Check for missing environment variables
        if (!endpoint || !apiKey || !modelDeploymentName) {
            throw new Error('Missing required environment variables for Azure OpenAI');
        }

        await runMiddleware(req, res, cors);

        // Initialize OpenAI Client
        const { messages } = await req.json();
        const client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey));

        messages.unshift({
            role: 'system',
            content: `You are Jarvis, answering only questions based on the resume provided.

Resume:
${DATA_RESUME}
Help users learn more about Ankit from his resume.
`
        });

        // Pass options as a separate object
        const response = await client.getChatCompletions(modelDeploymentName, messages, {
            maxTokens: 128 // Fix the assignment here
        });

        const completion = response.choices[0];

        return NextResponse.json({
            message: completion.message.content
        });
    } catch (error) {
        console.error("OpenAI API Error:", error);
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}

const DATA_RESUME = `Ankit Puri

Contact Information:
Phone: +91 9113414206
Email: ankitpuri829@gmail.com
LinkedIn: https://www.linkedin.com/in/ankitpuri12/
GitHub: https://github.com/ankitpuri-P

Skills:
- Programming Languages: Python, C++, C, JAVA (Basics), SQL
- Frontend Technologies: HTML, CSS
- Languages: English, Hindi (All professional proficiency or above)

Experience:

Compsoft Technologies
Bengaluru, Karnataka
August 2023 - October 2023
Role: Research Based (Machine Learning)
Responsibilities:
- Led the advancement and deployment of an automated parking system harnessing state-of-the-art technology, merging OpenCV and YOLOv8, to streamline parking management processes.
- This innovative solution efficiently monitors and tallies available parking spaces, concurrently tracking parked vehicles.
- Cuts manual inspection time by a remarkable 70%, thereby optimizing workforce productivity.
- Elevates the user experience by simplifying the task of locating parking spaces, leading to enhanced customer contentment.

Immensphere
Bengaluru, Karnataka
August 2022 - October 2022
Role: Web Developer
Responsibilities:
- Crafted captivating personal portfolio websites for clients, employing cutting-edge frontend technologies such as HTML, CSS.
- These websites showcase their unique talents, achievements, and experiences, leaving a lasting impression on visitors.

Education:

Bachelor of Engineering
Dayananda Sagar Academy of Technology and Management, Bengaluru, Karnataka
2020 - 2024
Field of Study: Computer Science and Engineering
CGPA: 7.9

Class 12th
Guru Gobind Singh Public School, Bokaro, Jharkhand
2019 - 2020
Field of Study: PCM+CS
Percentage: 80.8%

Class 10th
Guru Gobind Singh Public School, Bokaro, Jharkhand
2017 - 2018
Field of Study: Science
Percentage: 76%

Projects:
- Food Ordering Application: Developed a food ordering application using Java in Android Studio (June 2023).
- Netflix Clone Website: Created a Netflix clone website using HTML, CSS, and JavaScript (May 2023).
- Gadget Rental Application: Built a gadget rental application using .NET Framework (February 2022).

Certifications:
- Introduction to C++ by Coding Ninjas
- Web Development by Verzeo
- Introduction to Python Programming by Tequed Labs

Others:
- 3* (star) Coder on CodeChef (https://www.codechef.com/users/top_l_percent)
- Ranked 5362 (All India rank) out of more than 5 Lakh Competitors in IICC (INNOVATE INDIA CODING CHAMPIONSHIP)
`;
