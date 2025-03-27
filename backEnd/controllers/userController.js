const loginUser = async (req, res) => {
    res.json({msg : "hi login"});

}

const registerUser = async (req, res) => {
    res.json({msg : "hi register"});

}

const adminLogin = async (req, res) => {
    res.json({msg : "hi admin"});

}

export { loginUser, registerUser, adminLogin };