import express  from 'express';

const router = express.Router();


const moduleRoutes = [
    // {
    //     path: '/create-student',
    //     route:StudentRoutes
    // },
    {
        path: '/students',
        route:'/'
    },
    {
        path: '/users',
        // route:UserRoutes
    },
    {
        path: '/academic-semesters',
        // route:AcademicSemesterRoutes
    }
]

// moduleRoutes.forEach((route) => {
//     router.use(route.path,route.route)
// })
// router.use("/students", StudentRoutes);
// router.use("/users", UserRoutes);


export default router;