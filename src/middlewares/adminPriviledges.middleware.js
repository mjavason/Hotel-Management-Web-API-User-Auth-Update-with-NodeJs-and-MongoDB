const adminAuthorization = (req, res, next) => {
    if (req.user.user_type === "admin") {
        next()
    } else {
        res.status(403).send({ message: "You are unauthorized to perform this operation" })
    }
}

module.exports = adminAuthorization;