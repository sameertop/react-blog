import { Link, useLocation, Outlet } from "react-router-dom";

function Navbar() {
    const { pathname } = useLocation();

    const linkStyle = {
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "8px 16px",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: "500",
        textDecoration: "none",
        color: "#333",
    };

    const activeStyle = {
        ...linkStyle,
        backgroundColor: "#f0f0f0",
        color: "#000",
    };

    return (
        <>
            <nav style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 24px",
                height: "56px",
                backgroundColor: "#fff",
                borderBottom: "1px solid #e5e5e5",
            }}>
                <span style={{ fontSize: "18px", fontWeight: "500" }}>MyApp</span>
                <div style={{ display: "flex", gap: "8px" }}>
                    <Link to="/"        style={pathname === "/"        ? activeStyle : linkStyle}>Home</Link>
                    <Link to="/contact" style={pathname === "/contact" ? activeStyle : linkStyle}>Contact</Link>
                    <Link to="/About"   style={pathname === "/About"   ? activeStyle : linkStyle}>About</Link>
                    <Link to="/Users"   style={pathname === "/Users"   ? activeStyle : linkStyle}>Users</Link>
                </div>
            </nav>
            <Outlet />   {/* ← Home आणि Contact इथे render होतील */}
        </>
    )
}
export default Navbar;