import { Accounts } from 'meteor/accounts-base'

export default function () {

    Accounts.config({
        sendVerificationEmail: true
    });

    Accounts.emailTemplates.siteName = "Resume.io";
    Accounts.emailTemplates.from     = "Resume.io <admin@resume.io>";

    Accounts.emailTemplates.verifyEmail = {
        subject() {
            return "[Resume.io] Verify Your Email Address";
        },
        text( user, url ) {
            let emailAddress   = user.emails[0].address,
                urlWithoutHash = url.replace( '#/', '' ),
                supportEmail   = "support@resume.io",
                emailBody      = `To verify your email address (${emailAddress}) visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

            return emailBody;
        }
    };

    Accounts.emailTemplates.resetPassword = {
        subject() {
            return "[Resume.io] Reset your password";
        },
        text( user, url ) {
            let urlWithoutHash = url.replace( '#/', '' ),
                supportEmail   = "support@resume.io",
                emailBody      = `To reset your password visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this reset, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

            return emailBody;
        }
    };

}