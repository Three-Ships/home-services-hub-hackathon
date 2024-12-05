export default function ProjectLayout({ children }) {
    return (
        <div>
            <nav>
                {/* Add project-specific navigation here */}
            </nav>
            <main>{children}</main>
        </div>
    );
}
