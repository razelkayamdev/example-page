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
        <div className="feature-icon-box">{icon}</div>
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
        <div className="page-container">
            {/* Navigation */}
            <header className="navbar">
                <div className="section-wrapper nav-content">
                    <a href="#" className="logo">
                        <span className="logo-dot"></span>
                        example page
                    </a>

                    <div className="nav-right">
                        <ul className="nav-links">
                            <li>
                                <a href="#features">Features</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#pricing">Pricing</a>
                            </li>
                        </ul>

                        <button
                            className="theme-toggle-btn"
                            onClick={toggleTheme}
                            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                        >
                            {theme === "light" ? (
                                /* Moon Icon */
                                <svg
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
                            Get Started
                        </a>
                    </div>
                </div>
            </header>

            <main className="main-content">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="section-wrapper">
                        <span className="hero-badge">Thoughtful Design</span>
                        <h1 className="hero-title">
                            A calmer approach to building for the web
                        </h1>
                        <p className="hero-subtitle">
                            Designed to eliminate friction and focus on what
                            truly matters. Experience a clean, balanced
                            interface built for clarity in any lighting.
                        </p>
                        <div className="hero-actions">
                            <a href="#cta" className="btn btn-primary">
                                Start exploring
                            </a>
                            <a href="#features" className="btn btn-secondary">
                                Learn more
                            </a>
                        </div>
                    </div>
                </section>

                {/* Features Grid Section */}
                <section id="features" className="features-section">
                    <div className="section-wrapper">
                        <div className="section-header">
                            <h2 className="section-title">
                                Crafted with intention
                            </h2>
                            <p className="section-description">
                                Every detail is sculpted to maintain balance,
                                comfort, and focus throughout your day and
                                night.
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
                                title="Clarity First"
                                description="Uncluttered spaces and purposeful elements that allow your ideas to breathe and flow naturally."
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
                                title="Seamless Adaptability"
                                description="Automatic system preference detection and persistent theme switching for low-light environments."
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
                                title="Quiet Elegance"
                                description="Soft charcoal and muted sage tones engineered to eliminate glare and eye fatigue."
                            />
                        </div>
                    </div>
                </section>

                {/* Highlight Banner / CTA */}
                <section id="cta" className="highlight-section">
                    <div className="section-wrapper">
                        <div className="highlight-box">
                            <h2>Ready to experience simple?</h2>
                            <p>
                                Join thousands of creators who have chosen a
                                clearer, quieter approach to their workflow.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Get started today
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="section-wrapper footer-content">
                    <p className="footer-copy">
                        © {new Date().getFullYear()} example page. All rights
                        reserved.
                    </p>
                    <ul className="footer-nav">
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Terms of Service</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default App;
