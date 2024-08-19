const axios = require('axios')
const mongoose = require('mongoose')
const Wine = require('./wine')

require('dotenv').config()  

const uri = process.env.MONGODBURI

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => { console.log('connection error') });
db.on('connected', () => { console.log('connection done') });
db.on('disconnected', () => { console.log('connection disconnected') })

const API_URLS = {
    red: 'https://api.sampleapis.com/wines/reds',
    white: 'https://api.sampleapis.com/wines/whites',
    rose: 'https://api.sampleapis.com/wines/rose',
    sparkling: 'https://api.sampleapis.com/wines/sparkling',
    dessert: 'https://api.sampleapis.com/wines/dessert',
    port: 'https://api.sampleapis.com/wines/port'
  }


  async function seedWines() {
    try {
      for (const [type, url] of Object.entries(API_URLS)) {
        const response = await fetch(url)
        const wines = await response.json()
  
        console.log(`Seeding ${type} wines...`, wines)
  
        for (const wine of wines) {
          console.log(`Processing wine:`, wine)
          await Wine.create({
            winery: wine.winery || 'Unknown', 
            type: type,
            wine: wine.wine || 'No name', 
            location: wine.location || 'Unknown',
            image: wine.image || 'No image' 
          });
        }
      }
      console.log('Wines seeded successfully!')
    } catch (error) {
      console.error('Error seeding wines:', error)
    } finally {
      mongoose.connection.close();
    }
  }
  
  
  seedWines()