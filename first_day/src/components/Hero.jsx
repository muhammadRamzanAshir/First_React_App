import { useState, useEffect } from "react";

const HeroSection = () => {
    const [hero, setHero] = useState({
        heading: "YOUR FEET DESERVE THE BEST",
        subtitle: "YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.",
        primary_button_color: "#FF0000",
        secondary_button_color: "#FFFFFF",
        available_icons: [],
        hero_image: "/images/shoe_image.png"
    });

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/hero/")
            .then(response => response.json())
            .then(data => setHero(data))
            .catch(error => console.error("Error fetching hero section:", error));
    }, []);

    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>{hero.heading}</h1>
                <p>{hero.subtitle}</p>

                <div className="hero-btn">
                    <button style={{ backgroundColor: hero.primary_button_color, color: "#fff" }}>
                        Shop Now
                    </button>
                    <button className="secondary-btn" style={{ backgroundColor: hero.secondary_button_color, color: "#000" }}>
                        Category
                    </button>
                </div>

                <div className="shopping">
                    <p>Available On</p>
                    <div className="brand-icons">
                        {hero.available_icons.map((icon, index) => (
                            <img key={index} src={icon} alt={`icon-${index}`} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="hero-image">
                <img src={hero.hero_image} alt="hero-logo" />
            </div>
        </main>
    );
};

export default HeroSection;
