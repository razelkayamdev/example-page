import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";

function mockSystemTheme(theme: "light" | "dark") {
    vi.stubGlobal(
        "matchMedia",
        vi.fn((query: string) => ({
            matches:
                query === "(prefers-color-scheme: dark)" && theme === "dark"
        }))
    );
}

beforeEach(() => {
    localStorage.clear();
    mockSystemTheme("light");
});

afterEach(() => {
    cleanup();
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
    vi.unstubAllGlobals();
});

describe("App", () => {
    it("renders the main heading and feature cards", () => {
        render(<App />);

        expect(
            screen.getByRole("heading", {
                level: 1,
                name: "A Better Way to Experience Examples."
            })
        ).toBeTruthy();

        for (const name of [
            "Thoughtful Examples",
            "Seamless Experience",
            "Built for Possibility"
        ]) {
            expect(
                screen.getByRole("heading", { level: 3, name })
            ).toBeTruthy();
        }
    });

    it("links the feature and CTA actions to existing sections", () => {
        render(<App />);

        for (const [name, target] of [
            ["The examples", "features"],
            ["Discover the possibilities", "features"],
            ["Find your example", "cta"],
            ["Explore examples", "features"]
        ]) {
            const link = screen.getByRole("link", { name });
            expect(link.getAttribute("href")).toBe(`#${target}`);
            expect(document.getElementById(target)).not.toBeNull();
        }
    });

    it("gives every navigation and CTA link an existing destination", () => {
        render(<App />);

        for (const link of screen.getAllByRole("link")) {
            const href = link.getAttribute("href");
            expect(href).toMatch(/^#.+/);
            expect(document.getElementById(href!.slice(1))).not.toBeNull();
        }
        expect(
            screen.getByRole("heading", {
                name: "Every possibility starts with an example."
            })
        ).toBeTruthy();
        expect(
            screen.getByText("A little inspiration. An open invitation.")
        ).toBeTruthy();
    });

    it("falls back to the system theme for an invalid saved value", () => {
        localStorage.setItem("theme", "unknown");
        mockSystemTheme("dark");
        render(<App />);
        expect(document.documentElement.getAttribute("data-theme")).toBe(
            "dark"
        );
    });

    it.each(["light", "dark"] as const)(
        "uses the system's %s theme when no theme is saved",
        (theme) => {
            mockSystemTheme(theme);
            render(<App />);

            expect(document.documentElement.getAttribute("data-theme")).toBe(
                theme
            );
        }
    );

    it("switches themes in both directions and saves the selection", () => {
        render(<App />);

        fireEvent.click(
            screen.getByRole("button", { name: "Switch to dark mode" })
        );
        expect(document.documentElement.getAttribute("data-theme")).toBe(
            "dark"
        );
        expect(localStorage.getItem("theme")).toBe("dark");

        fireEvent.click(
            screen.getByRole("button", { name: "Switch to light mode" })
        );
        expect(document.documentElement.getAttribute("data-theme")).toBe(
            "light"
        );
        expect(localStorage.getItem("theme")).toBe("light");
        expect(
            screen.getByRole("button", { name: "Switch to dark mode" })
        ).toBeTruthy();
    });

    it.each(["light", "dark"] as const)(
        "restores a saved %s theme over the system preference",
        (theme) => {
            mockSystemTheme(theme === "light" ? "dark" : "light");
            localStorage.setItem("theme", theme);
            render(<App />);

            expect(document.documentElement.getAttribute("data-theme")).toBe(
                theme
            );
        }
    );

    it("keeps the selected theme when the page mounts again", () => {
        const { unmount } = render(<App />);
        fireEvent.click(
            screen.getByRole("button", { name: "Switch to dark mode" })
        );
        unmount();
        document.documentElement.removeAttribute("data-theme");

        render(<App />);

        expect(document.documentElement.getAttribute("data-theme")).toBe(
            "dark"
        );
        expect(
            screen.getByRole("button", { name: "Switch to light mode" })
        ).toBeTruthy();
    });
});
