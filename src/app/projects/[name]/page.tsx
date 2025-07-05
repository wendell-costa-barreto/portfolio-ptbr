"use client";

import { useParams } from "next/navigation";
import {
  VisitezLeQuebec,
  SolarSystem,
  NexusDashboard,
  EldenRing,
  Cats,
} from "@/lib/utils";
import { ImageProps } from "@/components/ui/VerticalSlider";
import Image from "next/image";
import { roboto } from "@/lib/utils";
import Link from "next/link";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

type Project = {
  name: string;
  title: string;
  images: ImageProps[];
  description: string;
  techStack: string[];
  demo: string;
  text: Text;
};

type Text = {
  title: string;
  text1: string;
  text2: string | undefined;
  text3: string | undefined;
};

const projects: Project[] = [
  {
    name: "visitezlequebec",
    title: "Visitez le Québec",
    images: VisitezLeQuebec,
    description:
      "Um site interativo de promoção turística (em desenvolvimento)",
    techStack: [`React`, "Tailwind CSS"],
    demo: "https://visitez-le-quebec.vercel.app",
    text: {
      title:
        "Bem-vindo ao Visitez le Québec: Seu Guia para Explorar o Québec, Canadá",
      text1:
        "No Visitez le Québec, nosso objetivo é inspirar viajantes a descobrir a beleza deslumbrante, a cultura rica e a vibrante história do Québec, Canadá. Nosso site serve como um recurso completo para explorar esta magnífica província, apresentando uma variedade de atividades, destinos populares e experiências culturais únicas.",
      text2:
        "O projeto Visitez le Québec foi refatorado com uma abordagem mais moderna, transformando-se em um site interativo com mais recursos e uma interface mais ousada, mantendo pontuações acima de 90 em todas as métricas (desempenho, SEO, boas práticas e acessibilidade).",
      text3:
        "O Visitez le Québec foi desenvolvido com tecnologias modernas da web, utilizando React para uma experiência rápida e responsiva. O Tailwind CSS garante uma interface elegante e amigável, enquanto o Leaflet oferece mapas interativos para ajudar na navegação pela província. Os sliders com Swiper apresentam imagens impressionantes das paisagens e eventos culturais do Québec.",
    },
  },
  {
    name: "solarsystem",
    title: "Sistema Solar",
    images: SolarSystem,
    description: "Um modelo 3D do sistema solar",
    techStack: ["Three.js", "GLTF"],
    demo: "https://solar-system-plum.vercel.app",
    text: {
      title: "Modelo 3D do Sistema Solar",
      text1:
        "Este projeto é um modelo 3D do sistema solar, criado com Three.js. Ele apresenta um sol dinâmico e planetas com trajetórias orbitais e rotações conforme a circunferência de cada planeta.",
      text2: undefined,
      text3: undefined,
    },
  },
  {
    name: "nexusdashboard",
    title: "Nexus Dashboard",
    images: NexusDashboard,
    description: "Um painel de criptomoedas",
    techStack: ["Next.js", "Tailwind CSS"],
    demo: "https://cryptocurrency-dashboard-flame.vercel.app/",
    text: {
      title: "Nexus Dashboard: Seu Painel Completo de Criptomoedas",
      text1:
        "O Nexus Dashboard é uma poderosa ferramenta para visualizar as criptomoedas mais populares, fornecendo aos usuários insights abrangentes sobre seus valores, flutuações e desempenho histórico. O painel apresenta dados essenciais, incluindo valores máximos e mínimos, bem como valores de Abertura, Máxima, Mínima e Fechamento (OHLC), todos exibidos por meio de gráficos interativos que aumentam o engajamento e a compreensão do usuário. Foi projetado um painel intuitivo e centrado no usuário que alcançou pontuações perfeitas de 100/100 no Lighthouse para desempenho, SEO, boas práticas e acessibilidade.",
      text2:
        "Foi desenvolvido um portfólio onde os usuários podem acompanhar sua carteira digital e calcular o valor correspondente das suas criptomoedas, aumentando a duração média da sessão em 34%, utilizando a API da CoinGecko e Supabase no backend.",
      text3:
        "Com renderização estática e otimizações em imagens e JavaScript não utilizado, alcançou-se 97% de desempenho no GTMetrix e LCP inferior a 1 segundo, garantindo uma experiência de usuário excelente e tempos de carregamento extremamente rápidos para dados financeiros em tempo real.",
    },
  },
  {
    name: "eldenring",
    title: "Elden Ring",
    images: EldenRing,
    description:
      "Uma réplica da interface do jogo Elden Ring, feita durante o aprendizado de HTML e CSS.",
    techStack: ["HTML", "CSS"],
    demo: "Not available",
    text: {
      title: "Réplica da Interface do Elden Ring",
      text1:
        "Uma réplica da interface inicial e da tela de criação de classes do jogo Elden Ring. Este projeto foi feito para aprender através da prática com HTML e CSS.",
      text2: undefined,
      text3: undefined,
    },
  },
  {
    name: "cats",
    title: "Gatos",
    images: Cats,
    description:
      "Um site sobre gatos, feito durante o aprendizado de HTML e CSS.",
    techStack: ["HTML", "CSS"],
    demo: "Not available",
    text: {
      title: "Wiki de Raças de Gatos",
      text1:
        "Este site apresenta 14 raças de gatos em sueco. Foi desenvolvido como prática para aprender HTML e CSS.",
      text2: undefined,
      text3: undefined,
    },
  },
];

