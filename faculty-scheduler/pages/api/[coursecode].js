import axios from 'axios';

export default async (req, res) => {
    const { coursecode } = req.query;
    try {
    // API gets one depth rating for a professor by prof ID
    const url = 'https://apex.oracle.com/pls/apex/facultyschedulerasst/courses/depth_for_course/' + coursecode;
    const response = await axios.get(url);
    const data = response.data.items;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};