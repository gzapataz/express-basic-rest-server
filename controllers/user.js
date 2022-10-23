import { request, response } from "express";

const userGet = (req = request , res = response) => {
    //Query parameters and some of them not sent could be defaulted to some value
    const {q, name, appkey, page = 10 } = req.query; // REST parameters unstructured or const query = req.query
    res.status(200).json({
        "msg": "Get Api - Controller",
        q, name, appkey, page
    });
}

const userPost = (req, res = response) => {
    const { name, dir} = req.body; // Body request in JSON format unstructure
    res.status(201).json({
        "msg": "post Api - Controller",
        name, dir
    });
}

const userPut =  (req, res = response) => {
    const { id } = req.params; // Get parameter unstructured it can be also called id = req.params.id
    res.status(403).json({
        "msg": "Put Api - Controller",
        id
    });
}

const userDelete = (req, res = response) => {
    res.status(500).json({
        "msg": "Delete Api - Controller"
    });
}

const userPatch = (req, res = response) => {
    res.status(504).json({
        "msg": "Patch Api - Controller"
    });
}

export { userGet, userPost, userPut, userDelete, userPatch }
