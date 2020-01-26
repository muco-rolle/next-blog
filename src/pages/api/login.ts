import axios from 'axios';

export default async (req, res) => {
    const { username } = await req.body;
    const url = `https://api.github.com/users/muco-rolle`;

    try {
        const response = await axios.get(url);
        res.status(200).json({ token: response.data.id });
    } catch (error) {
        console.log(error.response);
    }
};
