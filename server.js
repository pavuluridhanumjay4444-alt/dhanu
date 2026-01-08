const express = require('express');
const mongoose = require('mongoose');
const Instadata = require('./model');
const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://Dhanu:Rajyalakshmi12345@cluster0.fsuqhpb.mongodb.net/').then(() => console.log('Connected to MongoDB')).catch(err => console.log(err));


app.post('/post_image', async (req, res) => {
    const {title} = req.body;
    const {image} = req.body;
    const {mention} = req.body;
    const {description} = req.body;
    try {
        const newData = new Instadata({title, image, mention, description});
        await newData.save();
        return res.json("post sent successfully");
    } catch (err) {
        console.log(err.message);
    }});
app.get('/get_all_posts', async (req, res) => {
    try {
        const allData = await Instadata.find();
        return res.json(allData);
    } catch (err) {
        console.log(err.message);
    }});
     app.get('/get_post/:id', async (req, res) => {
    try {
        const Data = await Instadata.findById(req.params.id);
        return res.json(Data);
    } catch (err) {
        console.log(err.message);
    }});

    app.put('/update_post/:id', async (req, res) => {
    const {title} = req.body;
    const {image} = req.body;
    const {mention} = req.body;
    const {description} = req.body;
    try {
        const updatedData = await Instadata.findByIdAndUpdate(req.params.id, {title, image, mention, description}, {new: true});
        return res.json(updatedData);
    } catch (err) {
        console.log(err.message);
    }});
    app.delete('/delete_post/:id', async (req, res) => {
    const {title} = req.body;
    const {image} = req.body;
    const {mention} = req.body;
    const {description} = req.body;
    try {
        const updatedData = await Instadata.findByIdAndDelete(req.params.id);
        return res.json(await Instadata.find())
    } catch (err) {
        console.log(err.message);
    }});
    


app.listen(3000, () => console.log('Server is running on http://localhost:3000') );