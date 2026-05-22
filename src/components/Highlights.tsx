import React from 'react';

export const Highlights: React.FC = () => {
    return (
        <div id="highlights" className="highlights-section">
            <div className="container">
                <div className="highlights-grid">
                    <div className="highlights-left">
                        <div className="highlights-title">
                            Stay <span className="font-serif-italic">Hungry</span> Stay <span className="font-serif-italic">Foolish</span> —
                        </div>
                        <div className="highlights-author">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: '0.25rem' }}>
                                <title>Apple</title>
                                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                            </svg>
                            <span style={{ fontWeight: 600 }}>Steve Jobs</span>, Ex CEO of Apple Inc.
                        </div>
                    </div>
                    <div className="highlights-right">
                        <div>
                            Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy people who are crazy enough to think they can change the world, are the ones who do.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
