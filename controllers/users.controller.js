const { User } = require('../models');

exports.create = async ( req, res ) => {
    const user = req.body;
    const newUser = await User.create(user);

    res.status(201).json({
        users: newUser
    })
}

exports.listAll = async ( req, res ) => {
    const usersList = await User.findAll();

    res.status(200).json({
        users: usersList
    })
}

exports.listOne = async ( req, res ) => {
    const id = req.params.id
    const userDetails = await User.findOne({where: {id}});

    res.status(200).json({
        users: userDetails
    })
}

exports.update = async ( req, res ) => {
    const id = req.params.id;
    const updateUser = await User.update(req.body, {where: {id}})

    res.status(200).json({
        users: updateUser
    }) 
}

exports.delete = async ( req, res ) => {
    const id = req.params.id
    const deletedUser = await User.destroy({where: {id}})

    res.status(204).json({
        msg: 'user deleted'
    }) 

}