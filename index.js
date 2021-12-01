import express from "express";

// ROUTES FUCNTIONS
// Registration
import { userRegistration } from "./routes/registration/userRegistration.js";
import { driverRegistration } from "./routes/registration/driverRegistration.js";
// Queries
import { userQuery } from "./routes/queries/userQuery.js";
import { driverQuery } from "./routes/queries/driverQuery.js";
import { customQuery } from "./routes/queries/customQuery.js";
// Credentials
import { adminCredentials } from "./routes/credentials/adminCredentials.js";
// Login
import { adminLogin } from "./routes/login/adminLogin.js";

const app = express();

const port = process.env.PORT || 1412;
app.listen(port, () => {
  console.log(`Server listening on port http://127.0.0.1:${port}`);
});

app.use(express.static("public"));
app.use(express.json());

// API ROUTES
// registration APIs
app.post("/api/registration/user", userRegistration);
app.post("/api/registration/driver", driverRegistration);

// login APIs
app.post("/api/login/admin", adminLogin);

// admin query APIs
app.post("/api/query/user", userQuery);
app.post("/api/query/driver", driverQuery);
app.post("/api/query/custom", customQuery);

// credentials APIs
app.post("/api/credentials/admin", adminCredentials);
