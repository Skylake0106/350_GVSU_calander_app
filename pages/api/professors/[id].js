import axios from 'axios';

export default async (req, res) => {
    const { id } = req.query;
    try {
    // API gets one professor based on id
    const url = 'https://apex.oracle.com/pls/apex/facultyschedulerasst/proftable/cis/' + id;
    const response = await axios.get(url);
    const data = response.data;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};