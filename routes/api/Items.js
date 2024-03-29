const express = require('express');
const router = express.Router();


const Item = require('../../model/Item');

// route Get api/items

router.get('/', (req, res) => {
    Item.find().sort({ date: -1 }).then(items => res.json(items));
});


//route Post api/items
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});


//route Delet api/items/:id
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id).then(item => item.remove()).then(() => res.json({ succes: true }))
        .catch(err => res.status(404).json({ success: false }));
})

module.exports = router;