import React, { useState, useEffect } from "react";
import "./App.css";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    icon,
    title,
    description
}) => (
    <div className="feature-card">
        <div className="feature-icon-box" aria-hidden="true">
            {icon}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

export const App: React.FC = () => {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light" || savedTheme === "dark") {
            return savedTheme;
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <div id="top" className="page-container">
            {/* Navigation */}
            <header className="navbar">
                <div className="section-wrapper nav-content">
                    <a href="#top" className="logo">
                        <span className="logo-dot"></span>
                        example page
                    </a>

                    <div className="nav-right">
                        <nav aria-label="Main navigation">
                            <ul className="nav-links">
                                <li>
                                    <a href="#features">The examples</a>
                                </li>
                                <li>
                                    <a href="#cta">Possibilities</a>
                                </li>
                            </ul>
                        </nav>

                        <button
                            className="theme-toggle-btn"
                            onClick={toggleTheme}
                            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                        >
                            {theme === "light" ? (
                                /* Moon Icon */
                                <svg
                                    aria-hidden="true"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                                </svg>
                            ) : (
                                /* Sun Icon */
                                <svg
                                    aria-hidden="true"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="12" r="4" />
                                    <path d="M12 2v2" />
                                    <path d="M12 20v2" />
                                    <path d="m4.93 4.93 1.41 1.41" />
                                    <path d="m17.66 17.66 1.41 1.41" />
                                    <path d="M2 12h2" />
                                    <path d="M20 12h2" />
                                    <path d="m6.34 17.66-1.41 1.41" />
                                    <path d="m19.07 4.93-1.41 1.41" />
                                </svg>
                            )}
                        </button>

                        <a href="#cta" className="btn btn-primary">
                            Find your example
                        </a>
                    </div>
                </div>
            </header>

            <main className="main-content">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="section-wrapper">
                        <span className="hero-badge">
                            A world of possibility. By example.
                        </span>
                        <h1 className="hero-title">
                            A Better Way to <br />{" "}
                            Experience <span>Examples.</span>
                        </h1>
                        <p className="hero-subtitle">
                            A fresh perspective. A familiar feeling. A place for
                            examples to become whatever comes next.
                            Discover a little more of what could be.
                        </p>
                        <div className="hero-actions">
                            <a href="#features" className="btn btn-primary">
                                Explore examples
                                <span aria-hidden="true">↗</span>
                            </a>
                            <a href="#features" className="btn btn-secondary">
                                Discover the possibilities
                            </a>
                        </div>
                    </div>
                </section>

                {/* Features Grid Section */}
                <section id="features" className="features-section">
                    <div className="section-wrapper">
                        <div className="section-header">
                            <h2 className="section-title">
                                Good things begin with an example.
                            </h2>
                            <p className="section-description">
                                A little intention. A little imagination.
                                Room to see things in a new way.
                            </p>
                        </div>

                        <div className="features-grid">
                            <FeatureCard
                                icon={
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                        <path d="m9 12 2 2 4-4" />
                                    </svg>
                                }
                                title="Thoughtful Examples"
                                description="Considered from the first impression to the finer details. Examples that leave room for your own interpretation."
                            />

                            <FeatureCard
                                icon={
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                }
                                title="Seamless Experience"
                                description="From one example to the next, let curiosity lead the way. A natural invitation to keep exploring."
                            />

                            <FeatureCard
                                icon={
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                }
                                title="Built for Possibility"
                                description="An example is only the beginning. Imagine where it could take you, and make space for what comes next."
                            />
                        </div>
                    </div>
                </section>

                {/* Highlight Banner / CTA */}
                <section id="cta" className="highlight-section">
                    <div className="section-wrapper">
                        <div className="highlight-box">
                            <span className="eyebrow">
                                YOUR NEXT CHAPTER
                            </span>
                            <h2>
                                Every possibility starts with an example.
                            </h2>
                            <p>
                                You don’t need the whole picture to find a little
                                inspiration. Start with an example. See where
                                it leads.
                            </p>
                            <a href="#features" className="btn btn-primary">
                                Find your starting point
                                <span aria-hidden="true">↗</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="section-wrapper footer-content">
                    <div>
                        <p className="footer-tagline">
                            A little inspiration. An open invitation.
                        </p>
                        <p className="footer-copy">
                            © {new Date().getFullYear()} example page.
                            All rights reserved.
                        </p>
                    </div>
                    <ul className="footer-nav">
                        <li>
                            <a href="#features">Explore</a>
                        </li>
                        <li>
                            <a href="#cta">Imagine</a>
                        </li>
                        <li>
                            <a href="#top">Back to the beginning ↑</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default App;
