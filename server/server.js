const express = require('express');
const cors = require('cors');
const kits = require('./data.json');                        

const app = express();

app.use(cors());

app.get('/api/kits', (req, res) => {
      console.log("Received request for kits with query:", req.query); 
  
      const query = req.query.search;
      if (query) {
          const filteredKits = kits.filter(kit => kit.label_id.includes(query));
          return res.json(filteredKits);
      }
      return res.json(kits);
  });
  
  

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
