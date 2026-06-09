module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Bulletproof open-source stable video links (Never blockable)
        const mockVideos = [
            "https://www.w3schools.com/html/mov_bbb.mp4",
            "https://www.w3schools.com/html/movie.mp4",
            "https://html5demos.com/assets/dizzy.mp4"
        ];
        
        const randomVideo = mockVideos[Math.floor(Math.random() * mockVideos.length)];

        // Artificial delay for render loop
        await new Promise(resolve => setTimeout(resolve, 4000));

        return res.status(200).json({
            success: true,
            videoUrl: randomVideo,
            message: "Matrix pipeline bypass active."
        });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