export default function ProjectPage() {
  const { name: projectName } = useParams();
  const project = projects.find((p) => p.name === projectName);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <motion.div
        className="w-full h-[10vh] flex justify-center items-start flex-col mb-[12%] mt-[23vh] lg:mt-[15vh]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1
          className={`${roboto.className} uppercase font-roboto text-3xl mb-5 ml-[7%] font-bold`}
        >
          {project.title}
        </h1>
        <div className="w-full flex justify-start gap-[20%] flex-col lg:flex-row">
          <h2
            className={`${roboto.className} font-roboto text-2xl mb-5 ml-[7%] w-[90%] lg:w-[30%]`}
          >
            {project.description}
            <br />
            {project.demo === "Not available" ? (
              <span className="font-bold">Demo not available</span>
            ) : (
              <Link href={project.demo} className="font-bold underline">
                Demo do site
              </Link>
            )}
          </h2>
          <h2
            className={`${roboto.className} font-roboto text-2xl mb-5 w-[90%] ml-[7%] lg:ml-0 lg:w-[30%]`}
          >
            <span className="font-bold">Tech Stack</span>
            <br /> {project.techStack.join(", ")}
          </h2>
        </div>
      </motion.div>
      <motion.div
        className="w-full h-full flex flex-col justify-center items-center gap-6 mt-[20vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {project.images.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            width={800}
            height={500}
            className="object-cover"
          />
        ))}
      </motion.div>

      <motion.div
        className="w-full h-[60%] flex justify-center items-center my-[15%] lg:my-[5%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex flex-col gap-4 w-full justify-center items-center">
          <h1
            className={`${roboto.className} font-roboto text-3xl mb-16 w-[85%] lg:w-full text-center`}
          >
            {project.text.title}
          </h1>
          <p
            className={`${roboto.className} font-roboto text-xl lg:text-2xl w-[75%] lg:w-[40%] text-justify`}
          >
            {project.text.text1}
          </p>
          {project.text.text2 && (
            <p
              className={`${roboto.className} font-roboto text-xl lg:text-2xl w-[75%] lg:w-[40%] text-justify`}
            >
              {project.text.text2}
            </p>
          )}
          {project.text.text3 && (
            <p
              className={`${roboto.className} font-roboto text-xl lg:text-2xl w-[75%] lg:w-[40%] text-justify`}
            >
              {project.text.text3}
            </p>
          )}
        </div>
      </motion.div>

      <motion.div
        className="w-full flex justify-between items-center h-[15vh] relative mb-[7vh] mt-[20vh] lg:mt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Link
          href={
            projects.indexOf(project) === 0
              ? projects[projects.length - 1].name
              : projects[projects.indexOf(project) - 1]?.name
          }
          className="flex flex-col justify-center items-start"
        >
          <span
            className={`${roboto.className} font-roboto text-md mx-16 flex gap-4 items-center`}
          >
            <FaArrowLeftLong />
            Anterior
          </span>
          <span
            className={`${roboto.className} font-roboto text-2xl lg:text-5xl mx-16`}
          >
            {projects.indexOf(project) === 0
              ? projects[projects.length - 1].title
              : projects[projects.indexOf(project) - 1]?.title}
          </span>
        </Link>
        <button className="absolute bottom-[15vh] lg:bottom-[35%] left-1/2 transform -translate-x-1/2 bg-transparent rounded-full py-3 px-16 hover:cursor-pointer hover:bg-white hover:text-black transition duration-300 ease-in-out border border-white">
          <h1 className={`${roboto.className} font-roboto text-2xl`}>
            <Link href="/projects">Todos os projetos</Link>
          </h1>
        </button>
        <Link
          href={
            projects.indexOf(project) === projects.length - 1
              ? projects[0].name
              : projects[projects.indexOf(project) + 1]?.name
          }
          className="flex flex-col justify-center items-end"
        >
          <span
            className={`${roboto.className} font-roboto text-md mx-16 flex gap-4 items-center`}
          >
            Próximo
            <FaArrowRightLong />
          </span>
          <span
            className={`${roboto.className} font-roboto text-2xl lg:text-5xl mx-16`}
          >
            {projects.indexOf(project) === projects.length - 1
              ? projects[0].title
              : projects[projects.indexOf(project) + 1]?.title}
          </span>
        </Link>
      </motion.div>
    </>
  );
}
