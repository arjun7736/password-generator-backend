export const isValidPassword=(password: string): boolean => {
    const hasNumber = /[0-9]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasValidLength = password.length > 8;

    return hasNumber && hasUppercase && hasLowercase && hasSpecialChar && hasValidLength;
}

