import { createBrowserRouter } from "react-router-dom";
import { DEFAULT, TASKLIST } from "./keys";
import { AddTask, ShowTask } from "../page";

const router =createBrowserRouter([
    {
        path : DEFAULT,
        element:<AddTask />
    },
    {
        path : TASKLIST,
        element:<ShowTask />
    }
])

export default router;