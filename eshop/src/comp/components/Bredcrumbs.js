import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Breadcrumbs.css"; // Säkerställ att du har en CSS-fil för styling

export default function Breadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <div className="breadcrumbs">
            <Link to="/">Home</Link>
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                return (
                    <React.Fragment key={name}>
                        <span className="breadcrumb-separator">{' > '}</span>
                        {isLast ? <span>{name}</span> : <Link to={routeTo}>{name}</Link>}
                    </React.Fragment>
                );
            })}
        </div>
    );
}
