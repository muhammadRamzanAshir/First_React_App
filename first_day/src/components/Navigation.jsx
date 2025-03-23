import { useState, useEffect } from "react";

const Navigation = () => {
    const [navData, setNavData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/landing/")
            .then(response => response.json())
            .then(data => {
                console.log("Fetched data:", data);  // 🔍 Debugging
                setNavData(data);
            })
            .catch(error => {
                console.error("Error fetching navigation data:", error);
                setError(error.message);
            });
    }, []);

    if (error) {
        return <p>Error: {error}</p>;  
    }

    if (!navData) {
        return <p>Loading...</p>;  
    }

    return (
        <nav className="container">
            <div className="logo">
                <img src={navData.logo} alt="Brand Logo" />
            </div>
            <ul>
                {navData.nav_items.map((item, index) => (
                    <li key={index}><a href="#">{item}</a></li>
                ))}
            </ul>
            <button style={{ backgroundColor: navData.login_button_color, color: "#fff" }}>
                {navData.login_button_text}
            </button>
        </nav>
    );
};

export default Navigation;
