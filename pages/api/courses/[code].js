import axios from 'axios';

export default async (req, res) => {
    const { code } = req.query;
    try {
    // API gets one course from coursetable
    const url = 'https://apex.oracle.com/pls/apex/facultyschedulerasst/coursetable/cis/' + code;
    const response = await axios.get(url);
    const data = response.data;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};