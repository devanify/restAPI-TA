const logRequest = (req,res,next) => {
    console.log(`request to http://localhost:3000${req.path}`);
    next()
}

export default logRequest;