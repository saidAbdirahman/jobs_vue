import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import jobs from '../views/jobs/jobs.vue'
import JobDetails from '../views/jobs/jobDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/jobs',
    name: 'job',
    component: jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobDetailts',
    component: JobDetails,
    props:true
  },
  {
    path:'/jobs-all',
    redirect:'/jobs'
  },
  {
    path:'/:catchAll(.*)',
    name: NotFound,
    component: NotFound
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
