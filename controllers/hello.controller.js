exports.hello = async (req, res) => {
    res.status(200).json({
        msg: process.env.HelloMessage
    })
}