import express from "express";

// ROUTES FUCNTIONS
// Registration
import { userRegistration } from "./routes/registration/userRegistration.js";
import { driverRegistration } from "./routes/registration/driverRegistration.js";
// Queries
import { userQuery } from "./routes/queries/userQuery.js";
import { driverQuery } from "./routes/queries/driverQuery.js";
import { tripQuery } from "./routes/queries/tripQuery.js";
import { customQuery } from "./routes/queries/customQuery.js";
// Credentials
import { credentials } from "./routes/credentials/credentials.js";
// Login
import { login } from "./routes/login/login.js";
// Session End
import { sessionEnd } from "./routes/session-end/sessionEnd.js";
// Trip Function
import { bookingTrip } from "./routes/trip/bookingTrip.js";
import { tripHistory } from "./routes/trip/tripHistory.js";
import { availableTrip } from "./routes/trip/availableTrip.js";
import { acceptingTrip } from "./routes/trip/acceptingTrip.js";

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
app.post("/api/login/:role", login);

// session-end APIs
app.post("/api/session-end/:role", sessionEnd);

// admin query APIs
app.post("/api/query/user", userQuery);
app.post("/api/query/driver", driverQuery);
app.post("/api/query/trip", tripQuery);
app.post("/api/query/custom", customQuery);

// credentials APIs
app.post("/api/credentials/:role", credentials);

// trip APIs
app.post("/api/trip/booking", bookingTrip);
app.post("/api/trip/history/:role", tripHistory);
app.post("/api/trip/available", availableTrip);
app.post("/api/trip/accepting", acceptingTrip);
