import { url } from "inspector";

export interface Link {
  title: string;
  url: string;
}

export interface Project {
  id: string;
  folderTitle: string;
  name: string;
  type: string;
  techstack: string;
  description: string;
  links: Link[];
  photoPaths: string[];
}

export let projects: Project[] = [
  {
    id: "perfect-pitch",
    folderTitle: "PerfectPitch.app",
    name: "Perfect Pitch",
    type: "App",
    techstack: "SwiftUI, Figma",
    description:
      "Perfect Pitch is an app designed to determine whether you have perfect pitch or to help you practice relative pitch. This app was submitted to the Swift Student Challenge 2025.",
    links: [
      {
        title: "Repo",
        url: "https://github.com/heryandjaruma/perfect-pitch",
      },
    ],
    photoPaths: [
      "/assets/image/perfectpitch/1.png",
      "/assets/image/perfectpitch/2.png",
    ],
  },
  {
    id: "grabesk",
    folderTitle: "GRABesk.app",
    name: "GRABEsk",
    type: "App",
    techstack: "OpenAI, Expo, Figma",
    description:
      "GRABesk is a project that won 3rd place in the Digital Empowerment track at HackJakarta 2024. This app integrates OpenAI within the context of Grab as a food delivery and ride-hailing service.",
    links: [
      {
        title: "LinkedIn Post",
        url: "https://www.linkedin.com/posts/heryandjaruma_hackjakarta-hackathon-grab-activity-7225065073910722560-4tYT",
      },
    ],
    photoPaths: [
      "/assets/image/grabesk/grabesk1.jpeg",
      "/assets/image/grabesk/grabesk2.jpeg",
    ],
  },
  {
    id: "banyoehirup",
    folderTitle: "BanyoeHirup.web",
    name: "BanyoeHirup",
    type: "Web",
    techstack: "NextJS, Figma, Vercel, PorkBun",
    description:
      "BanyoeHirup is an interactive web-based program targeting middle schoolers to learn about Climate Change. This web app was submitted to NASA Space Apps 2023 Challenge.",
    links: [
      {
        title: "Github repo",
        url: "https://github.com/heryandjaruma/banyoehirup",
      },
    ],
    photoPaths: [
      "/assets/image/bjir/bjir_1.png",
      "/assets/image/bjir/bjir_2.png",
    ],
  },
  {
    id: "kamifriend",
    folderTitle: "Kamifriend.app",
    name: "Kamifriend",
    type: "App",
    techstack: "Android, Java, Firebase",
    description:
      "Kamifriend is an app that has won two competitions, both in 1st place. It is an app designed to assist Indonesian UMKM in finding partnerships, gaining business insights, and hiring freelancers to help grow their businesses.",
    links: [
      {
        title: "Github repo",
        url: "https://github.com/joshuawenata/hackathon2022",
      },
      {
        title: "Youtube video",
        url: "https://youtu.be/UD4YgtE4WWU?si=lnsHkCgyv4YA7kHl",
      },
      {
        title: "Binus website",
        url: "https://binus.ac.id/bandung/2022/11/mahasiswa-binus-bandung-memenangkan-lomba-socs-hackathon-kategori-lomba-software-development-dan-artificial-intelligence/",
      },
    ],
    photoPaths: [
      "/assets/image/kamifriend/1.jpg",
      "/assets/image/kamifriend/2.jpg",
    ],
  },
  {
    id: "hikost",
    folderTitle: "Hikost.app",
    name: "Hikost",
    type: "App",
    techstack: "Android, Java",
    description: "Hikost is the app every &apos;anak kos&apos; needs to keep their money in check. When you splurge, this app gives you a friendly scolding, just like your mom would, so you stay on top of your budget.",
    links: [
        {
            title: "Github repo",
            url: "https://github.com/joshuawenata/hikost"
        }
    ],
    photoPaths:[
        "/assets/image/hikost/1.jpg",
        "/assets/image/hikost/2.jpg"
    ]
  }
];
