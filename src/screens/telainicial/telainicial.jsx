import React, { useEffect, useState } from 'react';
import styles from './telainicial.module.css';

const codeSnippets = [
    'const [state, setState] = useState(initialValue);',
    'useEffect(() => { fetchData(); }, [dependency]);',
    'import React from "react"; export default Component;',
    'const handleClick = (e) => { e.preventDefault(); };',
    'return <div className="container">{children}</div>;',
    'const MyComponent = ({ props }) => { return <div>...</div>; };',
    'interface Props { id: string; onClick: () => void; }',
    'const router = useRouter(); router.push("/dashboard");',

    'const express = require("express"); const app = express();',
    'app.get("/api/users", async (req, res) => { ... });',
    'const jwt = require("jsonwebtoken"); jwt.sign(payload, secret);',
    'const bcrypt = require("bcrypt"); await bcrypt.hash(password, 10);',
    'app.use(express.json()); app.use(cors());',
    'const server = app.listen(PORT, () => console.log("Server running"));',
    'const middleware = (req, res, next) => { next(); };',
    'process.env.NODE_ENV === "production" ? ... : ...;',

    'SELECT * FROM users WHERE email = ? AND active = 1;',
    'INSERT INTO products (name, price) VALUES (?, ?);',
    'UPDATE users SET last_login = NOW() WHERE id = ?;',
    'CREATE TABLE orders (id INT PRIMARY KEY AUTO_INCREMENT);',
    'JOIN orders o ON u.id = o.user_id WHERE o.status = "completed";',
    'const connection = mysql.createConnection({ host, user, password });',
    'ALTER TABLE users ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;',
    'DELETE FROM sessions WHERE expires_at < NOW();',

    'const pool = mysql.createPool({ connectionLimit: 10 });',
    'app.post("/auth/login", validateUser, generateToken);',
    'const [users, setUsers] = useState([]); useEffect(() => fetchUsers(), []);',
    'res.status(200).json({ success: true, data: results });',
    'const query = "SELECT * FROM users"; pool.query(query, callback);',
    'axios.post("/api/register", userData).then(response => ...);',
];

const getCodeColor = (text) => {
    if (text.includes('SELECT') || text.includes('INSERT') || text.includes('UPDATE') || text.includes('CREATE') || text.includes('mysql')) {
        return '#fb923c';
    } else if (text.includes('app.') || text.includes('express') || text.includes('require') || text.includes('process.env') || text.includes('jwt') || text.includes('bcrypt')) {
        return '#4ade80';
    } else if (text.includes('useState') || text.includes('useEffect') || text.includes('React') || text.includes('const [') || text.includes('return <') || text.includes('interface')) {
        return '#60a5fa';
    } else {
        return '#c084fc';
    }
};

