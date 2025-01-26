const express = require('express')
const router = express.Router()
require('dotenv').config({path:'../.env.development'})
const { GoogleGenerativeAI  } = require('@google/generative-ai')
const ai = new GoogleGenerativeAI(process.env.API_KEY)
const instructions = require('./model_instruction')

router.use(express.urlencoded({extended:true}))
router.use(express.json())

router.post('/', async (req,res)=>{
    const model = ai.getGenerativeModel({'model':`${req.body.model}`, 'systemInstruction':`${instructions[req.body.model_type]}`})
    const prompt = req.body.prompt
    const rest = await model.generateContent(prompt)
    const response = rest.response.text()
    res.status(200).json({
        'message':`${response}`
    })
})


module.exports = router