# EmailJS Setup Guide

To make the contact form fully functional and send emails to `anjalivarshney405@gmail.com`, follow these steps:

1.  **Create an Account**: Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account.
2.  **Add Email Service**:
    *   Click "Add New Service".
    *   Select "Gmail".
    *   Connect your Gmail account (`anjalivarshney405@gmail.com`).
    *   Click "Create Service".
    *   Copy the **Service ID** (e.g., `service_xxxxx`).

3.  **Create an Email Template**:
    *   Go to "Email Templates" and create a new template.
    *   Set the Subject to: `New Portfolio Message from {{user_name}}`.
    *   Set the Content to:
        ```
        Name: {{user_name}}
        Email: {{user_email}}
        Message: {{message}}
        ```
    *   Save the template.
    *   Copy the **Template ID** (e.g., `template_xxxxx`).

4.  **Get Public Key**:
    *   Go to "Account" -> "API Keys".
    *   Copy your **Public Key**.

5.  **Update Code**:
    *   Open `src/components/Contact.jsx`.
    *   Replace the placeholder values with your actual keys:

    ```javascript
    const SERVICE_ID = "YOUR_SERVICE_ID"; 
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";
    ```

Once done, the form will send real emails directly to your inbox!