const TelaInicial = () => {
    const [codeLines, setCodeLines] = useState([]);

    useEffect(() => {
        const initialLines = Array.from({ length: 18 }, (_, i) => {
            const text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
            return {
                id: i,
                text,
                x: Math.random() * (window.innerWidth - 200),
                y: Math.random() * window.innerHeight,
                speed: 0.3 + Math.random() * 0.7,
                opacity: 0.15 + Math.random() * 0.35,
                color: getCodeColor(text),
            };
        });

        setCodeLines(initialLines);

        const interval = setInterval(() => {
            setCodeLines(prev =>
                prev.map(line => {
                    const newY = line.y > window.innerHeight + 100 ? -100 : line.y + line.speed;
                    const newText = newY === -100 ? codeSnippets[Math.floor(Math.random() * codeSnippets.length)] : line.text;
                    const newX = newY === -100 ? Math.random() * (window.innerWidth - 200) : line.x + Math.sin(line.y * 0.005) * 0.3;

                    return {
                        ...line,
                        text: newText,
                        y: newY,
                        x: newX,
                        color: newY === -100 ? getCodeColor(newText) : line.color,
                    };
                })
            );
        }, 50);

        return () => clearInterval(interval);
    }, []);

    const skills = [
        {
            category: "Frontend",
            icon: "🎨",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"]
        },
        {
            category: "Backend",
            icon: "⚙️",
            skills: ["Node.js", "Express", "Python", "Django", "PHP", "Laravel"]
        },
        {
            category: "Database",
            icon: "🗄️",
            skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase"]
        },
        {
            category: "DevOps",
            icon: "🚀",
            skills: ["Docker", "AWS", "Azure", "CI/CD", "Kubernetes", "Linux"]
        }
    ];

    const projects = [
        {
            title: "E-commerce Platform",
            description: "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos integrado com Stripe e gestão completa de estoque em tempo real.",
            technologies: ["React", "Node.js", "MySQL", "Stripe", "JWT"],
            githubUrl: "https://github.com/almeida/ecommerce-platform",
            liveUrl: "https://ecommerce-demo.almeida.dev"
        },
        {
            title: "Task Management System",
            description: "Sistema completo de gerenciamento de tarefas com colaboração em tempo real, notificações push e dashboard analítico para equipes.",
            technologies: ["Next.js", "MySQL", "Socket.io", "Express", "JWT"],
            githubUrl: "https://github.com/almeida/task-manager",
            liveUrl: "https://tasks.almeida.dev"
        },
        {
            title: "API RESTful Empresarial",
            description: "API robusta para sistema de gestão empresarial com autenticação JWT, documentação Swagger e integração com múltiplos bancos de dados.",
            technologies: ["Express", "MySQL", "JWT", "Swagger", "Docker"],
            githubUrl: "https://github.com/almeida/enterprise-api"
        },
        {
            title: "Dashboard Analytics",
            description: "Dashboard interativo para análise de dados em tempo real com gráficos dinâmicos e relatórios automatizados para tomada de decisões.",
            technologies: ["React", "Node.js", "MySQL", "Chart.js", "WebSocket"],
            githubUrl: "https://github.com/almeida/analytics-dashboard",
            liveUrl: "https://analytics.almeida.dev"
        },
        {
            title: "Sistema de Autenticação",
            description: "Sistema completo de autenticação e autorização com múltiplos provedores, 2FA e gerenciamento de sessões seguras.",
            technologies: ["Express", "MySQL", "JWT", "bcrypt", "OAuth"],
            githubUrl: "https://github.com/almeida/auth-system"
        },
        {
            title: "Mobile App React Native",
            description: "Aplicativo mobile multiplataforma para gestão pessoal com sincronização em nuvem e interface intuitiva.",
            technologies: ["React Native", "Node.js", "MySQL", "Firebase", "AsyncStorage"],
            githubUrl: "https://github.com/almeida/mobile-app",
            liveUrl: "https://app.almeida.dev"
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.backgroundContainer}>
                <div className={styles.backgroundGradient} />
                {codeLines.map(line => (
                    <div
                        key={line.id}
                        className={styles.codeLine}
                        style={{
                            left: `${line.x}px`,
                            top: `${line.y}px`,
                            opacity: line.opacity,
                            transform: `rotate(${Math.sin(line.y * 0.008) * 3}deg)`,
                            color: line.color
                        }}
                    >
                        {line.text}
                    </div>
                ))}
                <div className={styles.overlay} />

                <div className={`${styles.techIndicator} ${styles.techIndicatorReact}`}>
                    ⚛️ React
                </div>
                <div className={`${styles.techIndicator} ${styles.techIndicatorNode}`}>
                    🟢 Node.js
                </div>
                <div className={`${styles.techIndicator} ${styles.techIndicatorMySQL}`}>
                    🗄️ MySQL
                </div>
            </div>

            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <div>
                        <h1 className={styles.heroTitle}>ALMEIDA</h1>
                        <h2 className={styles.heroSubtitle}>Full Stack Developer</h2>
                        <p className={styles.heroDescription}>
                            Transformando ideias em soluções digitais inovadoras.
                            Especialista em React, Node.js e MySQL com foco em performance e experiência do usuário excepcional.
                        </p>
                    </div>

                    <div className={styles.buttonContainer}>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=almeidamurillo196@gmail.com&su=Assunto&body=Mensagem%20inicial"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.primaryButton}
                        >
                            📧 Entre em Contato
                        </a>
                        <a
                            href="/cv-almeida.pdf"
                            download
                            className={styles.secondaryButton}
                        >
                            📄 Download CV
                        </a>
                    </div>

                    <div className={styles.socialLinks}>
                        <a href="https://github.com/almeida" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com/in/almeida-dev" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a href="mailto:almeida.dev@gmail.com" className={styles.socialLink}>
                            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.749L12 10.855l9.615-7.034h.749c.904 0 1.636.732 1.636 1.636z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.maxWidth}>
                    <h2 className={styles.sectionTitle}>Sobre Mim</h2>
                    <div className={styles.card}>
                        <div className={styles.aboutGrid}>
                            <div className={styles.aboutText}>
                                <p className={styles.aboutParagraph}>
                                    Sou um desenvolvedor full stack apaixonado por tecnologia e inovação.
                                    Com mais de 5 anos de experiência, especializo-me em criar soluções
                                    web robustas e escaláveis usando React, Node.js e MySQL.
                                </p>
                                <p className={styles.aboutParagraph}>
                                    Minha jornada inclui o desenvolvimento de aplicações complexas,
                                    desde e-commerce até sistemas empresariais, sempre focando em
                                    código limpo, performance otimizada e experiência do usuário excepcional.
                                </p>
                                <p className={styles.aboutParagraph}>
                                    Tenho experiência sólida em arquiteturas modernas, APIs RESTful,
                                    bancos de dados relacionais e não-relacionais, além de práticas
                                    DevOps para deploy e manutenção de aplicações em produção.
                                </p>
                            </div>
                            <div className={styles.statsGrid}>
                                <div className={styles.statCard}>
                                    <div className={styles.statIcon}>💻</div>
                                    <div className={styles.statNumber}>150+</div>
                                    <div className={styles.statLabel}>Projetos</div>
                                </div>
                                <div className={styles.statCard}>
                                    <div className={styles.statIcon}>☕</div>
                                    <div className={styles.statNumber}>∞</div>
                                    <div className={styles.statLabel}>Cafés</div>
                                </div>
                                <div className={styles.statCard}>
                                    <div className={styles.statIcon}>🚀</div>
                                    <div className={styles.statNumber}>5+</div>
                                    <div className={styles.statLabel}>Anos</div>
                                </div>
                                <div className={styles.statCard}>
                                    <div className={styles.statIcon}>🌟</div>
                                    <div className={styles.statNumber}>24/7</div>
                                    <div className={styles.statLabel}>Dedicação</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.maxWidth}>
                    <h2 className={styles.sectionTitle}>Habilidades Técnicas</h2>
                    <div className={`${styles.grid} ${styles.gridCols4}`}>
                        {skills.map((skill, index) => (
                            <div key={index} className={styles.skillCard}>
                                <div className={styles.skillHeader}>
                                    <span style={{ fontSize: '1.5rem' }}>{skill.icon}</span>
                                    <h3 className={styles.skillTitle}>{skill.category}</h3>
                                </div>
                                <div className={styles.skillTags}>
                                    {skill.skills.map((skillName, skillIndex) => (
                                        <span key={skillIndex} className={styles.skillTag}>
                                            {skillName}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.maxWidth}>
                    <h2 className={styles.sectionTitle}>Projetos em Destaque</h2>
                    <div className={`${styles.grid} ${styles.gridCols3}`}>
                        {projects.map((project, index) => (
                            <div key={index} className={styles.projectCard}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDescription}>{project.description}</p>

                                <div className={styles.projectTech}>
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className={styles.projectTechTag}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className={styles.projectLinks}>
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.projectLink}
                                        >
                                            🔗 Código
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${styles.projectLink} ${styles.projectLinkDemo}`}
                                        >
                                            🚀 Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.maxWidth}>
                    <h2 className={styles.sectionTitle}>Experiência Profissional</h2>
                    <div>
                        <div className={styles.experienceCard}>
                            <div className={styles.experienceHeader}>
                                <div>
                                    <h3 className={styles.experienceTitle}>Senior Full Stack Developer</h3>
                                    <p className={styles.experienceCompany}>TechCorp Solutions</p>
                                </div>
                                <span className={styles.experienceDate}>2022 - Presente</span>
                            </div>
                            <p className={styles.experienceDescription}>
                                Liderança técnica no desenvolvimento de aplicações web complexas usando React, Node.js e MySQL.
                                Responsável por arquitetura de sistemas, mentoria de desenvolvedores júnior e implementação de
                                melhores práticas de desenvolvimento.
                            </p>
                        </div>

                        <div className={styles.experienceCard}>
                            <div className={styles.experienceHeader}>
                                <div>
                                    <h3 className={styles.experienceTitle}>Full Stack Developer</h3>
                                    <p className={styles.experienceCompany}>StartupXYZ</p>
                                </div>
                                <span className={styles.experienceDate}>2020 - 2022</span>
                            </div>
                            <p className={styles.experienceDescription}>
                                Desenvolvimento de MVP e escalabilidade de aplicações. Implementação de APIs RESTful,
                                integração com bancos de dados MySQL e PostgreSQL, e desenvolvimento frontend com React e TypeScript.
                            </p>
                        </div>

                        <div className={styles.experienceCard}>
                            <div className={styles.experienceHeader}>
                                <div>
                                    <h3 className={styles.experienceTitle}>Frontend Developer</h3>
                                    <p className={styles.experienceCompany}>WebAgency Pro</p>
                                </div>
                                <span className={styles.experienceDate}>2019 - 2020</span>
                            </div>
                            <p className={styles.experienceDescription}>
                                Especialização em desenvolvimento frontend com React, criação de interfaces responsivas
                                e otimização de performance. Colaboração estreita com designers UX/UI para implementação
                                pixel-perfect de layouts.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.maxWidth}>
                    <div className={styles.contactCenter}>
                        <h2 className={styles.sectionTitle}>Vamos Trabalhar Juntos?</h2>
                        <p className={styles.contactIntro}>
                            Estou sempre aberto a novos desafios e oportunidades.
                            Entre em contato para discutirmos seu próximo projeto!
                        </p>
                        <div className={styles.contactCard}>
                            <div className={styles.contactGrid}>
                                <div className={styles.contactItem}>
                                    <div className={styles.contactIcon}>📧</div>
                                    <h3 className={styles.contactTitle}>Email</h3>
                                    <a href="mailto:almeida.dev@gmail.com" className={styles.contactLink}>
                                        almeida.dev@gmail.com
                                    </a>
                                </div>
                                <div className={styles.contactItem}>
                                    <div className={styles.contactIcon}>💼</div>
                                    <h3 className={styles.contactTitle}>LinkedIn</h3>
                                    <a href="https://linkedin.com/in/almeida-dev" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                                        linkedin.com/in/almeida-dev
                                    </a>
                                </div>
                                <div className={styles.contactItem}>
                                    <div className={styles.contactIcon}>🔗</div>
                                    <h3 className={styles.contactTitle}>GitHub</h3>
                                    <a href="https://github.com/almeida" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                                        github.com/almeida
                                    </a>
                                </div>
                            </div>

                            <div className={styles.availabilitySection}>
                                <h3 className={styles.availabilityTitle}>Disponível para:</h3>
                                <div className={styles.availabilityTags}>
                                    <span className={`${styles.availabilityTag} ${styles.availabilityTagFreelance}`}>
                                        Projetos Freelance
                                    </span>
                                    <span className={`${styles.availabilityTag} ${styles.availabilityTagConsulting}`}>
                                        Consultoria Técnica
                                    </span>
                                    <span className={`${styles.availabilityTag} ${styles.availabilityTagFulltime}`}>
                                        Oportunidades Full-time
                                    </span>
                                    <span className={`${styles.availabilityTag} ${styles.availabilityTagMentoring}`}>
                                        Mentoria
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <div className={styles.maxWidth}>
                    <p className={styles.footerText}>
                        © 2024 Almeida. Desenvolvido com ❤️ usando React, Node.js e MySQL
                    </p>
                    <p className={styles.footerQuote}>
                        "Code is poetry written in logic" - Transformando ideias em realidade digital
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default TelaInicial;