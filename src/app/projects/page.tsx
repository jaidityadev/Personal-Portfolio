import Link from "next/link";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import FadeIn from "@/components/animations/fade-in";
import StaggerIn from "@/components/animations/stagger-in";
import PageTransition from "@/components/animations/page-transition";
import HoverScale from "@/components/animations/hover-scale";
import Image from "next/image";

export default function ProjectsPage() {
    const projects = [
        {
            id: 9,
            title: "Foliyo 2.0 – AI-Powered Event Management Platform",
            description:
                "A full-stack Spring Boot + React platform that streamlines the entire event lifecycle with role-aware dashboards, secure JWT auth, MongoDB persistence, and an OpenAI-assisted chat copilot. Features include REST + OpenAPI APIs, admin + attendee workflows, and AI-powered event discovery.",
            image: "/images/foliyo2.png",
            tags: [
                "Spring Boot",
                "React",
                "TypeScript",
                "MongoDB",
                "JWT",
                "OpenAI API",
                "Gradle",
                "Docker",
            ],
            links: [
                {
                    label: "View README",
                    url: "https://github.com/jaidityadev/foliyo_2.0",
                },
                {
                    label: "Live App",
                    url: "https://foliyo-2-0.onrender.com",
                },
            ],
            featured: true,
        },
        {
            id: 8,
            title: "foliyo – Customer Management System",
            description:
                "A single-page React + TypeScript app (built with Vite) for admins to manage customer records. Features include secure login/registration, persistent sessions, search/filtering, avatar generation, and full CRUD operations on a remote API.",
            image: "/images/foliyo.png",
            tags: [
                "React",
                "TypeScript",
                "Vite",
                "React Router",
                "DiceBear Avatars",
                "React Icons",
                "REST API",
            ],
            links: [
                {
                    label: "View Repository",
                    url: "https://github.com/jaidityadev/foliyo",
                },
                {
                    label: "Live Demo",
                    url: "https://react-project-sghu.onrender.com/",
                },
            ],
            featured: true,
        },
        {
            id: 1,
            title: "Heterogeneous Ensemble Forecasting for Disease Prediction",
            description:
                "A research project focusing on machine learning models to predict the spread of diseases using ensemble-based forecasting techniques. This work combined multiple forecasting algorithms to improve prediction accuracy of disease outbreaks.",
            image: "/images/disease_prediction.png",
            tags: ["R", "Ensemble Forecasting", "CART", "RPART", "ARIMA", "NNAR", "CTREE"],
            links: [
                {
                    label: "Publication",
                    url: "https://doi.org/10.1007/s00354-020-00119-7",
                },
            ],
            featured: true,
        },
        {
            id: 2,
            title: "ARIMA Modelling for Time Series Forecasting",
            description:
                "Research on efficient techniques to forecast time series data using ARIMA Modelling Techniques. The project focused on improving forecasting accuracy for various types of time-dependent data.",
            image: "/images/arima_forecasting.png",
            tags: ["R", "Forecasting Algorithms", "ARIMA", "Time Series Analysis"],
            links: [
                {
                    label: "Publication",
                    url: "https://doi.org/10.37418/amsj.9.6.75",
                },
            ],
            featured: true,
        },
        {
            id: 6,
            title: "Health TrueInfo: A Multilingual Android App & Social Media Approach",
            description:
                "Implemented a multilingual Android app and leveraged social media to combat COVID-19 vaccine misinformation and hesitancy across Bolivia, India, and Canada. Collaborated with community influencers to create culturally relevant content.",
            image: "/images/health_trueinfo.png",
            tags: ["COVID-19", "Misinformation", "Public Health", "Android", "Social Media"],
            links: [
                {
                    label: "Publication",
                    url: "https://doi.org/10.33137/utjph.v9999i1.38113",
                },
            ],
            featured: true,
        },
        {
            id: 3,
            title: "Tax Form Classification System",
            description:
                "Developed a machine learning classification model at ADP Canada to identify tax form types, managing a real-time dataset of 800,000+ entries. The system automates the identification and processing of various tax documents.",
            image: "/images/tax.png",
            tags: ["Machine Learning", "Classification", "Python", "Data Visualization", "Large Datasets"],
            links: [],
            featured: true,
        },
        {
            id: 4,
            title: "3D Printing Market Analysis",
            description:
                "Market analysis project at Ernst and Young focusing on the Asia Pacific 3D Printing market. Utilized statistical modeling and market assessments to evaluate market feasibility for the I.I.T. Delhi Incubation Center.",
            image: "/projects/3d-printing.jpg",
            tags: ["Statistical Modeling", "Market Assessment", "Data-driven Models", "Regression Analysis", "Trend Forecasting"],
            links: [],
            featured: false,
        },
        {
            id: 5,
            title: "Dengue and Tuberculosis Prediction System",
            description:
                "Led research on predicting Dengue and Tuberculosis outbreaks using ensemble-based forecasting techniques. This project contributed to public health planning by enabling proactive measures against potential disease outbreaks.",
            image: "/projects/disease-outbreak.jpg",
            tags: ["Ensemble Forecasting", "Machine Learning", "Public Health", "Predictive Modeling", "R"],
            links: [],
            featured: false,
        },
        {
            id: 7,
            title: "Time Series Forecasting Techniques for Internet of Things: A Survey (Book Chapter)",
            description:
                "A comprehensive survey chapter on Time Series Forecasting techniques for Internet of Things (IoT) applications, covering enabling technologies, protocols, and implementation challenges.",
            image: "/images/iot_forecasting.png",
            tags: ["Time Series", "IoT", "Forecasting", "ARIMA", "Ensemble", "Survey"],
            links: [
                {
                    label: "DOI",
                    url: "https://doi.org/10.1201/9781003277330-13",
                },
                {
                    label: "Download PDF",
                    url: "https://drive.google.com/file/d/1KcsjoFHFaHqDlrcvc3WPUNjAn0bmwDI4/view?usp=sharing",
                },
            ],
            featured: true,
        },
    ];

    const featuredProjects = projects.filter((project) => project.featured);
    const otherProjects = projects.filter((project) => !project.featured);

    return (
        <PageTransition>
            <div className="py-12">
                <div className="container mx-auto px-4">
                    <FadeIn>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Projects</h1>
                        <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl">
                            A collection of my research work, data science projects and professional contributions
                        </p>
                    </FadeIn>

                    {/* Featured Projects */}
                    <section className="mb-16">
                        <FadeIn>
                            <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
                        </FadeIn>
                        <StaggerIn className="space-y-12" staggerDelay={0.2}>
                            {featuredProjects.map((project) => (
                                <HoverScale key={project.id} scale={1.01}>
                                    <Card className="overflow-hidden">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg">
                                                {project.image && (
                                                    <Image
                                                        src={project.image}
                                                        alt={project.title}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, 50vw"
                                                        priority
                                                        className="object-cover object-top"
                                                    />
                                                )}
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                                <p className="text-muted-foreground mb-6">{project.description}</p>
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {project.tags.map((tag) => (
                                                        <Badge key={tag}>{tag}</Badge>
                                                    ))}
                                                </div>
                                                {project.links.length > 0 && (
                                                    <div className="space-x-4">
                                                        {project.links.map((link) => (
                                                            <Button key={link.url} variant="outline" asChild>
                                                                <Link href={link.url}>{link.label}</Link>
                                                            </Button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </Card>
                                </HoverScale>
                            ))}
                        </StaggerIn>
                    </section>

                    {/* Other Projects */}
                    <section>
                        <FadeIn>
                            <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
                        </FadeIn>
                        <div className="grid md:grid-cols-2 gap-6">
                            {otherProjects.map((project) => (
                                <FadeIn key={project.id} delay={0.1 * project.id} direction="up">
                                    <HoverScale>
                                        <Card className="overflow-hidden h-full">
                                            <CardContent className="p-6">
                                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                                <p className="text-muted-foreground mb-4">{project.description}</p>
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {project.tags.map((tag) => (
                                                        <Badge key={tag} variant="secondary">{tag}</Badge>
                                                    ))}
                                                </div>
                                                {project.links.length > 0 && (
                                                    <div className="space-x-2">
                                                        {project.links.map((link) => (
                                                            <Button key={link.url} variant="outline" size="sm" asChild>
                                                                <Link href={link.url}>{link.label}</Link>
                                                            </Button>
                                                        ))}
                                                    </div>
                                                )}
                                            </CardContent>
                                        </Card>
                                    </HoverScale>
                                </FadeIn>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </PageTransition>
    );
}
