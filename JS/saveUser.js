function saveUser(mobileNumber, password) {
    if (mobileNumber.length() < 10) {
        return "Invalid mobile number provided"
    }

    if (password.length < 8) {
        return "Password not strong"

    }

    // Send API Request
    // or
    // Save details in DB`
}

