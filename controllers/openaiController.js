// From openAI repo
const { Configuration, OpenAIApi } = require("openai");

//using apikey stored in env file
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


// route handler function
const generateImage = async (req, res) => {
    const { prompt, size } = req.body;
    
    let imageSize = size;
    if(imageSize === 'small') {
        imageSize = '256x256';
    } else if (imageSize === 'medium') {
        imageSize = '512x512';
    } else if (imageSize === 'large') {
        imageSize = '1024x1024'
    }

    try {
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: imageSize
        });

        const imageUrl = response.data.data[0].url

        res.status(200)
            .json({
                success: true,
                data: imageUrl
            });

    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }

        res.status(400)
            .json({
                success: false,
                error: "The image couldn't be generated"
            });
    }
};

module.exports = { generateImage }

