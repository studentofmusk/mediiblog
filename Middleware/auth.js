const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        // Get token from the cookies
        const token = req.cookies.mediiblog; 
        console.log(token)
        // Check if token exists
        if (!token) {
            return res.status(401).json({ message: 'No token, authorization denied' });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        // Attach the user from the payload to the request object
        req.admin = { id: decoded.adminId };

        next(); // Proceed to the next middleware or route handler

    } catch (error) {
        res.status(401).send({success:false,  message: 'Token is not valid' });
    }
};

module.exports = auth;
