# 📦 Project Overview

## **Newrished - Custom Handcrafted Protein Bars Application**

A React-based application designed for custom-made, handcrafted protein bars.

### **Features:**
- **Flavors Collection:** Users can view a collection of pre-made protein bar flavors.
- **Custom Bars:** Logged-in users can create their own custom protein bars.
- **Editing and Deleting:** Only the owner of a custom bar can edit or delete their custom bars.
- **Non-Logged-In Users:** Can view the collection of flavors but cannot create or manage custom bars.

### **Project Structure**

- **Server Folder:** Contains the local educational server for the project, provided by Soft Uni University.

  **Starting the Service:**

  The REST service is located in a folder named "server" within the provided resources archive. To start the server:
  1. Open a terminal in the server directory.
  2. Execute the following command:
     ```bash
     node server.js
     ```
  If everything initializes correctly, you should see a message indicating the host address and port where the service will respond to requests.

- **Client Folder:** Contains the React project.

  **To start the React application:**
  1. Navigate to the Client Folder: Use the `cd` command to move to the client folder.
     ```bash
     cd path/to/your/project/client
     ```
  2. **Install Dependencies:** Run the following command to install all necessary dependencies:
     ```bash
     npm install
     ```
  3. **Run the Application:** Start the React application with:
     ```bash
     npm run dev
     ```

### **Website Functionality**
- **All Bars Section:** Displays all protein bar flavors available. This section is accessible to both logged-in and non-logged-in users.
  - **Non-Logged-In Users:** Can view the collection of pre-made flavors.
  - **Logged-In Users:** Can view the collection and also see a "Custom Made Bars" button.

- **Custom Bars:**
  - **Creating Custom Bars:** Only logged-in users can create their own custom protein bars. Once created, the user becomes the owner of that custom bar.
  - **Editing and Deleting Custom Bars:** Only the owner of a custom bar can edit or delete their own custom bars. Other logged-in users can view and create new custom bars but cannot modify or remove bars created by others.

- **Collection View:** Non-logged-in users have limited access and can only view the general collection of flavors. They cannot create, edit, or delete any bars.

### **Authentication**

The service is initialized with three users for immediate testing:

- **Username:** peter@abv.bg  
  **Password:** 123456

- **Username:** george@abv.bg  
  **Password:** 123456

- **Username:** admin@abv.bg  
  **Password:** admin

### **Recommended Resolution**

- **Computer:** 1920x1080

---

**Enjoy the Application!**

I hope you enjoy using my custom handcrafted protein bars application. Dive in, create your custom bars, and explore the flavors!
