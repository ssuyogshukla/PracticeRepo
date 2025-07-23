
function About() {
    return (
        <>
            <div style={{
                padding: '20px',
                backgroundColor: '#f8f9fa', // Light background color
                borderRadius: '8px', // Rounded corners
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow
                maxWidth: '800px', // Maximum width for the content
                margin: '20px auto', // Center the content
                fontFamily: 'Arial, sans-serif', // Font family
                lineHeight: '1.6', // Line height for better readability
                color: '#333' // Text color
            }}>
                <h2 style={{
                    textAlign: 'center', // Center the heading
                    color: '#007bff' // Primary color for the heading
                }}>About the Project Management System</h2>
                <p>
                    The Project Management System is a web-based solution designed to improve team collaboration and project tracking. It supports three user roles: Admin, Manager, and Team Member—each with defined permissions and access controls. 
                </p>
                <p>
                    Admins manage projects, assign managers, oversee users, and allocate roles. Managers create and assign tasks, monitor progress, manage teams, analyze reports, and handle notifications. Team Members update task statuses, log time, and personalize dashboards and notifications.
                </p>
                <p>
                    The system addresses key business challenges such as fragmented communication, unclear task ownership, and limited real-time visibility. An intuitive board interface promotes efficient tracking, clear progress monitoring, and seamless coordination in agile environments.
                </p>
                <p>
                    Technical requirements include HTTPS encryption, role-based access control, responsive design, and cross-browser compatibility, ensuring secure, accessible, and modern project management for today’s organizations.
                </p>
            </div>
        </>
    );
}

export default About;
