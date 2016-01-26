#!/usr/bin/env node

var superagent = require("./index")
var pd = console.log.bind(console)

var URL = "http://localhost:3009"
var request = superagent()

// .run()
request
  .get(`${URL}/users`)
  .run()
  .then(res => pd(res.body))
  .catch(err => pd(err))

// .new()
/*
var a = request.new()
  .use(log)
  .on("response", res => pd(2, res.body))
  .on("request", log)

a.get(`${URL}/users`).end((err, res) => pd(3, res.body))
*/
