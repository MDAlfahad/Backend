const asynchandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asynchandler };

// const asynchandler = (fn) => async(req, res, next)=>{

// try {
//     await fn(req, res, next)

// } catch (error) {
//     res.status(error || 400).json({
//         success: false,
//         messaage : error.messaage
//     })
// }
// }