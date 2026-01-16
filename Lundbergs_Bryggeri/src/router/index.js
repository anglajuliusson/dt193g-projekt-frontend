import { createRouter, createWebHistory } from 'vue-router'

// Importerar vyer. Varje view motsvarar en sida.
import LoginView from '../views/LoginView.vue'
import ProductsView from '../views/ProductsView.vue'
import AddProductView from '../views/AddProductView.vue'
import UpdateProductView from '../views/UpdateProductView.vue'
import CategoriesView from '../views/CategoriesView.vue'
import AddCategoryView from '../views/AddCategoryView.vue'
import UpdateCategoryView from '../views/UpdateCategoryView.vue'
import ProfileView from '../views/ProfileView.vue'
import AddProfileView from '../views/AddProfileView.vue'
import UpdateProfileView from '../views/UpdateProfileView.vue'

// Skapar en router-instans som hanterar navigationen utan att ladda om sidan.
const router = createRouter({

  // Använder web history mode för snygga URL:er utan #
  history: createWebHistory(),

  // routes definierar vilka URL:er som ska visa vilka vyer (components).
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/add-product',
      name: 'AddProduct',
      component: AddProductView
    },
    {
      path: '/update-product',
      name: 'UpdateProduct',
      component: UpdateProductView
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategoriesView
    },
    {
      path: '/add-category',
      name: 'AddCategory',
      component: AddCategoryView
    },
    {
      path: '/update-category',
      name: 'UpdateCategory',
      component: UpdateCategoryView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/add-profile',
      name: 'AddProfile',
      component: AddProfileView
    },
    {
      path: '/update-profile',
      name: 'UpdateProfile',
      component: UpdateProfileView
    }
  ]
})

// Exporterar routern så att den kan användas i main.js och kopplas till Vue-applikationen.
export default router