const express = require('express');
const fs = require('fs');
const axios = require('axios');
const path = require('path');


/**
 * 
 * @param {express.Request} req
 * @param {express.Response} res
 * @returns 
 */
 const home = async (req, res) => {
    try {
        let path = '';
        if (req.params.page)
            path = `page/${req.params.page}`;
        else
            path = '';

        const datas = JSON.parse(fs.readFileSync(`./database/home.json`))
        let data = datas.reverse()
        return res.json({ success: true, data: data });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @returns
 */
 const post = async (req, res) => {
    try {
        const id = req.params.id
        const episode = req.params.episode
        const data = JSON.parse(fs.readFileSync(`./database/post/${id}/${episode}.json`))
        return res.status(200).json({ success: true, data: data[0] });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

module.exports = { home, post }