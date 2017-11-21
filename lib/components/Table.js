import React from 'react';

const M11Content = (props) => {
    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Author</td>
                        <td>Created</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(props.projects).map(project =>
                        <tr key={project.id}>
                            <td>{project.id}</td>
                            <td>{project.title}</td>
                            <td>{project.author}</td>
                            <td>{project.created}</td>
                            <td>{project.status}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default M11Content;
