import type { Project } from "@/types/project";

const CONTENT_NEEDED = "[CONTENT NEEDED]";

export const projects: Project[] = [
{
  slug: "lumax-dharuhera-vr-training",

  title: "Lumax Dharuhera VR Training",

  discipline: "XR",

  category: "VR",

  client: "Lumax Dharuhera",

  year: "2025",

  technologies: [
    "Unity",
    "C#",
    "Meta Quest",
    "XR Interaction",
    "VR Interaction",
    "Web Application",
    "REST API",
    "Figma"
  ],

  shortDescription:
    "An immersive VR-based assembly line training system integrated with a web application, designed to train, guide, and evaluate operators through a realistic virtual manufacturing environment.",

  detailedDescription:
    "Lumax Dharuhera VR Training is an immersive virtual reality training solution developed to simulate an industrial assembly workstation and provide trainees with a safe, interactive, and repeatable learning environment. The application follows a structured workflow beginning with Authentication and Language Selection, followed by Awareness, Hardware Introduction, Assembly Line Simulation, Training, and Evaluation. Trainees can first understand the workstation and observe the assembly process, then perform the process through guided instructions, and finally complete the assembly independently for performance assessment. The VR experience is integrated with a web application that enables training information, trainee progress, and performance data to be accessed and reviewed through a centralized interface. The application supports two languages, allowing training content and instructions to be presented according to the user's selected language.",

  objective:
    "The primary objective of the project is to provide an immersive and structured VR-based assembly line training system that allows trainees to understand the workstation, learn SOP-based procedures, practice assembly operations, and independently demonstrate their skills. The solution also integrates a web application to support centralized access to training information, trainee progress, and performance assessment data.",

  problem:
    "Traditional assembly line training requires access to physical workstations, tools, components, and continuous trainer supervision. Repeated training can also require production resources and may not provide the same learning experience to every trainee. There is also a need to evaluate whether trainees can correctly perform the required operations after completing their training. The project addresses these challenges by recreating the assembly workstation and workflow in a virtual environment, allowing trainees to practice repeatedly while following the defined SOP. The integrated web application provides an additional layer for managing training information and reviewing trainee performance.",

  flow: [
    {
      label: "Authentication",
      description:
        "Users authenticate themselves before accessing the training application."
    },
    {
      label: "Language Selection",
      description:
        "Users select their preferred language for instructions, UI, and training content."
    },
    {
      label: "Awareness",
      description:
        "Introduces trainees to the overall workstation, assembly process, and training environment."
    },
    {
      label: "Hardware Introduction",
      description:
        "Allows trainees to explore and understand the tools, components, fixtures, and equipment used at the workstation."
    },
    {
      label: "Assembly Line Simulation",
      description:
        "Provides a virtual demonstration of the assembly process and the required standard operating procedure."
    },
    {
      label: "Training",
      description:
        "Provides guided practice of the assembly process through interactive VR tasks."
    },
    {
      label: "Step-by-Step Guided Assembly",
      description:
        "Guides trainees through individual assembly operations using instructions, interactions, and contextual feedback."
    },
    {
      label: "Evaluation",
      description:
        "Allows trainees to perform the assembly process after completing the guided training."
    },
    {
      label: "Independent Task Execution",
      description:
        "Trainees independently perform the required operations without continuous step-by-step guidance."
    },
    {
      label: "Performance Assessment",
      description:
        "Records and evaluates trainee performance based on predefined task and SOP requirements."
    },
    {
      label: "VR-Integrated Web Application",
      description:
        "Provides a web-based interface for accessing trainee information, training progress, and performance data."
    }
  ],

  userJourney: [
    "Authenticate and access the training application.",
    "Select the preferred training language.",
    "Enter the VR training environment.",
    "Explore and understand the workstation and its components.",
    "Learn about the tools, fixtures, and equipment used in the workstation.",
    "Observe the assembly line simulation to understand the complete workflow and SOP.",
    "Start the guided training module.",
    "Follow step-by-step instructions to perform each assembly operation.",
    "Interact with tools, components, fixtures, and equipment using VR interactions.",
    "Complete the guided training sequence.",
    "Enter the evaluation module.",
    "Perform the complete assembly process independently.",
    "Use the hint system when assistance is required.",
    "Complete the evaluation process.",
    "Generate and record trainee performance data.",
    "Access training and evaluation information through the integrated web application.",
    "Supervisors can review trainee progress and performance through the web-based interface."
  ],

  features: [
    "Immersive VR assembly line training",
    "Authentication and user access",
    "Two-language support",
    "Awareness module",
    "Interactive hardware introduction",
    "Assembly line simulation",
    "Step-by-step guided training",
    "Interactive tool and component handling",
    "SOP-based task execution",
    "Independent evaluation mode",
    "Hint and guidance system",
    "Task validation",
    "Performance assessment",
    "Trainee progress tracking",
    "VR-integrated web application",
    "Web-based training and evaluation data",
    "Supervisor performance monitoring"
  ],

  role:
    "XR Developer responsible for designing and developing the immersive VR training experience, implementing the training workflow, building interactive systems, integrating VR hardware, and connecting the VR training experience with the web-based application.",

  contribution:
    "Designed and developed the VR training workflow in Unity, implemented interactive component and tool handling, developed the Awareness, Training, and Evaluation modules, created step-based training logic, implemented task validation and guidance systems, integrated VR interactions using the Meta XR SDK, implemented multilingual training support, and contributed to the integration between the VR application and the web-based system for trainee management, progress tracking, and performance evaluation.",

  challenges: [
    "Creating realistic and intuitive interactions for industrial tools and components.",
    "Recreating the physical assembly workflow accurately in a virtual environment.",
    "Ensuring trainees follow the correct SOP and sequence of operations.",
    "Designing a guided training experience while keeping the evaluation independent.",
    "Validating trainee actions across multiple assembly steps.",
    "Providing clear instructions and feedback without interrupting the immersive experience.",
    "Supporting multiple languages across the training workflow.",
    "Synchronizing relevant training and performance information between the VR application and web application."
  ],

  solutions: [
    "Implemented interactive VR objects and workstation components to recreate the physical training environment.",
    "Developed a step-based training architecture to control the sequence of assembly operations.",
    "Implemented interaction validation to detect whether trainees perform required actions correctly.",
    "Added contextual instructions, visual guidance, and hints to assist trainees during the training phase.",
    "Separated guided Training and independent Evaluation modes to distinguish learning from performance assessment.",
    "Implemented multilingual content support so users can select their preferred training language.",
    "Integrated the VR application with a web-based system to provide centralized access to trainee information, training progress, and evaluation data."
  ],

  results: [
    "Created a repeatable VR-based assembly line training environment.",
    "Enabled trainees to familiarize themselves with the workstation before physical training.",
    "Provided a structured workflow from awareness to guided training and independent evaluation.",
    "Enabled trainees to practice assembly operations in a controlled virtual environment.",
    "Provided consistent SOP-based training through an interactive VR experience.",
    "Enabled multilingual access to the training experience.",
    "Connected the VR training experience with a web application for centralized training and performance information.",
    "Provided a foundation for supervisors to monitor trainee progress and review evaluation results."
  ],

  video: {
  provider: "google-drive",
  url: "https://drive.google.com/file/d/1W8gWQSA2msP_javTCAKIAnkD-XcqeL8T/view?usp=drive_link",
  title: "Lumax Dharuhera VR Training"
},

  gallery: [
    {
      type: "image",
      src: "/ProjectsImage/Lumax-Dharuhera-VR-Training/Env1.png",
      alt: "Virtual factory floor with a marked assembly area, tool station, material storage racks and quality inspection desk",
      caption: "Assembly area environment"
    },
    {
      type: "image",
      src: "/ProjectsImage/Lumax-Dharuhera-VR-Training/Env2.png",
      alt: "Top-down cutaway view of the full virtual factory building showing the training zones and assembly area layout",
      caption: "Factory layout overview"
    },
    {
      type: "image",
      src: "/ProjectsImage/Lumax-Dharuhera-VR-Training/Unity1.png",
      alt: "Unity scene view of the training start point facing the assembly workstation, with an info kiosk and a glowing teleport marker",
      caption: "Training start point in Unity"
    },
    {
      type: "image",
      src: "/ProjectsImage/Lumax-Dharuhera-VR-Training/Unity2.png",
      alt: "Unity scene view of the assembly workstation inside a hazard-striped zone, with part tables and a Start Training floor marker",
      caption: "Assembly workstation in Unity"
    }
  ],

  status: "seeded"
},
  {
  slug: "smartlab-xr",

  title: "SmartLab XR",

  discipline: "XR",

  category: "MR",

  client: null,

  year: "2026",

  technologies: [
    "Unity",
    "Multiset.AI",
    "Meta All in One SDK",
    "Blender",
    "LiDAR",
    "Figma"
  ],

  shortDescription:
    "An immersive AR smart-lab experience that connects physical manufacturing equipment with interactive digital information, indoor navigation, and real-time machine data.",

  detailedDescription:
    "SmartLab XR is an augmented reality experience designed to transform a physical smart manufacturing laboratory into an interactive digital learning environment. The application allows users to explore industrial machines through spatially aligned AR content, access machine information, navigate through the laboratory, and visualize real-time industrial data. By combining spatial tracking, interactive 3D content, and IIoT integration, the experience creates a bridge between physical manufacturing infrastructure and digital learning.",

  objective:
    "The objective was to create an intuitive AR layer over the smart manufacturing laboratory so that users could easily discover machines, understand their functions, access contextual information, and interact with digital representations of the lab infrastructure. The experience was designed to demonstrate how AR can improve industrial learning, machine awareness, and interaction within an Industry 4.0 environment.",

  problem:
    "Smart manufacturing laboratories contain a large number of machines, systems, and technologies that can be difficult for new users to understand and navigate. Conventional displays and static information provide limited context and require users to move between physical equipment and separate information sources. There was a need for a more immersive way to connect machine information directly with the physical equipment in the laboratory.",

  flow: [
    {
      label: "Scan & Initialize",
      description:
        "The user launches the experience and scans the designated environment or target to establish the AR experience."
    },
    {
      label: "Explore the Smart Lab",
      description:
        "The user explores the physical laboratory while discovering digitally enhanced machines and equipment."
    },
    {
      label: "Identify Machines",
      description:
        "AR markers and spatial tracking are used to identify relevant machines and display interactive digital content."
    },
    {
      label: "View Machine Information",
      description:
        "The user selects a machine to access its digital information, features, and operational details."
    },
    {
      label: "Navigate the Lab",
      description:
        "Interactive AR navigation helps users locate different machines and areas within the smart manufacturing laboratory."
    },
    {
      label: "View Live Data",
      description:
        "Where available, real-time IIoT information is visualized through the AR interface."
    }
  ],

  userJourney: [
    "Launch the SmartLab XR application.",
    "Scan and initialize the physical environment.",
    "Explore the smart manufacturing laboratory.",
    "Identify machines through AR.",
    "Select a machine to reveal its digital information.",
    "Follow AR navigation to locate other machines or areas.",
    "Interact with available digital machine content.",
    "View real-time machine or IIoT information where supported."
  ],

  features: [
    "Interactive AR machine visualization",
    "Machine information overlays",
    "AR-based indoor navigation",
    "Spatially aligned digital content",
    "Interactive 3D machine representations",
    "IIoT data visualization",
    "Physical-to-digital machine interaction",
    "Smart manufacturing laboratory exploration"
  ],

  role:
    "XR Developer responsible for developing the AR experience, integrating spatial tracking and interactive machine content, implementing the user interaction flow, and connecting the application with supporting data systems.",

  contribution:
    "Contributed to the development of the SmartLab XR experience in Unity, including AR tracking and spatial positioning, interactive machine information, indoor navigation, digital content placement, and integration of Firebase and IIoT-related data. Worked on transforming the physical smart manufacturing laboratory into an interactive AR learning environment.",

  challenges: [
    "Accurately aligning digital content with physical machines and laboratory infrastructure.",
    "Creating a reliable spatial experience across a large indoor laboratory environment.",
    "Making machine information accessible without interrupting the user's physical exploration.",
    "Connecting AR interactions with real-time industrial data.",
    "Designing an intuitive navigation system for a complex smart manufacturing environment."
  ],

  solutions: [
    "Implemented AR tracking and spatial positioning to anchor digital content to the physical environment.",
    "Used LiDAR-based spatial understanding to improve environment-based positioning on supported devices.",
    "Designed contextual AR interfaces that present information directly around the corresponding physical machine.",
    "Integrated Firebase for application data and content management.",
    "Connected AR visualization with IIoT information to demonstrate real-time smart manufacturing data.",
    "Designed AR navigation elements to guide users through different areas of the laboratory."
  ],

  results: [
    "Created an interactive AR experience for exploring a smart manufacturing laboratory.",
    "Demonstrated the integration of AR with Industry 4.0 and IIoT concepts.",
    "Enabled users to access machine information directly within the physical lab environment.",
    "Combined spatial computing, digital content, navigation, and industrial data into a unified XR experience.",
    "Selected as a finalist for the XRCC competition and presented the project internationally in Berlin."
  ],

  video: {
  provider: "google-drive",
  url: "https://drive.google.com/file/d/1ifQ_m71NwJNZObGrGGjaMld30p2sxNmI/view?usp=sharing",
},

  gallery: [],

  status: "seeded"
},
  {
    slug: "fsm-smart-intro",
    title: "FSM Smart Intro",
    discipline: "XR",
    category: "AR",
    client: "IIT Delhi AIA Foundation for Smart Manufacturing",
    year: null,
    technologies: [
      "Unity",
      "Vuforia Engine",
      "Area Target",
      "IIoT",
    ],
    shortDescription:
      "AR-based smart laboratory introduction that overlays machine information, guided navigation, and real-time industrial data onto the physical lab environment.",
    detailedDescription:
      "FSM Smart Intro is an augmented reality application designed to introduce users to the Smart Manufacturing Laboratory through an interactive digital layer over the physical environment. Using Vuforia Engine Area Target tracking, the application recognizes the laboratory environment and places digital content in alignment with the physical machines. Users can explore machines, access contextual information, view real-time machine data, and follow a guided demonstration through the laboratory. The application also connects with IIoT systems to demonstrate how physical manufacturing equipment can be represented and interacted with through an AR interface.",
    objective:
      "The objective was to create an intuitive AR interface for introducing users to the smart manufacturing laboratory, helping them understand the machines, locate different areas, access machine information, and experience real-time industrial data within the physical lab environment.",
    problem:
      "A smart manufacturing laboratory contains multiple machines, systems, and technologies that can be difficult for first-time visitors to understand without guided assistance. Information about the equipment is often separated from the physical machines, making it harder to connect the information with what the user is seeing. The application addresses this by placing relevant digital information and guidance directly over the physical laboratory environment.",
    flow: [
      {
        label: "Launch & Area Recognition",
        description:
          "The user launches the application and points the device toward the laboratory to initialize the Vuforia Area Target experience."
      },
      {
        label: "Explore the Laboratory",
        description:
          "Digital content appears spatially aligned with the physical laboratory and its equipment."
      },
      {
        label: "Select a Machine",
        description:
          "The user selects a machine to access its information and relevant digital content."
      },
      {
        label: "View Machine Data",
        description:
          "Available real-time machine or IIoT information is presented through the AR interface."
      },
      {
        label: "Start Demo",
        description:
          "The user starts the guided demonstration, which directs them toward the relevant machines in sequence."
      },
      {
        label: "Interact with the Smart Lab",
        description:
          "Where supported, the user can interact with connected laboratory appliances through the AR interface."
      }
    ],
    userJourney: [
      "Launch the FSM Smart Intro application.",
      "Point the device toward the laboratory to initialize the Area Target.",
      "Explore the digitally enhanced physical laboratory.",
      "Select machines to view their information.",
      "View available real-time machine data.",
      "Select Start Demo to begin the guided laboratory walkthrough.",
      "Follow the guidance to visit machines in sequence.",
      "Interact with supported smart laboratory appliances through the application."
    ],
    features: [
      "Vuforia Area Target tracking",
      "Physical laboratory recognition",
      "AR machine information overlays",
      "Real-time machine data visualization",
      "Guided laboratory navigation",
      "Sequential machine demonstration",
      "Interactive 3D content",
      "IIoT-connected experience",
      "Physical-to-digital machine interaction"
    ],
    role:
      "XR Developer responsible for developing the AR experience, implementing spatial tracking and machine interactions, building the guided demonstration flow, and integrating digital content with the physical smart manufacturing laboratory.",
    contribution:
      "Developed the AR laboratory introduction experience in Unity using Vuforia Engine Area Target tracking. Implemented spatially aligned machine content, interactive information interfaces, guided navigation, machine demonstration flow, and integration of real-time industrial data and IIoT-connected functionality.",
    challenges: [
      "Maintaining accurate alignment between digital content and physical laboratory equipment.",
      "Creating a reliable AR experience across a large indoor laboratory environment.",
      "Presenting machine information without obstructing the user's view of the physical equipment.",
      "Creating a guided experience that is easy for first-time users to follow.",
      "Connecting the AR interface with available real-time industrial data."
    ],
    solutions: [
      "Used Vuforia Engine Area Target tracking to establish the AR experience within the laboratory.",
      "Created spatially aligned digital interfaces around the corresponding physical machines.",
      "Designed contextual machine information panels to connect digital information with physical equipment.",
      "Implemented a Start Demo flow to guide users through machines in a defined sequence.",
      "Integrated available IIoT data to demonstrate real-time machine information through AR."
    ],
    results: [
      "Created an interactive AR introduction to the smart manufacturing laboratory.",
      "Enabled users to access machine information directly in the physical lab environment.",
      "Provided guided exploration of laboratory machines and equipment.",
      "Demonstrated the connection between AR, IIoT, and smart manufacturing systems.",
      "Created a digital interface for introducing users to the laboratory's Industry 4.0 infrastructure."
    ],
    video: {
      provider: "google-drive",
      url: "https://drive.google.com/file/d/1FWm1x66TX93-3IvV8f3oWcvLtXB5Guhu/view?usp=drive_link"
    },
    gallery: [],
    status: "seeded",
  },
  {
    slug: "fsm-virtual-tour",
    title: "FSM Virtual Tour",
    discipline: "XR",
    category: "VR",
    client: "IIT Delhi AIA Foundation for Smart Manufacturing",
    year: "2024",
    technologies: [
      "Unity",
      "Meta Quest",
      "XR Interaction Toolkit",
      "Blender",
    ],
    shortDescription:
      "Immersive VR tour of the FSM smart manufacturing facilities with interactive machine touchpoints and Industry 4.0 demonstrations.",
    detailedDescription:
      "FSM Virtual Tour is a virtual reality application that recreates the FSM smart manufacturing facilities as an immersive digital environment. The experience allows users to remotely explore the Cyber Physical Lab (CPL), Cyber Physical Training Facility (CPTF), and Cyber Physical Factory (CPF). Interactive touchpoints provide information about machines and workstations, while selected systems can be demonstrated through virtual simulations. The application provides a way to experience the laboratory infrastructure and understand Industry 4.0 technologies without requiring the user to be physically present in the facility.",
    objective:
      "The objective was to create an immersive virtual representation of the FSM facilities that allows users to remotely explore the laboratory, understand its different sections, learn about industrial machines, and experience selected manufacturing and Industry 4.0 workflows through interactive VR content.",
    problem:
      "Physical laboratories and manufacturing facilities are not always accessible to visitors, learners, or remote participants. A conventional presentation or collection of photographs cannot provide the same spatial understanding of the facility or allow users to interact with machine information. The project addresses this by recreating the facility in VR and adding interactive information and simulation touchpoints.",
    flow: [
      {
        label: "Enter the Virtual Facility",
        description:
          "The user enters the recreated FSM facility in an immersive VR environment."
      },
      {
        label: "Explore CPL",
        description:
          "The user explores the Cyber Physical Lab and its research and development environment."
      },
      {
        label: "Explore CPTF",
        description:
          "The user visits the Cyber Physical Training Facility and explores its training infrastructure."
      },
      {
        label: "Explore CPF",
        description:
          "The user explores the Cyber Physical Factory and its manufacturing equipment."
      },
      {
        label: "Machine Information",
        description:
          "Interactive touchpoints provide information about machines, workstations, and technologies."
      },
      {
        label: "Industry 4.0 Demonstrations",
        description:
          "Selected machines and systems can be demonstrated through interactive virtual simulations."
      }
    ],
    userJourney: [
      "Put on the VR headset and enter the FSM Virtual Tour.",
      "Explore the virtual representation of the FSM facility.",
      "Visit the Cyber Physical Lab (CPL).",
      "Explore the Cyber Physical Training Facility (CPTF).",
      "Visit the Cyber Physical Factory (CPF).",
      "Approach machines and workstations to activate interactive touchpoints.",
      "Read machine and technology information.",
      "Launch available virtual demonstrations or simulations.",
      "Explore the facility and understand its Industry 4.0 capabilities."
    ],
    features: [
      "Immersive VR facility tour",
      "CPL virtual environment",
      "CPTF virtual environment",
      "CPF virtual environment",
      "Interactive machine touchpoints",
      "Machine and workstation information",
      "Industry 4.0 technology demonstrations",
      "Virtual process simulations",
      "Remote facility exploration"
    ],
    role:
      "XR Developer responsible for developing the immersive VR tour, recreating the FSM facility, implementing interactive touchpoints, and integrating machine information and virtual demonstrations.",
    contribution:
      "Developed the FSM facility in Unity as an immersive VR environment, including the CPL, CPTF, and CPF sections. Implemented interactive touchpoints for machine information and contributed to virtual simulations that demonstrate operational workflows and Industry 4.0 technologies.",
    challenges: [
      "Recreating a large physical laboratory and manufacturing facility as a navigable VR environment.",
      "Maintaining spatial clarity while presenting a large amount of machine and facility information.",
      "Making machine touchpoints discoverable and intuitive for first-time VR users.",
      "Representing industrial workflows in a way that is understandable within a virtual tour."
    ],
    solutions: [
      "Recreated the facility as a structured VR environment divided into CPL, CPTF, and CPF sections.",
      "Used interactive touchpoints to connect physical-equipment representations with digital information.",
      "Organized machine information contextually around the relevant workstations.",
      "Integrated virtual demonstrations to explain selected machine operations and Industry 4.0 workflows."
    ],
    results: [
      "Created an immersive virtual representation of the FSM smart manufacturing facilities.",
      "Enabled remote exploration of CPL, CPTF, and CPF environments.",
      "Provided interactive access to machine and workstation information.",
      "Demonstrated selected Industry 4.0 technologies and operational workflows in VR.",
      "Provided a reusable digital environment for facility introduction and technology demonstration."
    ],
    video: {
      provider: "google-drive",
      url: "https://drive.google.com/file/d/1zHsdsE5z5C7rwn2QPcTmh0Tqp1YPV6Xa/view?usp=sharing"
    },
    gallery: [],
    status: "seeded",
  },
  {
    slug: "robotic-welding-cell-vr",
    title: "Robotic Welding Cell VR",
    discipline: "XR",
    category: "VR",
    client: null,
    year: null,
    technologies: ["Unity", "XR Interaction Toolkit", "Meta Quest", "Blender", "Figma"],
    shortDescription:
      "An immersive VR training application for learning and experiencing a robotic welding cell through hardware familiarization, guided startup procedures, and welding simulation.",
    detailedDescription:
      "Robotic Welding Cell VR is an immersive industrial training application designed to provide users with a safe and interactive environment for learning the fundamentals of a robotic welding cell. The experience is structured into three progressive modules: Hardware Introduction, Startup Sequence, and Simulation. Users first become familiar with the physical components of the welding cell, then learn the correct startup procedure, and finally experience the robotic welding process through an interactive simulation.",
    objective:
      "The objective was to create a safe and immersive training environment where users could understand robotic welding cell hardware, learn the correct startup procedure, and experience the welding process without being exposed to the risks associated with real industrial welding equipment.",
    problem:
      "Robotic welding cells contain complex equipment, controls, safety systems, and operational procedures. Traditional training requires access to physical equipment and controlled environments, while close observation of an active welding process is unsafe. A VR-based environment was therefore developed to provide repeatable and immersive training without the physical risks.",
    flow: [
      {
        label: "Hardware Introduction",
        description:
          "Introduces the user to the components of the robotic welding cell and helps them understand the purpose of the individual hardware elements."
      },
      {
        label: "Startup Sequence",
        description:
          "Guides the user through the correct startup procedure and the sequence of actions required to bring the robotic welding cell into operation."
      },
      {
        label: "Simulation",
        description:
          "Provides an immersive simulation of the robotic welding process, allowing the user to observe the operation from a close and safe perspective."
      }
    ],
    userJourney: [
      "Enter the virtual robotic welding cell.",
      "Explore and identify the hardware components.",
      "Learn the purpose of the major welding-cell components.",
      "Start the guided startup sequence.",
      "Follow the required operational steps in the correct order.",
      "Enter the welding simulation.",
      "Observe the robotic welding process from an immersive perspective."
    ],
    features: [
      "Interactive robotic welding cell environment",
      "Hardware component identification",
      "Component nomenclature and information",
      "Guided startup sequence",
      "Step-by-step operational guidance",
      "Robotic welding process simulation",
      "Close-range observation of welding operation",
      "Immersive industrial training environment"
    ],
    role:
      "XR Developer responsible for developing the VR training experience, interactive hardware learning, guided startup workflow, and robotic welding simulation.",
    contribution:
      "Developed the interactive VR environment and learning flow across the three modules. Worked on hardware interactions and component identification, implemented the guided startup sequence, and developed the simulation workflow for demonstrating the robotic welding operation.",
    challenges: [
      "Representing complex robotic welding-cell equipment in an understandable training environment.",
      "Converting the real startup procedure into an interactive VR sequence.",
      "Providing a safe way to observe an active welding process at close range.",
      "Making the experience training-oriented rather than only a visual replica of the equipment."
    ],
    solutions: [
      "Structured the application into progressive Hardware Introduction, Startup Sequence, and Simulation modules.",
      "Used interactive component information to build hardware familiarity before operation.",
      "Converted the operational procedure into a guided sequence with step-based interactions.",
      "Created an immersive welding simulation that allows safe close-range observation."
    ],
    results: [
      "Created an immersive VR-based robotic welding training environment.",
      "Enabled users to understand welding-cell hardware before operation.",
      "Provided a guided startup procedure in a controlled virtual environment.",
      "Enabled safe observation of the robotic welding process through simulation.",
      "Established the foundation for subsequent industrial VR training applications."
    ],
    video: {
      provider: "google-drive",
      url: "https://drive.google.com/file/d/1a-hrcBdxPS0_5iZm-ouIdmKqp3_G_Twy/view?usp=sharing"
    },
    gallery: [],
    status: "seeded"
  },
  {
    slug: "pneumatic-trainer-vr",
    title: "Pneumatic Trainer VR",
    discipline: "XR",
    category: "VR",
    client: null,
    year: null,
    technologies: ["Unity", "Meta All in One SDK", "Quest 3", "Blender", "Figma"],
    shortDescription:
      "An interactive VR pneumatic training system for building, connecting, and operating pneumatic circuits with virtual components and pressure visualization.",
    detailedDescription:
      "Pneumatic Trainer VR is an immersive training application that recreates a physical pneumatic trainer kit inside a VR environment. Users can pick up components, place them on the trainer, connect pneumatic lines, configure valves, operate controls, and observe the resulting system behavior. The advanced trainer supports Single-Acting Cylinder, Double-Acting Cylinder, and Electro-Pneumatic configurations, providing a hands-on environment for understanding pneumatic systems through experimentation.",
    objective:
      "The objective was to provide a safe and repeatable virtual environment for learning pneumatic systems without requiring continuous access to physical trainer hardware. The application allows users to understand components, build circuits, operate controls, and observe pressure and actuator behavior.",
    problem:
      "Pneumatic training traditionally depends on physical trainer kits and laboratory equipment. Users need to understand the relationship between pressure, valves, flow control, connections, and actuators, while physical equipment limits availability and experimentation. The VR trainer provides a hands-on alternative where users can construct and test circuits virtually.",
    flow: [
      {
        label: "Component Introduction",
        description:
          "Introduces the pneumatic components available in the virtual trainer."
      },
      {
        label: "Circuit Assembly",
        description:
          "Users place components and create pneumatic connections between ports to construct a circuit."
      },
      {
        label: "Pressurize",
        description:
          "Users activate the pressure source and observe pressure within the connected circuit."
      },
      {
        label: "Operate & Observe",
        description:
          "Users operate valves and controls and observe cylinder movement and pneumatic behavior."
      },
      {
        label: "Experiment",
        description:
          "Users can modify the circuit and observe how changes affect the system."
      }
    ],
    userJourney: [
      "Enter the virtual pneumatic training environment.",
      "Identify the available pneumatic components.",
      "Pick up and position components on the trainer.",
      "Connect pneumatic lines between component ports.",
      "Configure the required valve arrangement.",
      "Activate the pressure source.",
      "Operate valves or switches.",
      "Observe pressure and airflow visualization.",
      "Observe Single-Acting or Double-Acting Cylinder movement.",
      "Modify the circuit and experiment with different configurations."
    ],
    features: [
      "Interactive VR pneumatic trainer",
      "Grab-and-place pneumatic components",
      "Virtual pneumatic pipe connections",
      "Dynamic connection visualization",
      "Pneumatic network management",
      "Pressure visualization",
      "Single-Acting Cylinder training",
      "Double-Acting Cylinder training",
      "3/2 and 5/2 directional control valves",
      "One-Way Flow Control Valve",
      "Manometer / pressure gauge",
      "Electro-Pneumatic training concepts",
      "Interactive circuit experimentation"
    ],
    role:
      "XR Developer responsible for developing the VR interaction systems, pneumatic circuit logic, component behavior, connection visualization, and training experience.",
    contribution:
      "Developed the interactive pneumatic trainer environment, including component interaction, grab and placement systems, pneumatic port connections, virtual pipe visualization, pneumatic network management, pressure visualization, valve interactions, and cylinder behavior.",
    challenges: [
      "Creating flexible virtual pneumatic connections that users can dynamically create and modify.",
      "Representing pneumatic relationships between pressure sources, valves, flow-control components, and actuators.",
      "Making invisible pressure and airflow understandable through visual feedback.",
      "Maintaining natural VR interaction while enforcing pneumatic circuit logic."
    ],
    solutions: [
      "Implemented a component and port-based connection system for dynamic circuit construction.",
      "Developed a pneumatic network architecture where components act as nodes and connections define the circuit topology.",
      "Added pressure-based visualization to communicate pneumatic state.",
      "Connected VR interactions with the underlying pneumatic logic so user actions directly affect the simulated system."
    ],
    results: [
      "Created an interactive VR environment for pneumatic-system learning.",
      "Enabled users to construct and experiment with pneumatic circuits.",
      "Supported Single-Acting, Double-Acting, and Electro-Pneumatic concepts.",
      "Provided visual feedback for pressure and actuator behavior.",
      "Demonstrated hands-on industrial training without requiring physical pneumatic trainer hardware."
    ],
    video: {
      provider: "google-drive",
      url: "https://drive.google.com/file/d/1ed73JJNbmD5lCGXsgLwtXuG98MuYBeoQ/view?usp=sharing"
    },
    gallery: [],
    status: "seeded"
  },
  {
    slug: "ar-maintenance",
    title: "AR Maintenance",
    discipline: "XR",
    category: "AR",
    client: null,
    year: null,
    technologies: ["Unity", "Vuforia Engine", "Model Target", "Image Target", "Blender"],
    shortDescription:
      "An AR-based industrial maintenance training experience that guides users from hardware identification and troubleshooting to repair and component replacement.",
    detailedDescription:
      "Maintenance Through AR is an industrial maintenance training application designed around a complete diagnose-to-resolution workflow. The experience covers Servo Motor, RFID, and Proximity Sensor maintenance. Users first understand the hardware, then follow visual troubleshooting guidance, perform the required fix, and proceed to a replacement sequence if the issue cannot be resolved. A hybrid Vuforia tracking approach uses Model Targets when the component is suitably visible from the front and Image Targets when the component is not suitably visible for Model Target recognition.",
    objective:
      "The objective was to create an AR-assisted maintenance workflow that places contextual visual guidance directly around physical industrial equipment and helps users understand, diagnose, repair, and replace components through a structured maintenance process.",
    problem:
      "Industrial maintenance procedures often require technicians to work with physical equipment while referring to separate manuals, diagrams, or videos. Components may also be viewed from different orientations, making a single tracking approach insufficient. The application addresses these challenges through contextual AR instructions and hybrid tracking.",
    flow: [
      {
        label: "Hardware Introduction",
        description:
          "Introduces the physical component and helps the user understand its hardware and function."
      },
      {
        label: "Troubleshooting",
        description:
          "Provides visual AR guidance to inspect the component and identify the source of the issue."
      },
      {
        label: "Fix",
        description:
          "Provides step-by-step visual instructions for performing the required corrective action."
      },
      {
        label: "Replacement",
        description:
          "If the issue cannot be fixed, guides the user through the component replacement procedure."
      }
    ],
    userJourney: [
      "Launch the AR Maintenance application.",
      "Select the required industrial component.",
      "Identify the physical component.",
      "Complete the Hardware Introduction.",
      "Start the Troubleshooting module.",
      "Follow visual AR guidance to identify the fault.",
      "Perform the required diagnostic actions.",
      "Follow the Fix procedure.",
      "Verify whether the issue has been resolved.",
      "If unresolved, enter the Replacement module.",
      "Follow the replacement sequence and complete the maintenance workflow."
    ],
    features: [
      "AR-based industrial maintenance training",
      "Hardware introduction",
      "Visual troubleshooting guidance",
      "Step-by-step repair instructions",
      "Component replacement workflow",
      "Servo Motor maintenance",
      "RFID maintenance",
      "Proximity Sensor maintenance",
      "Vuforia Model Target tracking",
      "Vuforia Image Target tracking",
      "Hybrid tracking strategy",
      "Contextual visual AR instructions"
    ],
    role:
      "XR Developer responsible for developing the AR maintenance experience, Vuforia tracking implementation, maintenance workflow, visual guidance system, and component-specific maintenance sequences.",
    contribution:
      "Developed the Unity AR application, implemented Vuforia Model Targets and Image Targets, designed the hybrid tracking workflow, and developed the Hardware Introduction, Troubleshooting, Fix, and Replacement sequences for the Servo Motor, RFID, and Proximity Sensor.",
    challenges: [
      "Supporting reliable tracking when industrial components are viewed from different orientations.",
      "Converting troubleshooting knowledge into clear sequential AR guidance.",
      "Connecting diagnosis with the appropriate repair workflow.",
      "Providing a replacement path when the initial repair does not resolve the issue."
    ],
    solutions: [
      "Used Model Targets when the component was suitably visible from the front.",
      "Used Image Targets as an alternative tracking method when Model Target recognition was not suitable.",
      "Structured maintenance into Hardware Introduction, Troubleshooting, Fix, and Replacement stages.",
      "Used contextual AR visuals to identify inspection areas and guide physical maintenance actions."
    ],
    results: [
      "Created a complete AR-assisted industrial maintenance workflow.",
      "Enabled guided troubleshooting for Servo Motor, RFID, and Proximity Sensor systems.",
      "Provided visual repair guidance and a fallback replacement workflow.",
      "Demonstrated a hybrid Vuforia tracking approach for different component viewpoints."
    ],
    video: { provider: "none" },
    gallery: [],
    status: "seeded"
  },
  {
    slug: "mr-product-visualization",
    title: "MR Product Visualization",
    discipline: "XR",
    category: "MR",
    client: null,
    year: null,
    technologies: ["Unity", "Mixed Reality", "RAG", "AI Voice Assistant"],
    shortDescription:
      "An interactive Mixed Reality product exploration experience combining 1:1 mechanism visualization, component interaction, process simulation, and a RAG-based AI assistant.",
    detailedDescription:
      "MR Product Visualization is a Mixed Reality experience designed to help users understand a complex mechanism kit through interactive product exploration. Users can place the mechanism at 1:1 scale within their environment, manipulate individual components, explore their functions, and visualize the complete working process. The application also includes a RAG-based AI assistant grounded in mechanism-kit knowledge. By tapping Ask AI, the user can speak a question and receive an answer based on the mechanism's knowledge base.",
    objective:
      "The objective was to create an immersive product-learning experience where users could understand a mechanism through direct spatial interaction and conversational AI rather than relying only on conventional documentation.",
    problem:
      "Complex mechanisms contain multiple interconnected components and processes that can be difficult to understand through static documentation. Users need both component-level information and a system-level understanding of how the mechanism operates, while different users may have different technical questions.",
    flow: [
      {
        label: "Product Placement",
        description:
          "The user places the 1:1 scale mechanism within their physical environment."
      },
      {
        label: "Explore & Inspect",
        description:
          "Users interact with individual components through spatial interactions such as grab, rotate, move, and zoom."
      },
      {
        label: "Understand Components",
        description:
          "The application provides contextual UI and audio information about individual mechanism components."
      },
      {
        label: "Visualize Working Process",
        description:
          "An animated process demonstrates how the workpiece moves through the mechanism's stations."
      },
      {
        label: "Ask AI",
        description:
          "The user taps Ask AI, speaks a question, and receives a mechanism-specific answer from the RAG-based assistant."
      }
    ],
    userJourney: [
      "Launch the MR application.",
      "Place the mechanism within the physical environment.",
      "Adjust its position for comfortable interaction.",
      "Enter the Explore experience.",
      "Interact with individual components.",
      "View component information and audio explanations.",
      "Visualize the complete mechanism working process.",
      "Tap Ask AI.",
      "Speak a question about the mechanism.",
      "Receive an AI-generated answer grounded in the mechanism-kit knowledge base."
    ],
    features: [
      "Mixed Reality product visualization",
      "1:1 scale mechanism visualization",
      "Spatial product placement",
      "Component-level interaction",
      "Grab, rotate, move, zoom, and reset interactions",
      "Interactive component information",
      "Audio-guided exploration",
      "Working-process animation",
      "Assembly-line process visualization",
      "RAG-based AI assistant",
      "Voice-based question input",
      "Mechanism-specific AI question answering"
    ],
    role:
      "XR Developer responsible for developing the Mixed Reality product visualization experience, spatial interactions, component exploration, process visualization, and integration of the AI-assisted question-and-answer experience.",
    contribution:
      "Developed the MR experience in Unity, implemented spatial product placement and component interactions, created the mechanism exploration workflow and working-process visualization, and integrated the RAG-based AI assistant with the Ask AI voice interaction.",
    challenges: [
      "Making a complex mechanism understandable at both component and system levels.",
      "Creating natural spatial interactions with the 1:1 product model.",
      "Explaining the complete working process rather than only displaying the product.",
      "Making technical information accessible through conversational interaction.",
      "Grounding AI answers in mechanism-specific knowledge."
    ],
    solutions: [
      "Presented the mechanism at 1:1 scale for spatial understanding.",
      "Implemented component-level grab and manipulation interactions.",
      "Added contextual UI and audio explanations.",
      "Created a working-process animation showing the complete mechanism flow.",
      "Integrated a RAG-based AI assistant grounded in the mechanism-kit knowledge base."
    ],
    results: [
      "Created an interactive MR product-exploration experience.",
      "Enabled users to understand individual mechanism components and the complete process.",
      "Combined spatial product visualization with conversational AI.",
      "Enabled voice-based questions through the Ask AI interface.",
      "Demonstrated RAG-based technical assistance within an MR experience."
    ],
    video: {
      provider: "google-drive",
      url: "https://drive.google.com/file/d/1JYH29jm3K3klHiQ265-louN3U_4bNOGj/view?usp=sharing"
    },
    gallery: [],
    status: "seeded"
  },
  {
    slug: "mr-product-logistics",
    title: "MR Product Logistics",
    discipline: "XR",
    category: "MR",
    client: null,
    year: null,
    technologies: ["Unity", "Meta Quest", "QR Code", "Mixed Reality"],
    shortDescription:
      "An ongoing Mixed Reality warehouse logistics experience for identifying incoming products, visualizing their contents, and guiding users to the correct storage rack.",
    detailedDescription:
      "MR Product Logistics is an ongoing Mixed Reality application designed to support warehouse product receiving and storage. When an incoming product enters the warehouse, the user scans its QR code using the Meta Quest camera. The application identifies the product and displays details such as model and quantity, while also providing a 3D visualization of the product inside the box. After identification, the application determines the designated rack and provides spatial guidance to help the user navigate to the correct storage location.",
    objective:
      "The objective is to create an MR-assisted warehouse workflow that connects physical products with their digital information and guides warehouse personnel from product receiving through correct rack placement.",
    problem:
      "Warehouse personnel need to identify incoming products, understand their contents, and locate the correct storage position. Relying only on labels or manually searching for racks can make this process slower and more error-prone. The application uses QR-based identification and spatial MR guidance to connect product information with the physical warehouse.",
    flow: [
      {
        label: "Product Entry",
        description:
          "An incoming product enters the warehouse and the user starts the MR logistics workflow."
      },
      {
        label: "Scan QR",
        description:
          "The user scans the product QR code using the Meta Quest camera."
      },
      {
        label: "Identify Product",
        description:
          "The application retrieves product information such as model, quantity, and related details."
      },
      {
        label: "Visualize Product",
        description:
          "The application displays a digital representation of the product contained inside the box."
      },
      {
        label: "Find Storage Rack",
        description:
          "The application identifies the designated rack for the product."
      },
      {
        label: "Navigate",
        description:
          "The user follows an MR-guided path to reach the assigned storage location."
      },
      {
        label: "Store Product",
        description:
          "The user places the product at the designated rack and completes the storage task."
      }
    ],
    userJourney: [
      "Receive the incoming product.",
      "Launch the MR Product Logistics experience.",
      "Scan the product QR code using the Meta Quest camera.",
      "View product model, quantity, and other product information.",
      "Visualize the product contained inside the box.",
      "View the assigned storage rack.",
      "Follow the MR-guided path through the warehouse.",
      "Reach the designated rack.",
      "Place the product at the correct storage location.",
      "Complete the storage workflow."
    ],
    features: [
      "Mixed Reality warehouse experience",
      "Meta Quest camera-based QR scanning",
      "Product identification",
      "Product model and quantity display",
      "3D visualization of product contents",
      "Assigned rack identification",
      "MR spatial navigation",
      "Guided path visualization",
      "Distance and direction guidance",
      "Rack/location visualization",
      "Product placement workflow",
      "Storage task completion"
    ],
    role:
      "XR Developer responsible for developing the Mixed Reality logistics experience, QR-based product identification, product visualization, spatial navigation, and warehouse storage workflow.",
    contribution:
      "Developing the MR logistics application in Unity, including the product-entry workflow, Meta Quest camera-based QR scanning, product information interface, 3D product visualization, spatial navigation, rack guidance, and product placement workflow.",
    challenges: [
      "Connecting physical packages with their corresponding digital product records.",
      "Providing an understandable digital representation of products contained inside packages.",
      "Guiding users through a warehouse to a specific storage rack.",
      "Maintaining reliable spatial relationships between the user, warehouse environment, and destination.",
      "Validating correct placement at the assigned storage location."
    ],
    solutions: [
      "Use QR codes as the digital identity of incoming physical products.",
      "Display product information and a 3D product representation after scanning.",
      "Use spatial MR navigation to guide users toward the assigned rack.",
      "Use defined storage positions and spatial cues to support correct product placement."
    ],
    results: [
      "Ongoing development of an MR-assisted warehouse logistics workflow.",
      "Established a QR-to-product-information identification flow.",
      "Integrated 3D product visualization for packaged items.",
      "Developed the concept for MR-guided navigation to storage racks.",
      "Created a foundation for an end-to-end product receiving and storage experience."
    ],
    video: { provider: "none" },
    gallery: [],
    status: "seeded"
  },
  {
    slug: "vmc-ar",
    title: "VMC AR",
    discipline: "XR",
    category: "AR",
    client: null,
    year: null,
    technologies: ["Unity", "Vuforia Engine", "Model Target", "Blender", "Figma"],
    shortDescription:
      "An AR-based VMC operator training application that provides step-by-step guidance for machine operation and control tasks.",
    detailedDescription:
      "VMC AR is an augmented reality training application developed to train operators on key VMC machine operations through contextual, step-by-step visual guidance. Users select a specific training module and point the device camera toward the VMC. Once the machine is recognized using a Vuforia Model Target, virtual instructional content is augmented over the physical machine. The application guides the operator through the selected task, helping them understand and execute the required machine controls in a structured training workflow.",
    objective:
      "The objective was to provide an AR-assisted training environment for VMC operators where machine-specific instructions and guidance are presented directly over the physical equipment. The application is designed to help users learn and execute individual VMC control operations through a structured, visual training experience.",
    problem:
      "VMC operators need to understand multiple machine controls and operating procedures, and conventional training often requires access to the physical machine along with trainer-led instruction. The application addresses this by placing step-by-step guidance directly on the VMC, allowing operators to learn individual control tasks while remaining connected to the physical machine.",
    flow: [
      {
        label: "Select Training Module",
        description:
          "The user opens the application and selects the VMC operation they want to learn."
      },
      {
        label: "Recognize VMC",
        description:
          "The user points the device camera toward the VMC and the Vuforia Model Target recognizes the machine."
      },
      {
        label: "Augment Training Content",
        description:
          "Virtual instructional content appears spatially aligned with the physical VMC."
      },
      {
        label: "Step-by-Step Guidance",
        description:
          "The application guides the user through the selected machine operation using sequential visual instructions."
      },
      {
        label: "Execute the Task",
        description:
          "The operator follows the guidance and performs the required control operation on the physical VMC."
      }
    ],
    userJourney: [
      "Launch the VMC AR training application.",
      "Select the required training module.",
      "Point the device camera toward the VMC.",
      "Allow the application to recognize the VMC using the Model Target.",
      "View the augmented training content.",
      "Follow the step-by-step instructions.",
      "Perform the required VMC control operation.",
      "Complete the selected training task."
    ],
    features: [
      "AR-based VMC operator training",
      "Vuforia Model Target tracking",
      "Physical VMC recognition",
      "Spatially aligned training content",
      "Step-by-step visual guidance",
      "Module-based training workflow",
      "Spindle control training",
      "Coolant control training",
      "Tool change control training",
      "Tool offset training"
    ],
    role:
      "XR Developer responsible for developing the AR-based VMC training experience, implementing Model Target tracking, creating the module-based training workflow, and developing step-by-step machine operation guidance.",
    contribution:
      "Developed the VMC AR training application in Unity using Vuforia Model Target tracking. Implemented the VMC recognition workflow, module selection, augmented instructional content, and step-by-step guidance for spindle control, coolant control, tool change control, and tool offset operations.",
    challenges: [
      "Accurately recognizing the physical VMC and maintaining alignment of virtual instructional content.",
      "Converting machine operating procedures into clear and sequential AR instructions.",
      "Presenting guidance without obstructing the operator's view of the physical machine.",
      "Structuring multiple VMC operations into independent training modules."
    ],
    solutions: [
      "Used Vuforia Model Target to recognize the physical VMC and anchor the training experience.",
      "Structured the application into task-specific training modules.",
      "Implemented sequential AR guidance to explain each machine operation.",
      "Presented contextual virtual instructions around the relevant physical controls."
    ],
    results: [
      "Created an AR-based training environment for VMC operators.",
      "Enabled users to select and learn individual VMC control operations.",
      "Provided step-by-step guidance directly over the physical VMC.",
      "Covered spindle control, coolant control, tool change control, and tool offset training."
    ],
    video: {
      provider: "google-drive",
      url: "https://drive.google.com/file/d/1lyGE7x8nyw0KO4j_QeMRoTqTygkHBCqJ/view?usp=sharing"
    },
    gallery: [],
    status: "seeded"
  },
  {
    slug: "amr-cad-gazebo-simulation",
    title: "Autonomous Mobile Robot (AMR) — CAD Modelling & Gazebo Simulation",
    discipline: "Product Design",
    category: "Mechanical",
    client: "UN World Food Programme",
    year: "2024–2025",
    technologies: ["Fusion 360", "Blender", "CAD Modelling", "Gazebo", "Robot Simulation", "Sensors"],
    shortDescription:
      "Mechanical design and CAD modelling of an Autonomous Mobile Robot and its warehouse environment, optimized for Gazebo-based navigation simulation and testing.",
    detailedDescription:
      "This project covers the complete mechanical design and CAD modelling of an Autonomous Mobile Robot (AMR) built for warehouse navigation and real-time food monitoring, developed in support of the UN World Food Programme. Beyond the core AMR structure, the work included building a simulation-optimized version of the CAD model and a matching warehouse environment, so the robot's navigation and system behaviour could be tested and debugged in Gazebo before deployment.",
    objective:
      "The objective was to design a mechanically sound AMR and translate that design into a simulation-ready pipeline — producing CAD models accurate enough for the physical build while also structured and lightweight enough to run efficiently inside a Gazebo simulation, alongside a representative warehouse environment for navigation testing.",
    problem:
      "A physically accurate CAD model is not automatically suitable for real-time robotics simulation — high-fidelity geometry built for the physical structure is often too heavy and complex to simulate efficiently, and warehouse environments need to be modelled separately to give the robot something realistic to navigate. There was a need to bridge mechanical design with the simulation and testing workflow used for navigation and system validation.",
    flow: [
      {
        label: "Mechanical Design",
        description: "Designed the complete AMR system from a mechanical design standpoint, covering its structure and core components."
      },
      {
        label: "Detailed CAD Modelling",
        description: "Built detailed CAD models of the AMR's mechanical structure and components."
      },
      {
        label: "Simulation-Optimized CAD",
        description: "Developed a separate, optimized CAD version of the AMR tuned for simulation accuracy and computational efficiency."
      },
      {
        label: "Warehouse Environment Design",
        description: "Designed and prepared the warehouse environment required for AMR simulation."
      },
      {
        label: "Gazebo Integration",
        description: "Optimized the AMR and warehouse models for Gazebo-based testing, debugging, and simulation."
      },
      {
        label: "CAD-to-Simulation Workflow",
        description: "Refined the CAD-to-simulation workflow so the mechanical models could be used effectively for navigation and system testing."
      }
    ],
    userJourney: [],
    features: [
      "Detailed mechanical CAD model of the AMR structure and components",
      "Simulation-optimized CAD variant for computational efficiency",
      "Custom-built warehouse environment model for simulation",
      "Gazebo-integrated AMR and warehouse for navigation testing",
      "CAD-to-simulation workflow supporting iterative testing and debugging"
    ],
    role:
      "Mechanical Design & CAD Engineer responsible for the complete CAD modelling of the AMR and its simulation environment, and for preparing the mechanical models for Gazebo-based testing.",
    contribution:
      "Designed and developed the complete AMR system using mechanical design and CAD modelling in Fusion 360 and Blender. Created detailed CAD models of the robot's structure and components, then built a separate, simulation-optimized CAD version for computational efficiency. Designed and prepared the warehouse environment required for simulation, and optimized both the AMR and warehouse models for Gazebo-based testing, debugging, and simulation, establishing a CAD-to-simulation workflow for navigation and system testing.",
    challenges: [
      "Balancing CAD geometry fidelity with the computational efficiency needed for real-time Gazebo simulation.",
      "Building a warehouse environment detailed enough to be a meaningful navigation testbed without overloading the simulation.",
      "Maintaining a reliable CAD-to-simulation workflow so mechanical design changes stayed compatible with the simulation models."
    ],
    solutions: [
      "Developed a dedicated, simulation-optimized CAD version of the AMR separate from the full-detail design model.",
      "Modelled a purpose-built warehouse environment scoped specifically for AMR navigation simulation.",
      "Structured a CAD-to-simulation workflow to keep the mechanical models usable for navigation and system testing in Gazebo."
    ],
    results: [
      "Produced a complete mechanical CAD model of the AMR system.",
      "Delivered a simulation-ready CAD version optimized for Gazebo.",
      "Built a warehouse environment model to support AMR navigation testing and debugging."
    ],
    video: { provider: "none" },
    gallery: [],
    status: "seeded"
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProject(slug: string): Project {
  const index = projects.findIndex((project) => project.slug === slug);
  const nextIndex = (index + 1) % projects.length;
  return projects[nextIndex];
}
