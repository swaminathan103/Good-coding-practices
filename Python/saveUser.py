def save_user(mobile_number, password):
    if len(mobile_number) < 10:
        return "Invalid mobile number provided"

    if len(password) < 8:
        return "Password not strong"

    # Send API Request
    # or
    # Save details in DB

